import styled from 'styled-components'

export const RoomItemHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  h1 {
    margin: 0;
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 500;
  }
  img {
    display: none;
  }
  &:hover {
    img {
      display: block;
      cursor: pointer;
    }
  }
`
export const RoomItemMain = styled.main`
  padding: 10px;
  overflow: auto;
  font-family: 'Roboto';
  font-size: 14px;
`
export const RoomItemFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px 10px;
  font-size: 16px;
  font-family: 'Roboto';
`
