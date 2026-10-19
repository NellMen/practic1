export default function Header() {
  return (
    <header className="home-header">
      <a className="home-logo" href="#top" aria-label="Не форма — на главную">
        НЕ ФОРМА<span />
      </a>
      <nav className="home-nav" aria-label="Основная навигация">
        <a href="#top">Главная</a>
        <a href="#catalog">Каталог</a>
        <a href="#about">О нас</a>
        <a href="#journal">Журнал</a>
      </nav>
      <div className="home-header-tools" aria-hidden="true">
        <span>⌕</span><span>♡</span><span>0</span>
      </div>
      <button className="home-menu" type="button" aria-label="Меню">
        <span /><span />
      </button>
    </header>
  )
}
