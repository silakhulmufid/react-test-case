import { Button, Flex, Image, Typography } from "antd";
import { useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { getTimeAgoString } from "../../utils";

export default function Article() {
  const article = useAppSelector((state) => state.news.article);
  const navigate = useNavigate();
  const content = article?.content?.replace(/(\[.*?\])/g, "");

  useEffect(() => {
    if (!article) {
      navigate("/");
    }
  }, [article]);

  return (
    <div className="relative space-y-4 min-h-screen w-screen max-w-5xl overflow-hidden px-4 py-28 md:px-20">
      <Typography.Title
        level={2}
        className=" line-clamp-2 group-hover:underline"
        style={{ marginTop: 0, marginBottom: 0 }}
      >
        {article?.title}
      </Typography.Title>
      <Typography.Text type="secondary" className="text-xs mb-0">
        {getTimeAgoString(article?.publishedAt || "")} | {article?.source?.name}
      </Typography.Text>
      <Flex vertical>
        <Flex className="w-full aspect-video">
          <Image
            src={article?.urlToImage || ""}
            alt={article?.description || ""}
            className="object-cover w-full h-full"
          />
        </Flex>
      </Flex>
      <p>{article?.title}</p>
      <div dangerouslySetInnerHTML={{ __html: content || "" }} />
      <div className="absolute flex justify-center items-center bottom-0 inset-x-0 h-44 bg-gradient-to-t from-white from-60% to-white/50 to-90% z-10">
        <Button href={article?.url || ""}>
          Read more
        </Button>
      </div>
    </div>
  );
}
