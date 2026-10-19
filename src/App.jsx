import './App.css'
import Categories from './components/Categories'
import Contact from './components/Contact'
import FeaturedProduct from './components/FeaturedProduct'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Journal from './components/Journal'
import Manifesto from './components/Manifesto'
import Newsletter from './components/Newsletter'
import Products from './components/Products'
import Workshop from './components/Workshop'

function App() {
  return (
    <main className="home-page" id="footer">
      <Header />
      <Hero />
      <Categories />
      <Products />
      <Manifesto />
      <FeaturedProduct />
      <Workshop />
      <Journal />
      <Contact />
      <Newsletter />
      <Footer />
    </main>
  )
}

export default App
