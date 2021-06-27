import { FC } from 'react'
//ui
import { Footer, FooterContainer, FooterCopyRight } from './style'
import CopyRightIcon from '../../assets/icons/copy-right.svg'

const AppFooter: FC = () => {
  return (
    <Footer>
      <FooterContainer>
        <div>
          <h1>Какая- то важная информация</h1>
          <p>Еще более важная и нужная информация</p>
        </div>
        <FooterCopyRight>
          <img src={CopyRightIcon} alt="" />
          <span>ООО "Факинг фак"</span>
        </FooterCopyRight>
      </FooterContainer>
    </Footer>
  )
}

export default AppFooter
