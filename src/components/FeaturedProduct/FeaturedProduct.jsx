import styles from './FeaturedProduct.module.css';
import { images } from '../content';
import { Arrow, Eyebrow } from '../Shared/Shared';

export default function FeaturedProduct() {
	return (
		<section className={`${styles.root} home-featured`}>
			<img src={images.pendant} alt='Подвесной светильник над обеденным столом' />
			<div className='home-featured-copy'>
				<Eyebrow>Хит нашей коллекции</Eyebrow>
				<h2>Красота несовершенной складки.</h2>
				<p>Асимметрия, которая делает свет живым. Лёгкий жест, формирующий тёплую атмосферу.</p>
				<div className='home-featured-price'>
					<span>Складка</span>
					<strong>64 000 ₽</strong>
				</div>
				<button className='home-button home-button-dark' type='button'>
					Посмотреть объект <Arrow />
				</button>
				<small>В наличии · изготовление 2–3 недели</small>
			</div>
		</section>
	);
}
