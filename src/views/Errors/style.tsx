import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 70px);
  text-align: center;
  a {
    color: #3f51b5;
    font-size: 20px;
    text-decoration: none;
    &:active {
      color: #111;
    }
  }
`
