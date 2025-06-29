import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Title from '../../components/sectionTitle/title';
import eyeImage from '../../images/serviceImages/OIP.jpg';

const DiabeticRetinopathyContainer = () => {
  return (
    <section className="pt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero section */}
        <div className="pt-12 pb-12 md:pt-20 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="mb-8">
                <h1 className="h1 capitalize font-poppins text-3xl lg:text-5xl font-bold text-grayish-900 text-center lg:text-left leading-8" style={{lineHeight: 1.3}}>Understanding <span className="text-primary-900">Diabetic Retinopathy</span></h1>
              </div>
              <p className="text-gray-600 lg:text-lg mb-6">
                Diabetic retinopathy is a diabetes complication that affects the eyes. It's caused by damage to the blood vessels 
                in the tissue at the back of the eye (retina). Diabetic retinopathy can develop in anyone who has type 1 or type 2 diabetes.
              </p>
              <p className="text-gray-600 lg:text-lg mb-6">
                Over time, too much sugar in your blood can lead to the blockage of the tiny blood vessels that nourish the retina, 
                cutting off its blood supply. As a result, the eye attempts to grow new blood vessels, but these new blood vessels don't develop 
                properly and can leak easily, potentially causing vision loss.
              </p>
            </div>
            <div className="lg:col-span-1 order-1 lg:order-2">
              <img src={eyeImage} alt="Diabetic Retinopathy" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
          {/* Symptoms section */}
        <div className="pb-12 md:pb-16">
          <Title heading="Symptoms" noted="Signs" title="Signs and Symptoms of Diabetic Retinopathy">
            <p className="font-medium text-gray-600 text-center mt-5 leading-8">Diabetic retinopathy signs and symptoms may include:</p>
          </Title>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Spots or dark strings floating in your vision (floaters)</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Blurred vision</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Fluctuating vision</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Dark or empty areas in your vision</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Difficulty with night vision</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Vision loss</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Causes section */}
        <div className="pb-12 md:pb-16">
          <Title heading="Causes" noted="Risk Factors" title="What Causes Diabetic Retinopathy?">
            <p className="font-medium text-gray-600 text-center mt-5 leading-8">Diabetic retinopathy occurs when high blood sugar levels damage blood vessels in the retina.</p>
          </Title>

          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Risk Factors</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Duration of diabetes</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Poor blood sugar control</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">High blood pressure</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">High cholesterol</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Pregnancy</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Tobacco use</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Treatment section */}
        <div className="pb-12 md:pb-20">
          <Title heading="Treatment" noted="Solutions" title="Diabetic Retinopathy Treatment Options">
            <p className="font-medium text-gray-600 text-center mt-5 leading-8">At Mithran Eye Clinic, we offer comprehensive treatment approaches for diabetic retinopathy based on your specific condition.</p>
          </Title>

          <div className="mt-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-bold text-primary-900 mb-4">Early Stage Management</h3>
                <p className="text-gray-700 mb-4">Early diabetic retinopathy may require:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Careful monitoring and regular eye exams</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Blood sugar level management</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Blood pressure and cholesterol control</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Lifestyle modifications</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-bold text-primary-900 mb-4">Advanced Treatment Options</h3>
                <p className="text-gray-700 mb-4">For more advanced cases, we offer:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Focal laser treatment</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Scatter laser treatment (panretinal photocoagulation)</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Vitrectomy surgery</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Anti-VEGF injections</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Prevention section */}
        <div className="pb-12 md:pb-20">
          <Title heading="Prevention" noted="Wellness" title="Diabetic Retinopathy Prevention Strategies">
            <p className="font-medium text-gray-600 text-center mt-5 leading-8">While not all cases can be prevented, you can take steps to reduce your risk or slow progression.</p>
          </Title>

          <div className="mt-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
                <div className="text-primary-900 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4 text-center">Regular Monitoring</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Annual comprehensive eye exams</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">More frequent exams if high risk</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Monitor vision changes</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
                <div className="text-primary-900 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4 text-center">Diabetes Management</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Control blood sugar levels</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Monitor A1C levels</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Take medications as prescribed</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Follow your diabetes care plan</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
                <div className="text-primary-900 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4 text-center">Healthy Lifestyle</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Maintain a healthy diet</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Exercise regularly</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Quit smoking</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Manage blood pressure</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="pb-12 md:pb-20">
          <div className="bg-primary-700 rounded-lg shadow-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Schedule Your Diabetic Eye Screening Today</h3>
            <p className="text-white mb-6">Early detection is crucial for managing diabetic retinopathy. Our specialists will provide comprehensive care for your eye health.</p>
            <a href="/appointment" className="inline-block bg-white text-primary-900 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300">Book Appointment</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiabeticRetinopathyContainer;
