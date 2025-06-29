import React from 'react';

import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import HypertensiveRetinopathyContainer from '../containers/hypertensive-retinopathy/hypertensiveRetinopathyContainer';

function HypertensiveRetinopathy() {
  return (
    <>
      <Header />
      <HypertensiveRetinopathyContainer />
      <Footer />
    </>
  )
}

export default HypertensiveRetinopathy;
