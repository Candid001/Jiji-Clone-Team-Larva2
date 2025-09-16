import React, {useState , useEffect} from 'react'
import Topbar from './component/Topbar';
import Footer from './component/Footer';

const App = () => {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Topbar />
      <Footer />
    </>
  )
}

export default App