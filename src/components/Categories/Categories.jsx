import styles from './Categories.module.css';
import { categories, images } from '../content';
import { Arrow, Eyebrow } from '../Shared/Shared';

const categoryImages = [images.room, images.pendant, images.detail, images.studio];

export default function Categories() {
	return (
		<section className={`${styles.root} home-section home-categories`} id='catalog'>
			<div className='home-section-heading'>
				<div>
					<Eyebrow>Свет для дома</Eyebrow>
					<h2>Найдите свой свет</h2>
				</div>
				<p>Отмечаем главные формы для каждого уголка вашего дома.</p>
			</div>
			<div className='home-category-grid'>
				{categories.map((category, index) => (
					<article className='home-category' key={category}>
						<img src={categoryImages[index]} alt='' />
						<div>
							<h3>{category}</h3>
							<span>4 объекта</span>
							<Arrow />
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
