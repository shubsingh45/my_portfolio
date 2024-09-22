import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ScrollToTopButton from './component/ScrollToTop'
import FooterCom from './component/FooterCom'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'

const App = () => {
  return (
    <div className= " font-serif text-violet-400 bg-00 overflow-hidden" >
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <FooterCom/>
      <ScrollToTopButton/>
    </BrowserRouter>
      
    </div>
  )
}

export default App