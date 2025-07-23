import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getInfiniteNews, getNews } from "../../store/news/action";
import { Row, Col } from "antd";
import { useSearchParams } from "react-router";
import type { NewsData } from "../../store/news/type";
import { Loader } from "../../components";
import { HorizontalCard } from "../../components";
import { InfiniteScrollTrigger } from "../../components/infinite-scroll";
import dayjs from "dayjs";
import { useBreakpoint } from "../../hooks";

export default function Search() {
  const [dataSize, setDataSize] = useState<number>(10);
  const { md } = useBreakpoint();
  const news = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");

  useEffect(() => {
    dispatch(
      getNews({
        q: q as string,
        from: dayjs().subtract(20, "day").format("YYYY-MM-DD"),
        to: dayjs().format("YYYY-MM-DD"),
        sortBy: "publishedAt",
        pageSize: 10,
        page: 1,
      })
    );
  }, [dispatch]);

  const hasMore = news.data?.articles
    ? (news.data?.articles?.length || 0) < (news.data.totalResults || 0) &&
      dataSize < 100
    : false;

  const loadMoreItems = useCallback(async () => {
    const newSize = dataSize + 30;
    const checkedSize = newSize > 100 ? 100 : newSize
    setDataSize(checkedSize);

    if (hasMore) {
      dispatch(
        getInfiniteNews({
          q: q || "news",
          from: dayjs().subtract(20, "day").format("YYYY-MM-DD"),
          to: dayjs().format("YYYY-MM-DD"),
          sortBy: "popularity",
          pageSize: checkedSize,
          page: 1,
        })
      );
    }
  }, [dispatch, q, dataSize]);

  if (news.loading) {
    return <Loader />;
  }

  return (
    <div className="relative space-y-4 min-h-screen w-screen max-w-6xl overflow-hidden px-4 py-28 md:px-20">
      <Row gutter={[16, 16]}>
        {news.data?.articles?.map((article: NewsData, index: number) => {
          return (
            <Col key={index} span={24}>
              <HorizontalCard
                article={article}
                imagePosition="left"
                size={md ? "large" : "small"}
                imageContainerClassName="md:h-32 lg:h-60"
              />
            </Col>
          );
        })}
      </Row>
      {(news.data?.articles?.length || 0) > 0 && (
        <InfiniteScrollTrigger
          onLoadMore={loadMoreItems}
          hasMore={hasMore}
          isLoading={news.infiniteLoading}
          loadingText="Loading more news..."
          endText="No more news available"
        />
      )}
    </div>
  );
}
