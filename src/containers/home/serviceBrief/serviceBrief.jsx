import React from 'react';

import { Link } from 'react-router-dom';

import Title from '../../../components/sectionTitle/title';
import circles from '../../../images/circles.png';
import opticals from '../../../images/serviceImages/opticals.jpg';
import inspect from '../../../images/serviceImages/inspect.jpg';
import optometria from '../../../images/serviceImages/optometria-clinica.jpg';
import cornea from '../../../images/serviceImages/Cornea.jpg';
import fundoscope from '../../../images/serviceImages/eye-exam-fundoscope.jpg';
import tonometer from '../../../images/serviceImages/PASCAL_tonometer.jpg';

const ServiceBrief = () => {
  return (
    <section className="relative" id="eye-care-services">
      <img src={circles} alt="" className="bg-opacity-50 opacity-50 absolute object-fit lg:block hidden" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 xl:mt-12">
        <Title heading="-Expert Eye Care Services in Nagercoil" noted="Our" title="Eye Care Services" />

        <div className="pt-16"> 
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5 lg:gap-y-0">
            {/* 1st item */}
            <div className="sm:col-span-1 h-full">
              <div className="rounded-lg shadow group bg-white py-5 px-4 hover:shadow-new">
                <div className="flex flex-col items-start space-y-3">
                  <img src={tonometer} alt="Glaucoma Treatment at Mithran Eye Clinic Nagercoil" className="rounded-md" />
                  <h4 className="text-primary-900 text-lg font-bold pt-4">Glaucoma Treatment</h4>
                  <p className="text-gray-500">Advanced glaucoma care with Dr. Asha Priyadarshini, the top eye specialist in Kanyakumari District for glaucoma management.</p>
                </div>
              </div>
            </div>
            {/* 2nd item */}
            <div className="sm:col-span-1 h-full">
              <div className="rounded-lg hover:shadow group bg-white py-5 px-4 shadow-new">
                <div className="flex flex-col items-start space-y-3">
                  <img src={inspect} alt="Eye Consultation at Best Eye Hospital in Karavilai" className="rounded-md" />
                  <h4 className="text-primary-900 text-lg font-bold pt-4">Eye Consultation</h4>
                  <p className="text-gray-500">Get expert advice from Nagercoil's leading ophthalmologist for all your eye care needs near Marthandam and surrounding areas.</p>
                </div>
              </div>
            </div>
            {/* 3rd item */}
            <div className="sm:col-span-1 h-full">
              <div className="rounded-lg shadow group bg-white py-5 px-4 hover:shadow-new">
                <div className="flex flex-col items-start space-y-3">
                  <img src={opticals} alt="Mithran Opticals - Quality Eyewear in Nagercoil" className="rounded-md" />
                  <h4 className="text-primary-900 text-lg font-bold pt-4">Mithran Opticals</h4>
                  <p className="text-gray-500">Premium eyewear solutions at our Nagercoil eye clinic, offering prescription glasses and contact lenses with expert fitting.</p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-1 h-full">
              <div className="rounded-lg shadow group bg-white py-5 px-4 hover:shadow-new">
                <div className="flex flex-col items-start space-y-3">
                  <img src={fundoscope} alt="Diabetic Eye Care Treatment in Kanyakumari District" className="rounded-md" />
                  <h4 className="text-primary-900 text-lg font-bold pt-4">Diabetic Eye Care</h4>
                  <p className="text-gray-500">Specialized diabetic retinopathy screening and treatment by the best eye doctor in Karavilai, Nagercoil.</p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-1 h-full">
              <div className="rounded-lg shadow group bg-white py-5 px-4 hover:shadow-new">
                <div className="flex flex-col items-start space-y-3">
                  <img src={cornea} alt="Cornea Services at Mithran Eye Clinic Nagercoil" className="rounded-md" />
                  <h4 className="text-primary-900 text-lg font-bold pt-4">Cornea Services</h4>
                  <p className="text-gray-500">Comprehensive cornea care including diagnosis and treatment at our advanced eye hospital in Nagercoil.</p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-1 h-full">
              <div className="rounded-lg shadow group bg-white py-5 px-4 hover:shadow-new">
                <div className="flex flex-col items-start space-y-3">
                  <img src={optometria} alt="Refraction Services - Vision Correction in Nagercoil" className="rounded-md" />
                  <h4 className="text-primary-900 text-lg font-bold pt-4">Refraction</h4>
                  <p className="text-gray-500">Precise vision assessment and correction at Mithran Eye Clinic - the trusted eye care center near you in Karavilai, Nagercoil.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex items-center justify-center mt-8">
          <Link to="/services" className="px-5 py-2 bg-primary-900 text-white shadow-new focus:ring-2 focus:ring-offset-2 hover:bg-primary-800 transition-all duration-300 ease-linear mx-auto text-center rounded-full font-semibold">
            Services offered
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default ServiceBrief;