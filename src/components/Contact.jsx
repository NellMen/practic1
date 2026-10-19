import { Arrow, Eyebrow } from './Shared';

const questions = [
	['Как учесть светильник заранее?', 'Подскажем размеры, высоту и расположение.'],
	['Как устроена доставка?', 'Бережно упакуем и доставим в удобное время.'],
	['А если объект не подойдёт?', 'Поможем найти форму, которая будет вашей.'],
];

export default function Contact() {
	return (
		<section className='home-contact'>
			<div>
				<Eyebrow>Мы поможем с выбором</Eyebrow>
				<h2>
					Ваша комната.
					<br />
					Наш взгляд.
				</h2>
				<p>Подберём свет под пространство — бережно, без спешки и с вниманием к деталям.</p>
				<button type='button' className='home-button home-button-accent'>
					Обсудить пространство <Arrow />
				</button>
			</div>
			<div className='home-questions'>
				{questions.map(([title, text]) => (
					<article key={title}>
						<h3>{title}</h3>
						<p>{text}</p>
					</article>
				))}
			</div>
		</section>
	);
}
