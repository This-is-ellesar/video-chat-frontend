import styled from 'styled-components'

export const Room = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 55px);
  h1 {
    font-family: 'Roboto';
    font-weight: 400;
  }
`
export const RoomHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  button {
    margin: 0 10px;
  }
`

export const RoomContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px 20px;
  padding: 20px;
  width: 80%;
  min-height: 420px;
  background: #ccc;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
`

export const RoomListItem = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  height: 200px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 10%),
    0px 4px 5px 0px rgb(0 0 0 / 10%), 0px 1px 10px 0px rgb(0 0 0 / 10%);
  transition: 0.1s ease-in;

  &:hover {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 20%), 0px 1px 10px 0px rgb(0 0 0 / 15%);
  }
`
