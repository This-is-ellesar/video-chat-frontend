import { createGlobalStyle } from 'styled-components'

const robotoFont = '../fonts/Roboto-Regular.ttf'

export const AppComponent = createGlobalStyle `
    body {
        margin: 0;
        padding: 0;
    }

    @font-face {
        font-family: 'Roboto';
        src: local('Roboto')
        url(${robotoFont}) format('ttf'); 
    }
`