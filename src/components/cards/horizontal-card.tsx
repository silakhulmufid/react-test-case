import { Flex, Image, Typography } from "antd"
import classnames from "classnames"
import { Link } from "react-router"
import { useAppDispatch } from "../../store/hooks"
import { getArticle } from "../../store/news/action"
import type { NewsData } from "../../store/news/type"
import { createSlug, getTimeAgoString } from "../../utils"

export function HorizontalCard({
  article,
  imagePosition = "right",
  size = "large",
  imageContainerClassName = "",
  className,
}: {
  article: NewsData
  imagePosition?: "left" | "right"
  size?: "small" | "large"
  imageContainerClassName?: string
  className?: string
}) {
  const dispatch = useAppDispatch()
  const titleSlug = createSlug(article.title as string)

  if (size === "small") {
    return (
      <Link
        to={`/article?slug=${titleSlug}`}
        onClick={() => dispatch(getArticle(article))}
        className={classnames(
          "border-b-1 group flex gap-2",
          {
            "flex-row-reverse": imagePosition === "left",
          },
          className
        )}
      >
        <Flex vertical justify="center" gap={0} className="w-full">
          <Typography.Text type="secondary" className="mb-0 text-xs">
            {getTimeAgoString(article.publishedAt || "")} |{" "}
            {article.source?.name}
          </Typography.Text>
          <Typography.Title
            level={5}
            className="line-clamp-2 group-hover:underline"
            style={{ marginTop: 8 }}
          >
            {article.title}
          </Typography.Title>
        </Flex>
        <Flex
          flex="none"
          className={classnames("aspect-video h-20", imageContainerClassName)}
        >
          <Image
            height="100%"
            width="100%"
            src={article.urlToImage || ""}
            className="object-cover"
            preview={false}
          />
        </Flex>
      </Link>
    )
  }

  return (
    <Link
      to={`/article?slug=${titleSlug}`}
      onClick={() => dispatch(getArticle(article))}
      className={classnames(
        "border-b-1 group flex gap-4",
        {
          "flex-row-reverse": imagePosition === "left",
        },
        className
      )}
    >
      <Flex vertical justify="center" gap={0}>
        <Typography.Title level={2} className="group-hover:underline">
          {article.title}
        </Typography.Title>
        <Typography.Paragraph>
          {article.description || "No description available."}
        </Typography.Paragraph>
        <Typography.Text type="secondary" className="text-xs">
          {getTimeAgoString(article.publishedAt || "")} | {article.source?.name}
        </Typography.Text>
      </Flex>
      <Flex
        flex="none"
        className={classnames("aspect-video h-72", imageContainerClassName)}
      >
        <Image
          height="100%"
          width="100%"
          src={article.urlToImage || ""}
          className="object-cover"
          preview={false}
        />
      </Flex>
    </Link>
  )
}

export default HorizontalCard
