import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Title from '../../components/sectionTitle/title';
import eyeImage from '../../images/serviceImages/pink-eye.jpg';

const PinkEyeContainer = () => {
  return (
    <section className="pt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero section */}
        <div className="pt-12 pb-12 md:pt-20 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="mb-8">
                <h1 className="h1 capitalize font-poppins text-3xl lg:text-5xl font-bold text-grayish-900 text-center lg:text-left leading-8" style={{lineHeight: 1.3}}>Understanding <span className="text-primary-900">Pink Eye</span></h1>
              </div>
              <p className="text-gray-600 lg:text-lg mb-6">
                Pink eye, or conjunctivitis, is inflammation of the transparent membrane (conjunctiva) that lines your eyelid and covers the white part of your eyeball. When small blood vessels in the conjunctiva become inflamed, they're more visible, causing the whites of your eyes to appear reddish or pink.
              </p>
              <p className="text-gray-600 lg:text-lg mb-6">
                Pink eye is commonly caused by a bacterial or viral infection, an allergic reaction, or in babies, an incompletely opened tear duct. Though pink eye can be irritating, it rarely affects your vision. Treatments can help ease the discomfort of pink eye, and it often clears up on its own within 1 to 2 weeks.
              </p>
            </div>
            <div className="lg:col-span-1 order-1 lg:order-2">
              <img src={eyeImage} alt="Pink eye (conjunctivitis)" className="w-full rounded-lg shadow-lg" style={{ maxHeight: '400px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        {/* Symptoms section */}
        <div className="pb-12 md:pb-16">
          <Title heading="Symptoms" noted="Signs" title="Signs and Symptoms of Pink Eye">
            <p className="font-medium text-gray-600 text-center mt-5 leading-8">The most common pink eye symptoms include:</p>
          </Title>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Redness in one or both eyes</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Itchiness in one or both eyes</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">A gritty feeling in one or both eyes</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">A discharge in one or both eyes that forms a crust during the night</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Tearing</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Sensitivity to light (photophobia)</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Swollen eyelids</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Blurred vision</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Causes section */}
        <div className="pb-12 md:pb-16">
          <Title heading="Causes" noted="Types" title="What Causes Pink Eye?">
            <p className="font-medium text-gray-600 text-center mt-5 leading-8">Pink eye can be caused by several different factors, each resulting in a distinct type of conjunctivitis.</p>
          </Title>

          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Common Types of Pink Eye</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700"><strong>Viral conjunctivitis:</strong> Caused by viruses like adenovirus, herpes virus</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700"><strong>Bacterial conjunctivitis:</strong> Caused by bacteria like Staphylococcus aureus, Streptococcus pneumoniae</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700"><strong>Allergic conjunctivitis:</strong> Triggered by allergens like pollen, dust mites, animal dander</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700"><strong>Irritant conjunctivitis:</strong> Caused by irritants like chlorine, air pollution, smoke</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700"><strong>Contact lens-related conjunctivitis:</strong> Due to improper lens care or extended wear</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700"><strong>Giant papillary conjunctivitis:</strong> From contact lens overuse or eye prosthesis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Treatment section */}
        <div className="pb-12 md:pb-20">
          <Title heading="Treatment" noted="Solutions" title="Pink Eye Treatment Options">
            <p className="font-medium text-gray-600 text-center mt-5 leading-8">Treatment for pink eye depends on the cause. At Mithran Eye Clinic, we provide accurate diagnosis and personalized treatment plans.</p>
          </Title>

          <div className="mt-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-bold text-primary-900 mb-4">Treatment by Type</h3>
                <p className="text-gray-700 mb-4">Different types of pink eye require different treatments:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700"><strong>Viral:</strong> Usually clears on its own within 1-2 weeks; artificial tears and cold compresses may help</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700"><strong>Bacterial:</strong> Antibiotic eye drops or ointments to clear the infection</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700"><strong>Allergic:</strong> Allergy medications and avoiding allergens; antihistamine eye drops</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700"><strong>Irritant:</strong> Flushing the eye with water and avoiding the irritant</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-bold text-primary-900 mb-4">Home Care Strategies</h3>
                <p className="text-gray-700 mb-4">These measures can help relieve pink eye symptoms:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Apply a cold compress to your eyes several times a day</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Use artificial tears or lubricating eye drops</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Clean any discharge with a clean, wet cloth</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Avoid wearing contact lenses until symptoms resolve</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Prevention section */}
        <div className="pb-12 md:pb-20">
          <Title heading="Prevention" noted="Protection" title="Preventing Pink Eye">
            <p className="font-medium text-gray-600 text-center mt-5 leading-8">Pink eye is highly contagious, but following these practices can help prevent spreading or contracting it.</p>
          </Title>

          <div className="mt-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
                <div className="text-primary-900 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4 text-center">Good Hygiene</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Wash hands frequently and thoroughly</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Avoid touching or rubbing your eyes</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Use clean towels and washcloths daily</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
                <div className="text-primary-900 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4 text-center">Protect Your Environment</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Don't share eye makeup, drops, or contact lenses</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Replace eye makeup regularly</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Change pillowcases frequently</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
                <div className="text-primary-900 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4 text-center">If You Have Pink Eye</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Take a break from wearing contact lenses</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Stay home from work or school during high contagious period</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Seek medical care for proper diagnosis and treatment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="pb-12 md:pb-20">          
          <div className="bg-primary-700 rounded-lg shadow-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Schedule Your Eye Health Consultation Today</h3>
            <p className="text-white mb-6">If you're experiencing symptoms of pink eye or any eye discomfort, our specialists can provide prompt diagnosis and treatment.</p>
            <a href="/appointment" className="inline-block bg-white text-primary-900 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300">Book Appointment</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PinkEyeContainer;
