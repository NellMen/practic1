import { images } from './content'
import { Arrow, Eyebrow } from './Shared'

export default function Hero() {
  return (
    <section className="home-hero" id="top">
      <div className="home-hero-heading">
        <Eyebrow>Коллекционный свет / 2025</Eyebrow>
        <h1>Свет.<br />Не по правилам.</h1>
      </div>
      <div className="home-hero-grid">
        <figure className="home-hero-image">
          <img src={images.hero} alt="Светлая гостиная с дизайнерским освещением" />
          <figcaption>Свет как искусство <span>01 / 04</span></figcaption>
        </figure>
        <aside className="home-highlight">
          <Eyebrow>Мы создаём иначе</Eyebrow>
          <h2>Светильники, которые остаются искусством. Даже когда выключены.</h2>
          <p>Мягкий свет, честные формы и ручная работа. Предметы, которые хочется рассматривать.</p>
          <button type="button" className="home-button home-button-dark">Исследовать каталог <Arrow /></button>
          <span className="home-note">Локальное производство · ручная работа</span>
        </aside>
      </div>
      <div className="home-principles">
        {['Не массовое', 'Не случайное', 'Не на сезон'].map((item) => (
          <div className="home-principle" key={item}>
            <span className="home-dash" />
            <h3>{item}</h3>
            <p>Вещи с характером и вниманием к каждой детали.</p>
          </div>
        ))}
      </div>
    </section>
  )
}
