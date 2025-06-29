import React from 'react';

import { Switch, Route } from "react-router-dom";

import "./styles/tailwind.output.css";
import ScrollToTop from './components/common/scrollToTop';
import LandingPage from './pages/index';
import AboutUs from './pages/about-us';
import Cataract from './pages/cataract';
import Myopia from './pages/myopia';
import GeneticEye from './pages/genetic-eye';
import ContactUs from './pages/contact-us';
import DiabeticRetinopathy from './pages/diabetic-retinopathy';
import Glaucoma from './pages/glaucoma';
import HypertensiveRetinopathy from './pages/hypertensive-retinopathy';
import PinkEye from './pages/pink-eye';
import DryEye from './pages/dry-eye';
import FAQ from './pages/faq';

function App() {
  return (
      <>
      <ScrollToTop />
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`}>
          <LandingPage />
        </Route>
      <Route path="/about-us">
        <AboutUs />
      </Route>
      <Route path="/cataract">
        <Cataract />
      </Route>
      <Route path="/myopia">
        <Myopia />
      </Route>
      <Route path="/dry-eye">
        <DryEye />
      </Route>
      <Route path="/genetic-eye">
        <GeneticEye />
      </Route>
      <Route path="/diabetic-retinopathy">
        <DiabeticRetinopathy />
      </Route>
      <Route path="/glaucoma">
        <Glaucoma />
      </Route>
      <Route path="/hypertensive-retinopathy">
        <HypertensiveRetinopathy />
      </Route>
      <Route path="/pink-eye">
        <PinkEye />
      </Route>
      <Route path="/contact-us">
        <ContactUs />
      </Route>
      <Route path="/faq">
        <FAQ />
      </Route>
    </Switch>
    </>
  );
}

export default App;
