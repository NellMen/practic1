import { Arrow, Eyebrow } from './Shared';

export default function Newsletter() {
	return (
		<section className='home-newsletter'>
			<div>
				<Eyebrow>До встречи на свету</Eyebrow>
				<h2>
					Новые формы.
					<br />
					Раньше других.
				</h2>
				<p>Новости мастерской, новые объекты и редкие материалы. Только по делу.</p>
			</div>
			<div className='home-newsletter-form'>
				<button type='button'>
					Ваш электронный адрес <Arrow />
				</button>
				<button className='home-button home-button-dark' type='button'>
					Подписаться <Arrow />
				</button>
				<small>Нажимая «Подписаться», вы соглашаетесь с политикой конфиденциальности.</small>
			</div>
		</section>
	);
}
