import { Button, Row, Col, Icon, Image, Cell, CellGroup } from 'vant'

export default defineNuxtPlugin((nuxtApp) => {
  // when page redirect on mobile device, close drawer navbar
  nuxtApp.vueApp
    .use(Button)
    .use(Row)
    .use(Col)
    .use(Icon)
    .use(Image)
    .use(Cell)
    .use(CellGroup)
})
