import styled from 'styled-components'

export const RoomItemHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px;
  h1 {
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 500;
  }
`
export const RoomItemMain = styled.main`
  padding: 10px 15px;
  overflow: auto;
  font-family: 'Roboto';
  font-size: 14px;
`
export const RoomItemFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  font-size: 16px;
  font-family: 'Roboto';
  a {
    color: #3f51b5;
    font-size: 20px;
    text-decoration: none;
    &:active {
      color: #111;
    }
  }
`
