import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getNews } from "../../store/news/action";
import { Row, Col } from "antd";
import { useSearchParams } from "react-router";
import type { NewsData } from "../../store/news/type";
import { Loader } from "../../components";
import { HorizontalCard } from "../../components";

export default function Search() {
  const news = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");

  useEffect(() => {
    dispatch(
      getNews({
        q: q as string,
        from: "2025-06-22",
        to: "2025-07-22",
        sortBy: "publishedAt",
      }),
    );
  }, [dispatch]);

  if (news.loading) {
    return <Loader />;
  }

  return (
    <div className="relative space-y-4 min-h-screen w-screen max-w-6xl overflow-hidden px-4 py-28 md:px-20">
      <Row gutter={[16, 16]}>
        {news.data?.map((article: NewsData, index: number) => {
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
    </div>
  );
}
