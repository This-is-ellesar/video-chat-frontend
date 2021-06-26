import styled from 'styled-components'

export const MainWrapper = styled.div``

export const Button = styled.button`
  margin: 0 10px;
  padding: 5px 15px;
  outline: none;
  border: none;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-block;
  border-radius: 4px;
  letter-spacing: 2px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: 0.1s;
  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }
  &:active {
    background: rgba(0, 0, 0, 0.3);
    color: #efefef;
  }
`

export const HeaderComponents = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  background: #3f51b5;
  box-shadow: 0 5px 5px -5px rgb(0 0 0 / 50%);
`

export const HeaderContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderContainerItem = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Roboto';
  font-size: 16px;
  a {
    text-decoration: none;
    color: #fff;
  }
`

export const DialogContainer = styled.div`
  width: ${({ width }: any) => (width ? width : '400px')};
  background-color: #fff;
  border-radius: 4px;
  z-index: 999;
`

export const Content = styled.div`
  padding: 0px 25px;
`
