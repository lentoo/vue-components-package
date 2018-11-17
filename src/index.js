import Notification from './components/notification'
import Button from './components/button'
import Row from './components/row'
import Col from './components/col'
const components = [
  Button,
  Notification,
  Row,
  Col
]
const _init = (Vue) => {
  components.map( component => Vue.use(component))
}
const install = (Vue) => {
  _init(Vue)
}
export {
  Button,
  Notification,
  Row,
  Col,
  install
} 
export default {
  install
}
