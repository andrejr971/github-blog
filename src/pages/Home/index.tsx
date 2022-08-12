import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { ArrowSquareOut, GithubLogo, Buildings, Users } from 'phosphor-react'
import { SearchForm } from './components/SearchForm'
import { Article } from './components/Article'

import {
  Container,
  InformationUser,
  InformationUserContent,
  Issues,
} from './styles'

type Profile = {
  name: string
  avatarUrl: string
  description: string
  login: string
  company?: string
  followers: number
}

type Issue = {
  id: number
  title: string
  body: string
  createdAt: Date
}

type Data = {
  number: number
  title: string
  body: string
  created_at: string
}

export function Home() {
  const [profile, setProfile] = useState<Profile>()
  const [issues, setIssues] = useState<Issue[]>([])

  async function loadProfile() {
    const { data } = await api.get('users/andrejr971')

    setProfile({
      name: data.name,
      avatarUrl: data.avatar_url,
      description: data.bio,
      company: data.company,
      followers: data.followers,
      login: data.login,
    })
  }

  async function loadIssues() {
    const { data } = await api.get<Data[]>(
      'repos/andrejr971/github-blog/issues',
    )

    setIssues(
      data.map((d) => ({
        ...d,
        id: d.number,
        createdAt: new Date(d.created_at),
      })),
    )
  }

  useEffect(() => {
    loadProfile()
    loadIssues()
  }, [])

  return (
    <Container>
      {profile && (
        <InformationUser>
          <img src={profile.avatarUrl} alt={`profile ${profile.name}`} />

          <InformationUserContent>
            <header>
              <h1>{profile.name}</h1>
              <a href={`https://github.com/${profile.login}`}>
                Github
                <ArrowSquareOut weight="bold" size={12} />
              </a>
            </header>

            <p>{profile.description}</p>

            <footer>
              <div>
                <GithubLogo weight="fill" />
                <span>{profile.login}</span>
              </div>
              {profile.company && (
                <div>
                  <Buildings weight="fill" />
                  <span>{profile.company}</span>
                </div>
              )}
              <div>
                <Users weight="fill" />
                <span>
                  {profile.followers} {` `} seguidores
                </span>
              </div>
            </footer>
          </InformationUserContent>
        </InformationUser>
      )}

      <SearchForm totalIssues={issues && issues.length} />

      <Issues>
        {issues && issues.map((issue) => <Article key={issue.id} {...issue} />)}
      </Issues>
    </Container>
  )
}
