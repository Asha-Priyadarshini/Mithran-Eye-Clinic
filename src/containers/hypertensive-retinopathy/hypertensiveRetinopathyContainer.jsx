import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Title from '../../components/sectionTitle/title';
import eyeImage from '../../images/serviceImages/Retinopathy.jpg';

const HypertensiveRetinopathyContainer = () => {
  return (
    <section className="pt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero section */}
        <div className="pt-12 pb-12 md:pt-20 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="mb-8">
                <h1 className="h1 capitalize font-poppins text-3xl lg:text-5xl font-bold text-grayish-900 text-center lg:text-left leading-8" style={{lineHeight: 1.3}}>Understanding <span className="text-primary-900">Hypertensive Retinopathy</span></h1>
              </div>
              <p className="text-gray-600 lg:text-lg mb-6">
                Hypertensive retinopathy is damage to the retina due to high blood pressure (hypertension). The retina is the layer of tissue at the back of the eye that transforms light into nerve signals sent to the brain. Persistent high blood pressure can cause damage to the small blood vessels in the retina, leading to various vision problems.
              </p>
              <p className="text-gray-600 lg:text-lg mb-6">
                Hypertensive retinopathy usually develops over time as high blood pressure remains uncontrolled or poorly controlled. Early detection and management of hypertension are key to preventing this condition or limiting its progression and preserving vision.
              </p>
            </div>
            <div className="lg:col-span-1 order-1 lg:order-2">
              <img src={eyeImage} alt="hypertensive retinopathy examination" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

        {/* Symptoms section */}
        <div className="pb-12 md:pb-16">
          <Title heading="Symptoms" noted="Signs" title="Signs and Symptoms of Hypertensive Retinopathy">
            <p className="font-medium text-gray-600 text-center mt-5 leading-8">Hypertensive retinopathy may not cause symptoms in its early stages, but as it progresses you might experience:</p>
          </Title>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Reduced vision or blurred vision</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Double vision</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Headaches</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Burst blood vessels in the eye (subconjunctival hemorrhage)</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Swelling of the retina (macular edema)</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Visual disturbances or blind spots</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Optic nerve swelling (papilledema) in severe cases</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Complete vision loss (in advanced cases)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Causes section */}
        <div className="pb-12 md:pb-16">
          <Title heading="Causes" noted="Risk Factors" title="What Causes Hypertensive Retinopathy?">
            <p className="font-medium text-gray-600 text-center mt-5 leading-8">Hypertensive retinopathy is directly caused by elevated blood pressure that damages the retinal blood vessels.</p>
          </Title>

          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Common Risk Factors</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Poorly controlled hypertension</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Duration of hypertension (long-term high blood pressure)</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Diabetes</span>
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
                      <span className="text-gray-700">Smoking</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Advanced age</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Treatment section */}
        <div className="pb-12 md:pb-16">
          <Title heading="Treatment" noted="Management" title="Treatment for Hypertensive Retinopathy">
            <p className="font-medium text-gray-600 text-center mt-5 leading-8">The primary treatment for hypertensive retinopathy is controlling blood pressure.</p>
          </Title>

          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Treatment Options</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Blood pressure medications (antihypertensives)</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Lifestyle modifications (diet, exercise)</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Weight management</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Regular eye examinations</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Management of other risk factors (diabetes, cholesterol)</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Smoking cessation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prevention section */}
        <div className="pb-12 md:pb-16">
          <Title heading="Prevention" noted="Management" title="Preventing Hypertensive Retinopathy">
            <p className="font-medium text-gray-600 text-center mt-5 leading-8">Prevention focuses on controlling blood pressure and other risk factors.</p>
          </Title>

          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Preventive Measures</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Regular blood pressure monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Adherence to blood pressure medications</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Reducing sodium (salt) intake</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Regular physical activity</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Limiting alcohol consumption</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Regular comprehensive eye examinations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HypertensiveRetinopathyContainer;
