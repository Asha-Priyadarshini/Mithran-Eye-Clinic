import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Title from '../../components/sectionTitle/title';
import eyeImage from '../../images/serviceImages/dry-eye.jpg';

const DryEyeContainer = () => {
  return (
    <section className="pt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero section */}
        <div className="pt-12 pb-12 md:pt-20 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="mb-8">
                <h1 className="h1 capitalize font-poppins text-3xl lg:text-5xl font-bold text-grayish-900 text-center lg:text-left leading-8" style={{lineHeight: 1.3}}>Understanding <span className="text-primary-900">Dry Eye Disease</span></h1>
              </div>
              <p className="text-gray-600 lg:text-lg mb-6">
                Dry eye disease occurs when your tears aren't able to provide adequate lubrication for your eyes. This condition is common and often chronic, affecting millions of people worldwide, particularly those over the age of 50.
              </p>
              <p className="text-gray-600 lg:text-lg mb-6">
                Tears can be inadequate and unstable for many reasons. For example, dry eyes may occur if you don't produce enough tears or if you produce poor-quality tears. This tear instability leads to inflammation and damage of the eye's surface, causing discomfort and visual disturbances that can significantly impact your daily activities and quality of life.
              </p>
            </div>
            <div className="lg:col-span-1 order-1 lg:order-2">
              <img src={eyeImage} alt="dry eye disease" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

        {/* Symptoms section */}
        <div className="pb-12 md:pb-16">
          <Title heading="Symptoms" noted="Signs" title="Signs and Symptoms of Dry Eye Disease">
            <p className="font-medium text-gray-600 text-center mt-5 leading-8">Dry eye disease signs and symptoms may include:</p>
          </Title>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">A stinging, burning or scratchy sensation in your eyes</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Stringy mucus in or around your eyes</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Sensitivity to light</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Eye redness</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">A sensation of having a foreign body in your eyes</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Difficulty wearing contact lenses</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Difficulty with nighttime driving</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Watery eyes, which is the body's response to the irritation of dry eyes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Causes section */}
        <div className="pb-12 md:pb-16">
          <Title heading="Causes" noted="Risk Factors" title="What Causes Dry Eye Disease?">
            <p className="font-medium text-gray-600 text-center mt-5 leading-8">Dry eyes are caused by a variety of factors that disrupt the healthy tear film.</p>
          </Title>

          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Common Risk Factors</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Being over age 50</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Being female, especially after menopause</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Extended screen time</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Wearing contact lenses</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Certain medical conditions (rheumatoid arthritis, diabetes, thyroid disorders)</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Medications (antihistamines, decongestants, antidepressants)</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Environmental factors (wind, dry climates, air conditioning)</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Previous laser eye surgeries</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Treatment section */}
        <div className="pb-12 md:pb-20">
          <Title heading="Treatment" noted="Solutions" title="Dry Eye Disease Treatment Options">
            <p className="font-medium text-gray-600 text-center mt-5 leading-8">At Mithran Eye Clinic, we offer a range of treatments for dry eye disease, tailored to each patient's specific condition.</p>
          </Title>

          <div className="mt-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-bold text-primary-900 mb-4">Home Remedies and Lifestyle Changes</h3>
                <p className="text-gray-700 mb-4">For mild cases of dry eyes, these approaches may help:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Over-the-counter artificial tears</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Taking regular breaks during screen time (20-20-20 rule)</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Increasing humidity in your living environment</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Warm compresses and eyelid cleansing</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-bold text-primary-900 mb-4">Medical Treatments</h3>
                <p className="text-gray-700 mb-4">For more severe or persistent cases, these options may be recommended:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Prescription anti-inflammatory eye drops</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Punctal plugs to block tear drainage</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Meibomian gland expression procedures</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">LipiFlow or other thermal pulsation treatments</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Intense pulsed light therapy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Prevention section */}
        <div className="pb-12 md:pb-20">
          <Title heading="Prevention" noted="Wellness" title="Managing and Preventing Dry Eye Disease">
            <p className="font-medium text-gray-600 text-center mt-5 leading-8">While dry eye disease is often chronic, these strategies can help manage symptoms and prevent flare-ups.</p>
          </Title>

          <div className="mt-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
                <div className="text-primary-900 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4 text-center">Environmental Adjustments</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Use a humidifier in dry indoor environments</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Avoid direct air from fans, heaters, or air conditioners</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Wear wraparound sunglasses in windy conditions</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
                <div className="text-primary-900 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4 text-center">Digital Device Habits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Follow the 20-20-20 rule (every 20 minutes, look at something 20 feet away for 20 seconds)</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Adjust screen position (slightly below eye level)</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Remember to blink regularly when using screens</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
                <div className="text-primary-900 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4 text-center">Lifestyle Management</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Stay hydrated by drinking plenty of water</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Consume omega-3 fatty acids (fish, flaxseed)</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Avoid smoking and secondhand smoke</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Consider medication alternatives if current medications worsen symptoms</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Daily Eye Care Routine</h3>
              <p className="text-gray-700 mb-6">Establishing a regular eye care routine can help manage dry eye symptoms:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Use artificial tears consistently as directed</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Apply warm compresses to eyelids for 5-10 minutes daily</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Practice gentle eyelid massage</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Clean eyelids with recommended cleansers</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Remove eye makeup thoroughly before bed</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Follow proper contact lens hygiene if you wear them</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action section */}
        <div className="pb-12 md:pb-20">
          <div className="bg-primary-700 rounded-lg shadow-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Schedule Your Dry Eye Consultation Today</h3>
            <p className="text-white mb-6">Our specialists will evaluate your condition and create a personalized treatment plan to provide relief.</p>
            <a href="/appointment" className="inline-block bg-white text-primary-900 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300">Book Appointment</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DryEyeContainer;
