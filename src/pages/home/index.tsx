import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getNews, getNewsTopHeadlines } from "../../store/news/action";
import { Flex, Row, Col } from "antd";
import { useParams } from "react-router";
import type { NewsData, TCategory } from "../../store/news/type";
import { Loader } from "../../components";
import HorizontalCard from "../../components/cards/horizontal-card";
import VerticalCard from "../../components/cards/vertical-card";
import { useBreakpoint } from "../../hooks";

export default function Home() {
  const news = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();
  const params = useParams();
  const { md } = useBreakpoint();
  const category = params.category || "news";
  const dataKey = category === "news" ? "data" : category;

  useEffect(() => {
    dispatch(
      getNews({
        q: category as TCategory,
        from: "2025-07-20",
        to: "2025-07-22",
        sortBy: "popularity",
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

  if (news.loading) {
    return <Loader />;
  }

  return (
    <div className="relative space-y-4 min-h-screen w-screen max-w-6xl overflow-hidden px-4 py-28 md:px-20">
      <Row gutter={[16, 16]}>
        <Col span={24} lg={14}>
          <VerticalCard article={news.headlines?.[0] || ({} as NewsData)} />
        </Col>
        <Col span={24} lg={10} className="space-y-4">
          {news.headlines?.map((article: NewsData, index: number) => {
            return (
              <Flex key={index} vertical gap={4}>
                <HorizontalCard article={article} imagePosition="left" size="small" />
              </Flex>
            );
          })}
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        {(Array.isArray(news[dataKey]) ? news[dataKey] : []).map((article: NewsData, index: number) => {
          if ((index % 5 === 0 && index <= 10)) {
            return (
              <Col key={index} span={24}>
                <HorizontalCard article={article} className="hidden md:flex" />
                <VerticalCard article={article} className="block md:hidden" />
              </Col>
            );
          }
          if (!(index % 5 === 0) && index <= 20) {
            return (
              <Col key={index} span={12} md={6} >
                <VerticalCard article={article} />
              </Col>
            );
          }

          if (!md) {
            return (
              <Flex key={index} vertical gap={4}>
                <HorizontalCard article={article} imagePosition="left" size="small" />
              </Flex>
            );
          }

          return (
            <Col key={index} span={24}>
              <HorizontalCard article={article} imagePosition="left" imageContainerClassName="h-40" />
            </Col>
          )
        })}
      </Row>
    </div>
  );
}
