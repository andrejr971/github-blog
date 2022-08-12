import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { ArrowSquareOut, GithubLogo, Buildings, Users } from 'phosphor-react'

import { Container, InformationUser, InformationUserContent } from './styles'

type Profile = {
  name: string
  avatarUrl: string
  description: string
  login: string
  company?: string
  followers: number
}

export function Home() {
  const [profile, setProfile] = useState<Profile>()

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

  useEffect(() => {
    loadProfile()
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
    </Container>
  )
}
