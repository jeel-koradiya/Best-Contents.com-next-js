
import 'styles/index.scss';

import React from 'react';
import { Container } from 'react-bootstrap';
import { Footer, Navbar, Hero, Mainpage } from 'components/shared';
import { RestfulProvider } from "restful-react";
import { AuthContextProvider } from '../stores/authContext';



const App = ({Component, pageProps}) => {
  const isHome = Component.name === 'Home';
  const Wrapper = Component.name === 'PortfolioDetail' ? React.Fragment : Component;
  return (
    <div className="portfolio-app">
      <AuthContextProvider>
      <Navbar />
      {/* <Mainpage/> */}
      { isHome && <Mainpage /> }
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
      
      { isHome && <Footer /> }
      </AuthContextProvider>
    </div>
  )
}

export default ({...props}) =>
  <RestfulProvider base="http://localhost:3001/api">
    <App {...props}/>
  </RestfulProvider>;
