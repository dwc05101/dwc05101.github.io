import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
@font-face {
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 100;
  src: url("styles/fonts/NotoSansKR-Light.woff2") format('woff2'),
  url("styles/fonts/NotoSansKR-Light.woff") format('woff'),
  url("styles/fonts/NotoSansKR-Light.otf") format('truetype')
}

@font-face {
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: normal;
  src: url("styles/fonts/NotoSansKR-Regular.woff2") format('woff2'),
  url("styles/fonts/NotoSansKR-Regular.woff") format('woff'),
  url("styles/fonts/NotoSansKR-Regular.otf") format('truetype')
}


@font-face {
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  src: url("styles/fonts/NotoSansKR-Medium.woff2") format('woff2'),
  url("styles/fonts/NotoSansKR-Medium.woff") format('woff'),
  url("styles/fonts/NotoSansKR-Medium.otf") format('truetype')
}

@font-face {
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: bold;
  src: url("styles/fonts/NotoSansKR-Bold.woff2") format('woff2'),
  url("styles/fonts/NotoSansKR-Bold.woff") format('woff'),
  url("styles/fonts/NotoSansKR-Bold.otf") format('truetype')
}

body {
  font-family: 'Noto Sans CJK KR'
}
`

export default globalStyle
