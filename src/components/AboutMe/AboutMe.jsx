import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className='about-me' id="about-me">
      <div className='about-me__container'>
        <SectionTitle title="Студент" />
        <div className='about-me__info-container'>
          <div className='about-me__column'>
            <div className='about-me__info'>
              <h3 className='about-me__title'>
                Иван
              </h3>
              <h4 className='about-me__subtitle'>
                Фронтенд-разработчик, 24 года
              </h4>
              <p className='about-me__text'>
                Я родился в Чувашии, сейчас проижваю в Калуге, закончил КФ МГТУ им.Баумана
                факультет информационных технологий. Женат. Сейчас, заканчивая курс по веб-разработке
                планирую активно искать работу по данному направлению. Люблю активную жизнь.
                Из спорта люблю как  баскетбол , так и футбол.
              </p>
            </div>
            <a className='about-me__github-link' href='https://github.com/San1dy'
            target="_blank" rel="noreferrer">
              Github
              </a>
          </div>
          <img className='about-me__avatar' src="https://avatars.githubusercontent.com/u/114620424?v=4" alt="аватар" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
