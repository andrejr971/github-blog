import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 29.6rem;
  position: relative;

  display: flex;
  justify-content: center;
`

export const Background = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;

  img {
    width: 100%;
    height: 29.6rem;

    object-fit: cover;
  }
`

export const Logo = styled.img`
  width: 14.8rem;
  height: 9.8rem;
  margin-top: 6.4rem;
`
