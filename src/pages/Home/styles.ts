import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  width: 100%;
`

export const InformationUser = styled.section`
  ${({ theme }) => css`
    width: 100%;

    padding: 3.2rem 4rem;

    border-radius: 1rem;
    background: ${theme.colors.base_profile};

    display: flex;
    gap: 3.2rem;

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
  `}
`

export const InformationUserContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    display: flex;
    flex: 1;
    flex-direction: column;

    justify-content: space-between;

    gap: 0.8rem;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        font: ${theme.fonts.titles.large};
        color: ${theme.colors.base_title};
      }

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

    p {
      font: ${theme.fonts.texts.medium};
    }

    footer {
      display: flex;
      align-items: center;
      gap: 2.4rem;

      margin-top: 2.4rem;

      flex-wrap: wrap;

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

export const Issues = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  gap: 3.2rem;

  margin-top: 4.8rem;
`
