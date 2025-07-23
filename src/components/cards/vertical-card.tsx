import { Flex, Image, Typography } from "antd"
import classnames from "classnames"
import { useDispatch } from "react-redux"
import { Link } from "react-router"
import { getArticle } from "../../store/news/action"
import type { NewsData } from "../../store/news/type"
import { createSlug, getTimeAgoString } from "../../utils"

export function VerticalCard({
  article,
  className,
}: {
  article: NewsData
  className?: string
}) {
  const dispatch = useDispatch()
  const titleSlug = createSlug(article.title as string)
  return (
    <Link
      to={`/article?slug=${titleSlug}`}
      onClick={() => dispatch(getArticle(article))}
      className={classnames("border-b-1 group space-y-2", className)}
    >
      <Flex flex="none" className="aspect-video w-full">
        <Image
          height="100%"
          width="100%"
          src={article.urlToImage || ""}
          className="object-cover"
          preview={false}
        />
      </Flex>
      <Flex vertical justify="center">
        <Typography.Title level={5} className="group-hover:underline">
          {article.title}
        </Typography.Title>
        <Typography.Paragraph>{article.description}</Typography.Paragraph>
        <Typography.Text type="secondary" className="text-xs">
          {getTimeAgoString(article.publishedAt || Date.now())} |{" "}
          {article.source?.name}
        </Typography.Text>
      </Flex>
    </Link>
  )
}

export default VerticalCard
