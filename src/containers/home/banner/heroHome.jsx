import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faRoute } from '@fortawesome/free-solid-svg-icons';

import bgImage from '../../../images/hero-bg.png';
import hero from '../../../images/hero-img.png';
import ConsultForm from '../appointment/consult-form';
import { ButtonPrimary, ButtonTrans } from '../../../components/button/button';
import { SingleDoc } from '../../../components/svg/svg';


const HeroHome = () => {
  return (
    <section className="relative w-full" id="top-eye-specialist-nagercoil">
      <div className="bg-cover bg-no-repeat w-full h-full absolute inset-0" style={ { backgroundImage: `url(${bgImage})` } } />
      <div className="relative h-scree max-w-[1300px] mx-auto px-4 sm:px-6" style={{maxWidth: 1300}}>
        <div className="grid lg:grid-cols-2 gap-y-6 pt-8 lg:pt-20 z-20">
          <div className="lg:col-span-1">
            <div className="flex flex-col space-y-6 pt-8">
              <div className="text-primary-900 text-lg lg:text-xl font-semibold mt-20 flex items-center">
                <p>Welcome to Mithran Eye Clinic - Nagercoil's Leading Eye Hospital</p>
                <SingleDoc />
              </div>
              <h1 className="h1 leading-loose font-extrabold font-poppins text-3xl lg:text-4xl xl:text-5xl" style={{lineHeight: 1.5}}>Expert Eye Care <br /> in <span className="text-primary-900 ">Nagercoil</span> City</h1>
                <p className="text-gray-700 leading-9 text-base sm:text-lg font-medium">Comprehensive eye care services with Dr. Asha Priyadarshini, <br className="hidden lg:block" /> the best eye specialist in Karavilai, Nagercoil. Find the finest eye hospital near you.</p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row items-center space-y-5 sm:space-y-0 space-x-8">
              <a href="tel:+918682088136" aria-label="Call Mithran Eye Clinic for an appointment">
                <ButtonPrimary type="button" padding="px-6 py-3">
                  <FontAwesomeIcon icon={faPhone} className="mr-3" />
                  +91 8682088136
                </ButtonPrimary>
              </a>
              <ButtonTrans 
                type="button" 
                padding="px-6 py-3" 
                onClick={() => window.open("https://maps.app.goo.gl/1uL6eV8vRjvAXbX28", "_blank")}
                aria-label="Get directions to Mithran Eye Clinic in Karavilai, Nagercoil"
              >
                Get Direction
                <FontAwesomeIcon icon={faRoute} className="ml-3" />
              </ButtonTrans>
            </div>
          </div>

          <div className="lg:col-span-1 lg:pt-20 z-0">
            <img src={hero} alt="Dr. Asha Priyadarshini - Top Eye Specialist in Nagercoil at Mithran Eye Clinic" className="z-0" />
          </div>
        </div>
        <ConsultForm />
      </div>
    </section>
  );
};

export default HeroHome;