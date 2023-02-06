
import { Brand, CTA, Navbar } from './components';
import { Header, WhatGpt, Features, Possibility, Blog, Footer } from './container';

import './App.css';

function App() {
  

  return (
    <div className="App">

    <div className="gradient__bg">
      <Navbar />
      <Header/>
    </div>

      <Brand />
      <WhatGpt />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
