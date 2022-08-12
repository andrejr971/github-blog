import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

import { Container, Content } from './styles'

export function DefaultLayout() {
  return (
    <Container>
      <Header />

      <Content>
        <Outlet />
      </Content>
    </Container>
  )
}
