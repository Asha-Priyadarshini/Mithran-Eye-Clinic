import React from 'react';

import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import GlaucomaContainer from '../containers/glaucoma/glaucomaContainer';

function Glaucoma() {
  return (
    <>
      <Header />
      <GlaucomaContainer />
      <Footer />
    </>
  )
}

export default Glaucoma;
