import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutMe.css';

function AboutMe({ projectsConfig }) {
  return (
    <section className='about-me'>
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
                Из спорта люблю как и баскетбол , так и футбол. 
              </p>
            </div>
            <a className='about-me__github-link' href='https://github.com/San1dy'>
              Github
            </a>
          </div>
          <img className='about-me__avatar' src="" alt="аватар" />
        </div>
        <div className='about-me__portfolio'>
          <h3 className='about-me__portfolio-title'>
            Портфолио
          </h3>
          <ul className='about-me__portfolio-list'>
            {projectsConfig.map((project) => (
              <li key={project.title} className="about-me__portfolio-item">
                <a className='about-me__portfolio-item-link' href={project.link}>
                  <p className='about-me__portfolio-item-text'>{project.title}</p>
                  <div className='about-me__portfolio-item-icon'></div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;