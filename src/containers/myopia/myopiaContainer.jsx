import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Title from '../../components/sectionTitle/title';
import eyeImage from '../../images/serviceImages/myopia.webp';

const MyopiaContainer = () => {
  return (
    <section className="pt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero section */}
        <div className="pt-12 pb-12 md:pt-20 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="mb-8">
                <h1 className="h1 capitalize font-poppins text-3xl lg:text-5xl font-bold text-grayish-900 text-center lg:text-left leading-8" style={{lineHeight: 1.3}}>Understanding <span className="text-primary-900">Myopia</span></h1>
              </div>
              <p className="text-gray-600 lg:text-lg mb-6">
                Myopia, also known as nearsightedness, is a common vision condition in which you can see objects near to you clearly, but objects farther away are blurry. It occurs when the shape of your eye causes light rays to bend incorrectly, focusing images in front of your retina instead of on it.
              </p>
              <p className="text-gray-600 lg:text-lg mb-6">
                Myopia typically develops during childhood and adolescence, and usually stabilizes by the early twenties. The condition is becoming increasingly prevalent worldwide, with some regions reporting myopia rates of over 80% in young adults. Without proper management, high myopia can increase the risk of serious eye conditions later in life.
              </p>
            </div>
            <div className="lg:col-span-1 order-1 lg:order-2">
              <img src={eyeImage} alt="myopia eye" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

        {/* Symptoms section */}
        <div className="pb-12 md:pb-16">
          <Title heading="Symptoms" noted="Signs" title="Signs and Symptoms of Myopia">
            <p className="font-medium text-gray-600 text-center mt-5 leading-8">Myopia signs and symptoms may include:</p>
          </Title>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Blurred vision when looking at distant objects</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Needing to squint or partially close the eyelids to see clearly</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Headaches caused by eyestrain</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Difficulty seeing while driving, especially at night</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Having to sit closer to the television or computer screen</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Holding books very close while reading</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Unaware of distant objects or blurred vision complaints</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Poor classroom performance in school-aged children</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Causes section */}
        <div className="pb-12 md:pb-16">
          <Title heading="Causes" noted="Risk Factors" title="What Causes Myopia?">
            <p className="font-medium text-gray-600 text-center mt-5 leading-8">Myopia occurs when your eyeball is too long or the cornea (the front surface of the eye) is too curved, causing light to focus in front of the retina instead of on it.</p>
          </Title>

          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Common Risk Factors</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Genetics (having parents with myopia)</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Limited time spent outdoors during childhood</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Prolonged near work activities (reading, computer use)</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Ethnicity (higher prevalence in Asian populations)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Urban living environment</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Higher education levels</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Digital screen time</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Poor lighting conditions while reading</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Treatment section */}
        <div className="pb-12 md:pb-20">
          <Title heading="Treatment" noted="Solutions" title="Myopia Treatment Options">
            <p className="font-medium text-gray-600 text-center mt-5 leading-8">At Mithran Eye Clinic, we offer a comprehensive range of treatments for myopia management, tailored to your specific needs.</p>
          </Title>

          <div className="mt-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-bold text-primary-900 mb-4">Corrective Lenses</h3>
                <p className="text-gray-700 mb-4">The most common treatment for myopia includes:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Prescription eyeglasses</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Contact lenses</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Specialized lenses for myopia control</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Bifocal or multifocal lenses</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-bold text-primary-900 mb-4">Advanced Treatment Options</h3>
                <p className="text-gray-700 mb-4">For long-term management or correction:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Smile/Smile pro/Contoura</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Atropine eye drops (low-dose for myopia control)</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">LASIK or PRK surgery (for adults with stable prescription)</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Implantable contact lenses (ICL) for severe myopia</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Prevention section */}
        <div className="pb-12 md:pb-20">
          <Title heading="Prevention" noted="Management" title="Myopia Management Strategies">
            <p className="font-medium text-gray-600 text-center mt-5 leading-8">While myopia has a genetic component, there are several habits and lifestyle changes that may help slow its progression, especially in children.</p>
          </Title>

          <div className="mt-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
                <div className="text-primary-900 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4 text-center">Outdoor Time</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Spend at least 2 hours outdoors daily</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Natural light exposure benefits eye development</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Encourage outdoor play and activities</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
                <div className="text-primary-900 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4 text-center">Visual Habits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Follow the 20-20-20 rule (every 20 minutes, look 20 feet away for 20 seconds)</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Maintain proper reading distance (at least 30 cm)</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Take regular breaks from near work</span>
                  </li>
                </ul>
              </div>
              
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
                    <span className="text-gray-700">Track progression with your eye doctor</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Early intervention when needed</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Adjust treatment as eyes develop</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Lifestyle Factors That May Help</h3>
              <p className="text-gray-700 mb-6">Research suggests these factors may contribute to healthy eye development:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Balanced diet rich in fruits and vegetables</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Adequate vitamin D (from sunlight or supplements)</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Proper lighting for reading and close work</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Limiting continuous digital screen time</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Using blue light filters on digital devices</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                      <span className="text-gray-700">Good posture when reading or using computers</span>
                    </li>
                  </ul>
                </div>
              </div>            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="pb-12 md:pb-20">
          <Title heading="FAQ" noted="Questions" title="Can Food Cure Myopia?">
            <p className="font-medium text-gray-600 text-center mt-5 leading-8">A common question regarding myopia is whether dietary changes can reverse or cure the condition.</p>
          </Title>

          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-primary-900 mb-4">The Truth About Diet and Myopia</h3>
            
            <div className="mb-8">
              <p className="text-gray-700 mb-4">
                <strong className="text-primary-900">Can food cure myopia?</strong> The short answer is no. Myopia is primarily a structural condition where the eyeball is too long or the cornea is too curved. Once these structural changes have occurred, dietary modifications alone cannot reverse them.
              </p>
              
              <p className="text-gray-700 mb-4">
                However, nutrition does play an important role in overall eye health and may help support healthy vision development, especially in children. Some nutrients that are beneficial for eye health include:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-primary-900 mb-3">Supportive Nutrients for Eye Health</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <div>
                      <span className="font-medium text-gray-700">Vitamin A:</span>
                      <span className="text-gray-700"> Essential for retinal health (found in carrots, sweet potatoes, spinach)</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <div>
                      <span className="font-medium text-gray-700">Omega-3 fatty acids:</span>
                      <span className="text-gray-700"> May support eye development (found in fish, flaxseed, walnuts)</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <div>
                      <span className="font-medium text-gray-700">Lutein and Zeaxanthin:</span>
                      <span className="text-gray-700"> Antioxidants that protect eye cells (found in leafy greens, egg yolks)</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-primary-900 mb-3">What Research Shows</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Some studies suggest vitamin D deficiency may be linked to myopia progression</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">Overall nutritional status may influence eye growth during development</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                    <span className="text-gray-700">A balanced diet supports general eye health but cannot reverse existing myopia</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 border-l-4 border-primary-700 bg-gray-50">
              <p className="italic text-gray-700">
                "While a healthy diet rich in eye-supporting nutrients is important for overall eye health, myopia correction requires proper optical correction (glasses, contact lenses) or medical interventions. Diet should be considered as one component of comprehensive eye care, not as a standalone treatment for myopia."
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="pb-12 md:pb-20">          
          <div className="bg-primary-700 rounded-lg shadow-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Schedule Your Myopia Consultation Today</h3>
            <p className="text-white mb-6">Our expert optometrists will provide you with a comprehensive eye examination and personalized myopia management plan.</p>
            <a href="/appointment" className="inline-block bg-white text-primary-900 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300">Book Appointment</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyopiaContainer;
