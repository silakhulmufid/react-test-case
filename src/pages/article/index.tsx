import { Image } from "antd";
import { useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Article() {
  const article = useAppSelector((state) => state.news.article);
  const navigate = useNavigate();

  useEffect(() => {
    if (!article) {
      navigate("/");
    }
  }, [article]);

  return (
    <div>
      <h1>Article</h1>
      <div className="relative w-full aspect-video">
        <Image
          src={article?.urlToImage || ""}
          className="object-cover w-full h-full"
        />
      </div>
      <p>{article?.title}</p>
      <div dangerouslySetInnerHTML={{ __html: article?.content || "" }} />
    </div>
  );
}
