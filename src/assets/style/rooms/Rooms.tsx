import styled from 'styled-components'

export const Room = styled.div `
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 80px 1fr;
    justify-items: center;
    width: 100%;
    margin-top: 70px;
    h1{
        color: #fff;
        font-family: 'Roboto';
        font-weight: 400;
    }
`
export const RoomList = styled.div `
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 80%;
    background: #616a94;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    border-radius: 4px;
`

export const RoomListItem = styled.div `
    width: 20%;
    height: 200px;
    margin: 20px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    cursor: pointer;
    transition: .1s ease-in;

    &:hover {
        transform: rotateX(-5deg) translateY(2%);
        box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 40%), 0px 4px 5px 0px rgb(0 0 0 / 20%), 0px 1px 10px 0px rgb(0 0 0 / 15%);
    }
`