import styles from './Products.module.css';
import { products } from '../content';
import { Arrow, Eyebrow } from '../Shared/Shared';

function ProductCard({ product }) {
	return (
		<article className={`${styles.root} home-product`}>
			<div className='home-product-image'>
				<img src={product.image} alt={`Светильник «${product.label}»`} />
				<span className='home-product-tag'>Новая форма</span>
				<span className='home-product-mark' aria-hidden='true'>
					♡
				</span>
			</div>
			<div className='home-product-title'>
				<h3>{product.label}</h3>
				<span>48 000 ₽</span>
			</div>
			<p>Светильник ручной работы</p>
			<small>Материалы: металл, стекло</small>
		</article>
	);
}

export default function Products() {
	return (
		<section className='home-section home-products'>
			<div className='home-section-heading'>
				<div>
					<Eyebrow>Выбор коллекции</Eyebrow>
					<h2>Формы притяжения</h2>
				</div>
				<p>Четыре объекта, в которых живут целые истории. Выберите свой.</p>
			</div>
			<div className='home-product-grid'>
				{products.map(product => (
					<ProductCard key={product.image} product={product} />
				))}
			</div>
			<button className='home-button home-button-outline' type='button'>
				Все 36 объектов <Arrow />
			</button>
		</section>
	);
}
