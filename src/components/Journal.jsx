import { stories } from './content'
import { Arrow, Eyebrow } from './Shared'

export default function Journal() {
  return (
    <section className="home-section home-journal" id="journal">
      <div className="home-section-heading">
        <div><Eyebrow>Идеи и материалы</Eyebrow><h2>Не только о свете</h2></div>
        <p>Истории людей, материалов и пространств, где рождается настроение.</p>
      </div>
      <div className="home-story-grid">
        {stories.map((story) => (
          <article className="home-story" key={story.image}>
            <img src={story.image} alt="" />
            <h3>{story.title} <Arrow /></h3>
            <p>Короткая история о форме, материале и вдохновении.</p>
          </article>
        ))}
      </div>
      <button className="home-button home-button-outline" type="button">Смотреть журнал <Arrow /></button>
    </section>
  )
}
