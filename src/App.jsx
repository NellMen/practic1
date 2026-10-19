import styles from './App.module.css';
import Categories from './components/Categories/Categories';
import Contact from './components/Contact/Contact';
import FeaturedProduct from './components/FeaturedProduct/FeaturedProduct';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Journal from './components/Journal/Journal';
import Manifesto from './components/Manifesto/Manifesto';
import Newsletter from './components/Newsletter/Newsletter';
import Products from './components/Products/Products';
import Workshop from './components/Workshop/Workshop';

function App() {
	return (
		<main className={styles.page} id='footer'>
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
	);
}

export default App;
