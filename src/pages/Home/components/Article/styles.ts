import styled, { css } from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;

    color: inherit;

    gap: 2.4rem;

    padding: 3.2rem;

    background: ${theme.colors.base_post};

    text-decoration: none;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 0.8rem;

    header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1.6rem;

      h3 {
        flex: 1;

        font: ${theme.fonts.titles.medium};
        color: ${theme.colors.base_title};
      }

      span {
        max-width: 8.8rem;
      }
    }

    cursor: pointer;
    border: 2px solid ${theme.colors.base_post};

    transition: all 0.2s ease;

    &:hover {
      border-color: ${theme.colors.base_border};
    }
  `}
`

export const Preview = styled(ReactMarkdown)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  line-clamp: 4;
  -webkit-box-orient: vertical;
`
