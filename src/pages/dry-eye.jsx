import React from 'react';

import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import DryEyeContainer from '../containers/dry-eye/dryEyeContainer';

function DryEye() {
  return (
    <>
      <Header />
      <DryEyeContainer />
      <Footer />
    </>
  )
}

export default DryEye;
