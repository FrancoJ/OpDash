import Header from './Header'

const Layout = (props) => (
  <main className="container">
    <Header />
    {props.children}
  </main>
)

export default Layout