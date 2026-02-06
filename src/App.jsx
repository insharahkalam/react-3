import Awards from './Components/Awards'
import Built from './Components/Built'
import Customers from './Components/Customers'
import Navbar from './Components/Navbar'
import OurPromise from './Components/OurPromise'
import Started from './Components/Started'
import Testimonial from './Components/Testimonial'

const App = () => {
  return (
    <>
      <Navbar />
      <Started />
      <Customers />
      <OurPromise />
      <Awards />
      <Built />
      <Testimonial />
    </>
  )
}

export default App