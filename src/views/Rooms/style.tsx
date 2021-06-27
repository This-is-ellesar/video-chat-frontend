import styled from 'styled-components'

export const Room = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 70px);
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
`

export const RoomContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  background: #ccc;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
`

export const RoomListItem = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  width: 25%;
  height: 200px;
  margin: 20px;
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
