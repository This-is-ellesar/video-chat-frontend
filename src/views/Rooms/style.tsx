import styled from 'styled-components'

export const Room = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 70px);
  h1 {
    color: #000;
    font-family: 'Roboto';
    font-weight: 400;
  }
`
export const RoomContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  width: 100%;
  height: max-content;
  min-height: 400px;
  background: #fff;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
`

export const RoomListItem = styled.div`
  width: 25%;
  height: 200px;
  margin: 20px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  cursor: pointer;
  transition: 0.1s ease-in;

  &:hover {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 40%),
      0px 4px 5px 0px rgb(0 0 0 / 20%), 0px 1px 10px 0px rgb(0 0 0 / 15%);
  }
  &:active {
    transform: scale(0.98);
  }
`
