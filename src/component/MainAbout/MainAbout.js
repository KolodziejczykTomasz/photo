import React, { Fragment } from 'react';
import AboutMe from '../../assets/images/aboutme.jpg';

import './MainAbout.css';

const MainAbout
 = () => (
  <Fragment>
    <div>
      <span className="Main_Header">O mnie</span>
    </div>
    <div className="Main_Wrapper">
      <div className="Main_body">
        <div className="Main_Box_Text">
          <p>
            <span className="Main_Box_Text_Header">HELLO!</span>
            <span className="Main_Box_Text_Strong_FirstLine">
              <strong>
                „Fotografując staram się pokazać to, czego nikt inny by nie zauważył”{' '}
              </strong>
            </span>
            Fotografia pełna magii, uczuć i emocji. Nazywam się Łukasz Sienkiewicz i jestem
            fotografem z pasji i obecnie wykonywanej pracy. Przez długi czas, aparat służył mi w
            moich reporterskich podróżach dookoła świata. Moje doświadczenia postanowiłem przełożyć
            na fotografię ślubną, w której się zakochałem.
            <span className="Main_Box_Text_Strong_SecondLine">
              <strong>
                Cenię sobie przede wszystkim filmowy styl reportażu, niesamowite emocje oraz magię
                uroczystości ślubnej.
              </strong>
            </span>
            Wszystkie potrzebne wam informacje znajdziecie w moich zakładkach. Wszelkie nowości
            zawsze znajdziesz na moim FANPAGE’u Facebookowym.
          </p>
        </div>
        <div className="Main_Box_Image">
          <img src={AboutMe} alt="title about me" className="Main_Box_Image_photo" />
        </div>
      </div>
    </div>
  </Fragment>
);

export default MainAbout
;
