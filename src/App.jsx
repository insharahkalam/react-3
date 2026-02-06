import Awards from './Components/Awards'
import Customers from './Components/Customers'
import Navbar from './Components/Navbar'
import OurPromise from './Components/OurPromise'
import Started from './Components/Started'

const App = () => {
  return (
    <>
      <Navbar />
      <Started />
      <Customers />
      <OurPromise />
      <Awards />
    </>
  )
}

export default App