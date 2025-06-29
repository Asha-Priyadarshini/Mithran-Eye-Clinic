import React from 'react';

import Footer from '../components/footer/footer';
import Header from '../components/header/header';

import GeneticEyeContainer from '../containers/genetic-eye/geneticEyeContainer';

const GeneticEye = () => {
  return (
    <>
      <Header />
      <GeneticEyeContainer />
      <Footer />
    </>
  );
};

export default GeneticEye;
