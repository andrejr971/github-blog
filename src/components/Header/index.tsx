import { Background, Container, Logo } from './styles'

import BackgroundImage from '../../assets/Cover.png'
import LogoImage from '../../assets/Logo.svg'

export function Header() {
  return (
    <Container>
      <Background>
        <img src={BackgroundImage} alt="cover" />
      </Background>

      <Logo src={LogoImage} alt="Logo github blog" />
    </Container>
  )
}
