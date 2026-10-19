import { images } from './content';
import { Eyebrow } from './Shared';

const process = [
	['Сначала — жест', 'Мы работаем с ощущением и движением. Обсуждаем форму, материал и свет.'],
	['Потом — характер', 'Каждую деталь создаём вручную, чтобы предмет был по-настоящему своим.'],
	[
		'И только затем — свет',
		'Проверяем, как форма раскрывается в пространстве и создаёт мягкое сияние.',
	],
];

export default function Workshop() {
	return (
		<section className='home-section home-workshop'>
			<div className='home-section-heading'>
				<div>
					<Eyebrow>Свет до формы</Eyebrow>
					<h2>От руки. До света.</h2>
				</div>
				<p>Между мыслью и вещью — сотни движений, решений и прикосновений.</p>
			</div>
			<div className='home-workshop-content'>
				<img src={images.workshop} alt='Работа мастера в студии' />
				<div className='home-process'>
					{process.map(([title, text], index) => (
						<article key={title}>
							<Eyebrow>0{index + 1} / процесс</Eyebrow>
							<h3>{title}</h3>
							<p>{text}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
