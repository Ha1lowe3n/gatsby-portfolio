import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">Привет! Я frontend разработчик.</p>
                <p className="about-wrapper__info-text">
                  На данный момент учусь, набиваю руку, делаю свои проекты. <br></br> В планах клон
                  твиттера на MERN + TypeScript.<br></br> На данный момент делаю на React social
                  network by IT-KAMASUTRA и чат.
                </p>
                <p className="about-wrapper__info-text">
                  Хочу начать работать в команде, делать интересные проекты, учиться чему-то новому.
                </p>
                <br></br>
                <p className="about-wrapper__info-text">
                  Мой опыт: <br></br>--Вёрстка: верстал несколько не особо сложных макетов, работал
                  с bootstrap. Изучаю адаптив.<br></br> <br></br> --JS: реализовывал отправку формы
                  на сайте, логику калькулятора, слайдер, слайдер-карусель, модальные окна, ререндер
                  контента при нажатии на кнопки, работа со скроллом(определял местонахождение
                  пользователя), работа с датами, ООП.<br></br> <br></br>--React: Интернет-магазин
                  на JS с использованием Redux. Работал с react-skeleton, redux-thunk, хуками,
                  react-router-dom, axios, json-server.<br></br> Мини-твиттер (что-то вроде
                  todo-list) в ООП стиле.<br></br> Минималистичный чат с использованием socket.io и
                  Express.<br></br> Клон Google-поиск с использованием firebase.
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
