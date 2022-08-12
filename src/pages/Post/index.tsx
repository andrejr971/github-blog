import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Link } from '../../components/Link'
import { api } from '../../lib/axios'

import { Article, Container, Info } from './styles'

type Params = {
  id: string
}

type Label = {
  id: number
  color: string
  name: string
}

type Issue = {
  title: string
  body: string
  labels: Label[]
  createdAt: Date
  author: string
  comments: number
}

export function Post() {
  const { id } = useParams<Params>()
  const [post, setPost] = useState<Issue>()

  useEffect(() => {
    async function loadPost() {
      const { data } = await api.get(
        `repos/andrejr971/github-blog/issues/${id}`,
      )

      setPost({
        ...data,
        author: data.user.login,
        createdAt: new Date(data.created_at),
      })
    }

    loadPost()
  }, [id])

  return (
    <Container>
      {post && (
        <>
          <Info>
            <header>
              <Link to="/">
                <CaretLeft weight="bold" size={12} />
                <span>voltar</span>
              </Link>
              <a
                href={`https://github.com/andrejr971/github-blog/issues/${id}`}
                target="_blank"
                rel="noreferrer"
              >
                <span>ver no github</span>
                <ArrowSquareOut weight="bold" size={12} />
              </a>
            </header>

            <h1>{post.title}</h1>

            <footer>
              <div>
                <GithubLogo weight="fill" />
                <span>{post.author}</span>
              </div>
              <div>
                <CalendarBlank weight="fill" />
                <span>
                  {formatDistanceToNow(post.createdAt, {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </span>
              </div>

              <div>
                <ChatCircle weight="fill" />
                <span>
                  {post.comments}{' '}
                  {post.comments > 1 ? `comentários` : `comentário`}
                </span>
              </div>
            </footer>
          </Info>

          <Article>{post.body}</Article>
        </>
      )}
    </Container>
  )
}
