import { Button, Flex, Image, Typography } from "antd"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useAppSelector } from "../../store/hooks"
import { getTimeAgoString } from "../../utils"

export default function Article() {
  const article = useAppSelector((state) => state.news.article)
  const navigate = useNavigate()
  const content = article?.content?.replace(/(\[.*?\])/g, "")

  useEffect(() => {
    if (!article) {
      navigate("/")
    }
  }, [article])

  return (
    <div className="relative min-h-screen w-screen max-w-5xl space-y-4 overflow-hidden px-4 py-28 md:px-20">
      <Typography.Title
        level={2}
        className="line-clamp-2 group-hover:underline"
        style={{ marginTop: 0, marginBottom: 0 }}
      >
        {article?.title}
      </Typography.Title>
      <Typography.Text type="secondary" className="mb-0 text-xs">
        {getTimeAgoString(article?.publishedAt || "")} | {article?.source?.name}
      </Typography.Text>
      <Flex vertical>
        <Flex className="aspect-video w-full">
          <Image
            src={article?.urlToImage || ""}
            alt={article?.description || ""}
            className="h-full w-full object-cover"
          />
        </Flex>
      </Flex>
      <p>{article?.title}</p>
      <div dangerouslySetInnerHTML={{ __html: content || "" }} />
      <div className="absolute inset-x-0 bottom-0 z-10 flex h-44 items-center justify-center bg-gradient-to-t from-white from-60% to-white/50 to-90%">
        <Button href={article?.url || ""}>Read more</Button>
      </div>
    </div>
  )
}
