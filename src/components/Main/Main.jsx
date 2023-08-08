import Header from '../Header/Header';
import AboutMe from '../AboutMe/AboutMe';
import NavTab from '../NavTab/NavTab';
import Footer from '../Footer/Footer';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import './Main.css';

import { portfolioProjectsConfig } from '../../config/portfolioProjectsConfig';
import Portfolio from '../Portfolio/Portfolio';

function Main() {

  return (
    <>
      <Header isAuth={true} backgroundColor="#073042" />
      <main>
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs tehcsList={['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB']} />
        <AboutMe />
        <Portfolio projectsConfig={portfolioProjectsConfig} />
      </main>
      <Footer />
    </>
  );
}

export default Main;