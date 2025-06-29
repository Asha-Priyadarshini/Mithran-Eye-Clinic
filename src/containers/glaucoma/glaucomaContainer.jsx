import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Title from '../../components/sectionTitle/title';
import eyeImage from '../../images/serviceImages/glaucoma.jpg';

const GlaucomaContainer = () => {
  return (
    <section className="pt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero section */}
        <div className="pt-12 pb-12 md:pt-20 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="mb-8">
                <h1 className="h1 capitalize font-poppins text-3xl lg:text-5xl font-bold text-grayish-900 text-center lg:text-left leading-8" style={{lineHeight: 1.3}}>Understanding <span className="text-primary-900">Primary Open Angle Glaucoma</span></h1>
              </div>
              <p className="text-gray-600 lg:text-lg mb-6">
                Primary Open Angle Glaucoma (POAG) is the most common form of glaucoma, a group of eye diseases that damage the optic nerve and can result in vision loss and blindness. In POAG, the drainage angle for fluid inside the eye remains open, but the drainage channels in the angle are partially blocked, causing pressure to gradually increase within the eye.
              </p>
              <p className="text-gray-600 lg:text-lg mb-6">
                This increased pressure, called intraocular pressure, can damage the optic nerve which transmits images to the brain. If the damage continues, glaucoma can lead to permanent vision loss. Without proper treatment, glaucoma can cause total permanent blindness within a few years.
              </p>
            </div>
            <div className="lg:col-span-1 order-1 lg:order-2">
              <img src={eyeImage} alt="glaucoma eye examination" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

        {/* Symptoms section */}
        <div className="pb-12 md:pb-16">
          <Title heading="Symptoms" noted="Signs" title="Signs and Symptoms of Primary Open Angle Glaucoma">
            <p className="font-medium text-gray-600 text-center mt-5 leading-8">POAG often has no symptoms in its early stages. As the disease progresses, symptoms may include:</p>
          </Title>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Patchy blind spots in peripheral (side) vision</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Tunnel vision in advanced stages</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Gradual loss of peripheral vision, usually beginning on the nasal side</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Eye pain or discomfort (in some cases)</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Headache (occasionally)</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Difficulty adjusting to dark rooms</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Difficulty focusing on near or far objects</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Halos around lights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Risk factors section */}
        <div className="pb-12 md:pb-16">
          <Title heading="Risk Factors" noted="Causes" title="Risk Factors for Primary Open Angle Glaucoma">
            <p className="font-medium text-gray-600 text-center mt-5 leading-8">Certain factors increase your risk of developing POAG:</p>
          </Title>

          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300 mt-12">
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Age over 60 years</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Family history of glaucoma</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">African, Hispanic, or Asian heritage</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">High intraocular pressure</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Certain medical conditions like diabetes, heart disease, and high blood pressure</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Long-term corticosteroid medication use</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Thin corneas</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                  <span className="text-gray-700">Extreme nearsightedness or farsightedness</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Treatment section */}
        <div className="pb-12 md:pb-16">
          <Title heading="Treatment" noted="Options" title="Treatment Options for Primary Open Angle Glaucoma">
            <p className="font-medium text-gray-600 text-center mt-5 leading-8">Treatment aims to lower intraocular pressure to prevent further damage:</p>
          </Title>

          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Eye Drops</h3>
              <p className="text-gray-700 mb-4">
                Most people with glaucoma are prescribed eye drops that need to be used daily. These medications lower eye pressure by either reducing fluid production or improving drainage.
              </p>
              <p className="text-gray-700">
                It's crucial to use these medications exactly as prescribed, even if you have no symptoms, to prevent vision loss.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Laser Treatment</h3>
              <p className="text-gray-700 mb-4">
                Laser trabeculoplasty is a procedure that helps fluid drain out of the eye to lower pressure. This can be an effective option when medication alone isn't sufficient.
              </p>
              <p className="text-gray-700">
                The effects may wear off over time, but the procedure can be repeated if necessary.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Surgery</h3>
              <p className="text-gray-700 mb-4">
                When medications and laser treatments aren't effective, surgery might be recommended to create a new drainage channel for the eye fluid.
              </p>
              <p className="text-gray-700">
                Minimally invasive glaucoma surgery (MIGS) procedures are increasingly popular as they have fewer risks compared to traditional surgery.
              </p>
            </div>
          </div>
        </div>

        {/* Prevention and management section */}
        <div className="pb-12 md:pb-16">
          <Title heading="Management" noted="Prevention" title="Prevention and Management">
            <p className="font-medium text-gray-600 text-center mt-5 leading-8">While you can't prevent glaucoma, you can manage it effectively:</p>
          </Title>

          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300 mt-12">
            <ul className="space-y-4">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                <span className="text-gray-700"><strong>Regular eye exams:</strong> Early detection through comprehensive eye exams is crucial, especially if you're over 40 or have risk factors.</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                <span className="text-gray-700"><strong>Know your family history:</strong> Be aware if glaucoma runs in your family and inform your eye doctor.</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                <span className="text-gray-700"><strong>Exercise safely:</strong> Regular, moderate exercise may help reduce eye pressure, but avoid activities that increase it.</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                <span className="text-gray-700"><strong>Take prescribed eye drops regularly:</strong> Consistent use of prescribed medications is essential for managing glaucoma.</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mr-2 mt-1" />
                <span className="text-gray-700"><strong>Protect your eyes:</strong> Wear eye protection when engaged in activities that could injure your eyes.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Conclusion section */}
        <div className="pb-12 md:pb-20">
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-primary-900">
            <h3 className="text-2xl font-semibold text-primary-900 mb-4">When to See a Doctor</h3>
            <p className="text-gray-700 mb-4">
              If you experience any changes in vision, particularly loss of peripheral vision, see an eye doctor immediately. Regular eye exams are crucial for early detection, as most people with glaucoma don't notice symptoms until significant damage has occurred.
            </p>
            <p className="text-gray-700 font-medium">
              At Mithran Eye Clinic, we provide comprehensive glaucoma screenings, diagnosis, and the latest treatment options. Our specialists can help you preserve your vision and maintain your quality of life even if you've been diagnosed with glaucoma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlaucomaContainer;
