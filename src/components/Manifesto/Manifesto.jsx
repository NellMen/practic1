import styles from './Manifesto.module.css';
import { Eyebrow } from '../Shared/Shared';

export default function Manifesto() {
	return (
		<section className={`${styles.root} home-manifesto`} id='about'>
			<Eyebrow>Мы меняем точку зрения</Eyebrow>
			<h2>Хороший свет меняет комнату. Необычный — меняет взгляд на вещи.</h2>
			<div className='home-manifesto-bottom'>
				<p>
					«НЕ ФОРМА» — это свет как высказывание. Мы создаём предметы с идеей, которыми хочется
					пользоваться каждый день.
				</p>
				<div className='home-stats'>
					<div>
						<strong>9</strong>
						<span>лет создаём свет</span>
					</div>
					<div>
						<strong>36</strong>
						<span>авторских объектов</span>
					</div>
					<div>
						<strong>100%</strong>
						<span>ручная работа</span>
					</div>
				</div>
			</div>
		</section>
	);
}
