import React, {useState , useEffect} from 'react'
import Topbar from './component/Topbar';
import Footer from './component/Footer';
import Products from './component/Products';
import Hero from './component/Hero';

const App = () => {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Hero/>
      <Topbar />
      <Products/>
      <Footer />
    </>
  )
}

export default App