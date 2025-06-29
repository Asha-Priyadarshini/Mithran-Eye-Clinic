import React from 'react';

import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import DiabeticRetinopathyContainer from '../containers/diabetic-retinopathy/diabeticRetinopathyContainer';

function DiabeticRetinopathy() {
  return (
    <>
      <Header />
      <DiabeticRetinopathyContainer />
      <Footer />
    </>
  )
}

export default DiabeticRetinopathy;
