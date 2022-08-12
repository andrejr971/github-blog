import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${({ theme }) => css`
    margin-top: 7.2rem;
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 1.6rem;

    header {
      display: flex;
      justify-content: space-between;

      strong {
        font: ${theme.fonts.titles.small};
        color: ${theme.colors.base_subtitle};
      }
    }
  `}
`

export const Form = styled.form`
  ${({ theme }) => css`
    width: 100%;

    input {
      width: 100%;
      height: 4.8rem;
      padding: 1.6rem;

      background: ${theme.colors.base_input};
      border: 1px solid ${theme.colors.base_border};
      border-radius: 0.6rem;

      color: ${theme.colors.base_text};

      &::placeholder {
        color: ${theme.colors.base_label};
      }

      transition: all 0.2s ease;

      &:focus {
        border-color: ${theme.colors.blue};
      }
    }
  `}
`
