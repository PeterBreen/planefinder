import Global from '../components/global'
import Footer from '../components/footer'
export default ({ children }) => (
  <div>
    <Global />
    { children }
    <Footer />
  </div>
)
