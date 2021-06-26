import { FC } from 'react'
import { NavLink } from 'react-router-dom'
//ui
import { NotFoundContainer } from './style'

const NotFoundPage: FC = () => {
  return (
    <NotFoundContainer>
      <div>
        <h1>404 Not Found</h1>
        <NavLink to="/">На главную</NavLink>
      </div>
    </NotFoundContainer>
  )
}

export default NotFoundPage
