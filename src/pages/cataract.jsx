import React from 'react';

import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import CataractContainer from '../containers/cataract/cataractContainer';

function Cataract() {
  return (
    <>
      <Header />
      <CataractContainer />
      <Footer />
    </>
  )
}

export default Cataract;
