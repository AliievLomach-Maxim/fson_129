import type { Article } from '../../services/types'

interface ArticleListProps {
  articles: Article[]
}

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.objectID}>
          <a href={article.url}>{article.title} </a>
          <span>({article.author})</span>
          <br />
        </li>
      ))}
    </ul>
  )
}

export default ArticleList
