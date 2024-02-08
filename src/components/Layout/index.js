import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'
import './index.css'

const Layout = () => {
  const jnfv = 'sfv'
  return (
    <div className="layout_div">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}
export default Layout
