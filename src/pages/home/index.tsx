import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getInfiniteNews,
  getNews,
  getNewsTopHeadlines,
} from "../../store/news/action";
import { Flex, Row, Col } from "antd";
import { useParams } from "react-router";
import type {
  IMetaNewsResponse,
  NewsData,
  TCategory,
} from "../../store/news/type";
import { Loader } from "../../components";
import HorizontalCard from "../../components/cards/horizontal-card";
import VerticalCard from "../../components/cards/vertical-card";
import { useBreakpoint } from "../../hooks";
import { InfiniteScrollTrigger } from "../../components/infinite-scroll";
import dayjs from "dayjs";

export default function Home() {
  const [dataSize, setDataSize] = useState<number>(10);
  const news = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();
  const params = useParams();
  const { md } = useBreakpoint();
  const category = params.category || "news";
  const dataKey = category === "news" ? "data" : category;

  useEffect(() => {
    setDataSize(9);

    dispatch(
      getNews({
        q: category as TCategory,
        from: dayjs().subtract(20, "day").format("YYYY-MM-DD"),
        to: dayjs().format("YYYY-MM-DD"),
        sortBy: "popularity",
        pageSize: 10,
        page: 1,
      })
    );
  }, [dispatch, category]);

  useEffect(() => {
    dispatch(
      getNewsTopHeadlines({
        category: category === "news" ? "general" : (category as TCategory),
        pageSize: 4,
        page: 1,
      })
    );
  }, [dispatch, category]);

  const currentData: IMetaNewsResponse = news?.[dataKey];
  const hasMore = currentData?.articles
    ? (currentData?.articles?.length || 0) < (currentData.totalResults || 0) &&
      dataSize < 100
    : false;

  const loadMoreItems = useCallback(async () => {
    const newSize = dataSize + 30;
    const checkedSize = newSize > 100 ? 100 : newSize;
    setDataSize(checkedSize);

    if (hasMore) {
      dispatch(
        getInfiniteNews({
          q: category as TCategory,
          from: dayjs().subtract(20, "day").format("YYYY-MM-DD"),
          to: dayjs().format("YYYY-MM-DD"),
          sortBy: "popularity",
          pageSize: checkedSize,
          page: 1,
        })
      );
    }
  }, [dispatch, category, dataSize]);

  if (news.loading) {
    return <Loader />;
  }

  return (
    <div className="relative space-y-4 min-h-screen w-screen max-w-6xl overflow-hidden px-4 pt-28 pb-16 md:px-20">
      <Row gutter={[16, 16]}>
        <Col span={24} lg={14}>
          <VerticalCard
            article={news?.headlines?.articles?.[0] || ({} as NewsData)}
          />
        </Col>
        <Col span={24} lg={10} className="space-y-4">
          {news?.headlines?.articles?.map(
            (article: NewsData, index: number) => {
              return (
                <Flex key={index} vertical gap={4}>
                  <HorizontalCard
                    article={article}
                    imagePosition="left"
                    size="small"
                  />
                </Flex>
              );
            }
          )}
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        {currentData?.articles?.map((article: NewsData, index: number) => {
          if (index % 5 === 0 && index <= 10) {
            return (
              <Col key={index} span={24}>
                <HorizontalCard article={article} className="hidden md:flex" />
                <VerticalCard article={article} className="block md:hidden" />
              </Col>
            );
          }
          if (!(index % 5 === 0) && index <= 20) {
            return (
              <Col key={index} span={12} md={6}>
                <VerticalCard article={article} />
              </Col>
            );
          }

          if (!md) {
            return (
              <Flex key={index} vertical gap={4}>
                <HorizontalCard
                  article={article}
                  imagePosition="left"
                  size="small"
                />
              </Flex>
            );
          }

          return (
            <Col key={index} span={24}>
              <HorizontalCard
                article={article}
                imagePosition="left"
                imageContainerClassName="h-40"
              />
            </Col>
          );
        })}
      </Row>
      {(currentData?.articles?.length || 0) > 0 && (
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
