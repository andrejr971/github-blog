import { darken } from 'polished'
import styled, { css } from 'styled-components'
import ReactMarkdown from 'react-markdown'

export const Container = styled.main``

export const Info = styled.div`
  ${({ theme }) => css`
    width: 100%;

    padding: 3.2rem 4rem;

    border-radius: 1rem;
    background: ${theme.colors.base_profile};

    display: flex;
    gap: 0.8rem;
    flex-direction: column;

    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

    img {
      width: 14.8rem;
      height: 14.8rem;
      border-radius: 0.8rem;
    }

    @media screen and (max-width: 640px) {
      flex-direction: column;
      align-items: center;
    }

    header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
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
      }
    }

    h1 {
      margin-top: 1.6rem;

      font: ${theme.fonts.titles.large};
      color: ${theme.colors.base_title};
    }

    footer {
      display: flex;
      align-items: center;
      gap: 2.4rem;

      flex-wrap: wrap;

      @media screen and (max-width: 560px) {
        gap: 0.8rem;
        margin-top: 2.4rem;
      }

      div {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        svg {
          color: ${theme.colors.base_label};
        }
      }
    }
  `}
`

export const Article = styled(ReactMarkdown)`
  ${({ theme }) => css`
    width: 100%;
    padding: 4rem 3.2rem;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    h3 {
      font: ${theme.fonts.titles.medium};
      color: ${theme.colors.base_subtitle};
    }

    a {
      gap: 0.8rem;
      text-transform: uppercase;

      font: ${theme.fonts.components.link};
      color: ${theme.colors.blue};

      transition: color 0.2s ease-in;

      &:hover {
        color: ${darken(0.1, theme.colors.blue)};
      }
    }

    pre {
      overflow-x: scroll;
      padding: 2.4rem;

      font: ${theme.fonts.texts.small};
      color: ${theme.colors.blue};

      background: ${theme.colors.base_post};
      border-radius: 0.8rem;

      &::-webkit-scrollbar {
        height: 0.4rem;

        margin-top: -0.4rem;
      }

      &::-webkit-scrollbar-thumb {
        background: ${theme.colors.base_label};
        border-radius: 0.2rem;
      }
    }

    ul {
      margin-left: 3.2rem;
    }
  `}
`
