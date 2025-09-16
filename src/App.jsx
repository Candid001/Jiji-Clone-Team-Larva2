import React, {useState , useEffect} from 'react'
import Hero from './component/Hero'
import Products from './component/Products'
import Topbar from './component/Topbar';
import Footer from './component/Footer';

const App = () => {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Topbar />
      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Products searchTerm={searchTerm}/>
      <Footer />
    </>
  )
}

export default App