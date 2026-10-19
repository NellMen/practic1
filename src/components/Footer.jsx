import { Eyebrow } from './Shared'

export default function Footer() {
  return (
    <footer className="home-footer">
      <div className="home-footer-main">
        <div><Eyebrow>Приезжайте в гости</Eyebrow><h2>Москва, Хлебозавод № 9</h2><p>Новодмитровская, 1, стр. 1<br />Ежедневно, 12:00–20:00</p><p>+7 (495) 120-48-00<br />hello@neforma.ru</p></div>
        <div className="home-footer-links"><div><Eyebrow>Меню</Eyebrow><a href="#catalog">Все коллекции</a><a href="#about">О нас</a><a href="#journal">Журнал</a></div><div><Eyebrow>Помощь</Eyebrow><a href="#footer">Доставка и оплата</a><a href="#footer">Возврат и гарантия</a><a href="#footer">Контакты</a></div></div>
      </div>
      <div className="home-footer-bottom"><span>© НЕ ФОРМА, 2025</span><span>Сделано с вниманием к деталям</span><span>Telegram · ВКонтакте</span></div>
    </footer>
  )
}
