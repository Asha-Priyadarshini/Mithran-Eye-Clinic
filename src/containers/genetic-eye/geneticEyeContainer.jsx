import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Title from '../../components/sectionTitle/title';
import eyeImage from '../../images/serviceImages/eye-genetics.jpg';

const GeneticEyeContainer = () => {
  return (
    <section className="pt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero section */}
        <div className="pt-12 pb-12 md:pt-20 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="mb-8">
                <h1 className="h1 capitalize font-poppins text-3xl lg:text-5xl font-bold text-grayish-900 text-center lg:text-left leading-8" style={{lineHeight: 1.3}}>Understanding <span className="text-primary-900">Genetic Eye Diseases</span></h1>
              </div>
              <p className="text-gray-600 lg:text-lg mb-6">
                Genetic eye diseases are a diverse group of conditions caused by mutations in one or more genes. These disorders can affect different parts of the eye, including the retina, cornea, lens, and optic nerve, resulting in varying degrees of vision impairment.
              </p>
              <p className="text-gray-600 lg:text-lg mb-6">
                Many genetic eye conditions are inherited from one or both parents, while others may occur due to spontaneous genetic mutations. Early diagnosis and intervention are crucial for managing these conditions and preserving vision whenever possible.
              </p>
            </div>
            <div className="lg:col-span-1 order-1 lg:order-2">
              <img src={eyeImage} alt="genetic eye disease" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

        {/* Common Types section */}
        <div className="pb-12 md:pb-16">
          <Title heading="Types" noted="Common" title="Common Genetic Eye Diseases">
            <p className="font-medium text-gray-600 text-center mt-5 leading-8">Genetic eye diseases encompass a wide range of conditions with varying symptoms and progression:</p>
          </Title>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Retinal Disorders</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700"><strong>Retinitis Pigmentosa:</strong> Progressive degeneration of the retina leading to night blindness and peripheral vision loss</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700"><strong>Stargardt Disease:</strong> Form of juvenile macular degeneration affecting central vision</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700"><strong>Usher Syndrome:</strong> Causes both vision and hearing loss</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700"><strong>Leber Congenital Amaurosis:</strong> Severe vision loss from birth</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Other Genetic Eye Conditions</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700"><strong>Albinism:</strong> Reduced or absent pigment affecting eyes, skin, and hair</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700"><strong>Color Blindness:</strong> Difficulty distinguishing between certain colors</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700"><strong>Aniridia:</strong> Complete or partial absence of the iris</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700"><strong>Marfan Syndrome:</strong> Connective tissue disorder affecting lens position</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Inheritance Patterns section */}
        <div className="pb-12 md:pb-16">
          <Title heading="Inheritance" noted="Patterns" title="How Genetic Eye Diseases Are Inherited">
            <p className="font-medium text-gray-600 text-center mt-5 leading-8">Understanding inheritance patterns can help assess risks and make informed decisions.</p>
          </Title>

          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Common Inheritance Patterns</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <div>
                        <span className="font-medium text-gray-700">Autosomal Dominant:</span>
                        <span className="text-gray-700"> One affected parent can pass the condition to children (50% chance)</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <div>
                        <span className="font-medium text-gray-700">Autosomal Recessive:</span>
                        <span className="text-gray-700"> Both parents must carry the gene mutation (25% chance if both are carriers)</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <div>
                        <span className="font-medium text-gray-700">X-Linked:</span>
                        <span className="text-gray-700"> Linked to X chromosome, affects males more commonly than females</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <div>
                        <span className="font-medium text-gray-700">Mitochondrial:</span>
                        <span className="text-gray-700"> Passed only from mother to all children</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Diagnosis section */}
        <div className="pb-12 md:pb-20">
          <Title heading="Diagnosis" noted="Testing" title="Diagnosing Genetic Eye Diseases">
            <p className="font-medium text-gray-600 text-center mt-5 leading-8">At Mithran Eye Clinic, we use advanced diagnostic techniques to identify genetic eye conditions.</p>
          </Title>

          <div className="mt-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-bold text-primary-900 mb-4">Clinical Assessment</h3>
                <p className="text-gray-700 mb-4">Our comprehensive evaluation includes:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Detailed family history</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Complete eye examination</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Visual field testing</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Electroretinography (ERG)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-bold text-primary-900 mb-4">Genetic Testing</h3>
                <p className="text-gray-700 mb-4">Advanced testing options include:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Single gene testing</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Panel testing for related conditions</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Whole exome sequencing</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Genetic counseling services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Management section */}
        <div className="pb-12 md:pb-20">
          <Title heading="Management" noted="Treatment" title="Managing Genetic Eye Diseases">
            <p className="font-medium text-gray-600 text-center mt-5 leading-8">While many genetic eye disorders currently have no cure, there are various approaches to manage symptoms and slow progression.</p>
          </Title>

          <div className="mt-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
                <div className="text-primary-900 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4 text-center">Visual Aids</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Specialized glasses</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Magnifying devices</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Screen readers</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
                <div className="text-primary-900 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4 text-center">Medical Therapies</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Vitamin A supplements (for certain conditions)</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Gene therapy (for specific mutations)</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Clinical trial participation</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
                <div className="text-primary-900 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4 text-center">Support Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Genetic counseling</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Visual rehabilitation programs</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Support groups</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Adaptive technology training</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Research section */}
        <div className="pb-12 md:pb-20">
          <Title heading="Research" noted="Future" title="Advances in Genetic Eye Disease Research">
            <p className="font-medium text-gray-600 text-center mt-5 leading-8">Exciting developments are underway that may transform treatment options in the future.</p>
          </Title>

          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Promising Research Areas</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-primary-900 mb-3">Gene Therapy</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <div>
                      <span className="text-gray-700">FDA-approved treatments now available for specific genetic mutations</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <div>
                      <span className="text-gray-700">Clinical trials ongoing for multiple conditions including retinitis pigmentosa and Stargardt disease</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <div>
                      <span className="text-gray-700">Viral vector delivery methods improving</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-primary-900 mb-3">Other Innovative Approaches</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">CRISPR gene editing technology</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Stem cell therapies for retinal regeneration</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Retinal implants and artificial vision devices</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Neuroprotective agents to preserve remaining vision</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 border-l-4 border-primary-700 bg-gray-50">
              <p className="italic text-gray-700">
                "The field of genetic eye disease research is advancing rapidly. While many treatments are still in development, early diagnosis and management are crucial for preserving vision and preparing for future therapeutic options. At Mithran Eye Clinic, we stay at the forefront of these developments to provide our patients with the most current care options."
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="pb-12 md:pb-20">          
          <div className="bg-primary-700 rounded-lg shadow-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Schedule Your Genetic Eye Disease Consultation Today</h3>
            <p className="text-white mb-6">Our specialized team offers comprehensive genetic eye disease assessment, counseling, and management plans.</p>
            <a href="/appointment" className="inline-block bg-white text-primary-900 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300">Book Appointment</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneticEyeContainer;
