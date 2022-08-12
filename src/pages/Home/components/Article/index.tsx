import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Container, Preview } from './styles'

interface ArticleProps {
  id: number
  title: string
  createdAt: Date
  body: string
}

export function Article({ id, title, createdAt, body }: ArticleProps) {
  return (
    <Container to={`/posts/${id}`}>
      <header>
        <h3>{title}</h3>

        <span>
          {formatDistanceToNow(createdAt, {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </header>

      <Preview>{body}</Preview>
    </Container>
  )
}
