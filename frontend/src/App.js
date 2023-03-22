import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import SharedLayout from './components/SharedLayout'
import Highlights from './components/Highlights'
import SingleHighlight from './components/SingleHighlight'
import Contact from './components/Contact'

import ScrollToTop from './helpers/ScrollToTop'

import './App.scss'

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="highlights" element={<Highlights />} />
          <Route path="highlights/:slug" element={<SingleHighlight />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
