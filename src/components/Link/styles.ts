import { darken } from 'polished'
import { Link } from 'react-router-dom'

import styled, { css } from 'styled-components'

export const Container = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    text-decoration: none;

    gap: 0.8rem;
    text-transform: uppercase;

    font: ${theme.fonts.components.link};
    color: ${theme.colors.blue};

    transition: color 0.2s ease-in;

    &:hover {
      color: ${darken(0.1, theme.colors.blue)};
    }
  `}
`
