import React from 'react'

import { Container } from './styles'

interface LinkProps {
  children: React.ReactNode
  to: string
}

export function Link({ children, to }: LinkProps) {
  return <Container to={to}>{children}</Container>
}
