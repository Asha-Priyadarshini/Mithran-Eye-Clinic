import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import bgImage from '../../images/hero-bg.png';
import fDoc from '../../images/lady_doc.png';


const AboutContainer = () => (
  <section className="relative">
    <div className="bg-cover bg-no-repeat w-full h-full absolute inset-0" style={ { backgroundImage: `url(${bgImage})` } } />
    <div className="relative h-scree max-w-[1300px] mx-auto px-4 sm:px-6" >
      {/* Section 1: Head Doctor Information */}
      <div className="grid lg:grid-cols-2 gap-y-6 pt-28 lg:pt-20 z-20">
        <div className="lg:col-span-1 lg:pt-20 order-2 lg:order-1">
          <img src={fDoc} alt="Dr. Asha Priyadarshini - Top Eye Specialist in Nagercoil" className="z-0 w-full rounded-lg shadow-xl" style={{height: 500}} />
        </div>

        <div className="lg:col-span-1 lg:pt-20 order-1 lg:order-2">
          <div>
            <div className="flex flex-col item-center lg:items-start space-y-4 mb-5">
              <p className="text-primary-900 font-semibold text-lg text-center lg:text-left">-Meet Our Eye Specialist</p>
              <h1 className="h1 capitalize font-poppins text-3xl lg:text-5xl font-bold text-grayish-900 text-center lg:text-left leading-8" style={{lineHeight: 1.3}}>
                <span className="text-primary-900 pr-4">Dr. Asha</span>Priyadarshini
              </h1>
              <p className="text-primary-900 font-semibold text-xl">Best Eye Doctor in Nagercoil | MBBS, MS, FPRS</p>
            </div>
            <p className="text-gray-600 lg:text-lg">
              Dr. Asha Priyadarshini is a highly qualified eye specialist in Nagercoil with extensive experience in diagnosing and treating various eye conditions. She specializes in advanced cataract surgery, and glaucoma management, and is committed to providing personalized vision care to all patients in Nagercoil, Marthandam, and surrounding areas of Kanyakumari District.
            </p>
            <p className="text-gray-600 lg:text-lg pt-3">
              With her patient-centered approach and expertise in the latest ophthalmology technologies, Dr. Asha has helped thousands of patients from across Tamil Nadu improve their vision and quality of life. Her dedication to excellence in eye treatment has made Mithran Eye Clinic the best eye hospital in Karavilai.
            </p>
            
            {/* Contact Information */}
            <div className="mt-6 space-y-3">
              <h3 className="font-semibold text-xl text-grayish-900">Contact Dr. Asha directly:</h3>
              <div className="flex items-center">
                <div className="bg-primary-700 p-2 rounded-full mr-3">
                  <FontAwesomeIcon icon={faPhone} className="text-white text-sm" />
                </div>
                <p className="text-gray-800">
                  <a href="tel:+918682088136" className="hover:text-primary-900 transition-all duration-300">+91 8682088136</a>
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="bg-primary-700 p-2 rounded-full mr-3">
                  <FontAwesomeIcon icon={faEnvelope} className="text-white text-sm" />
                </div>
                <p className="text-gray-800">
                  <a href="mailto:ashasomasundaralingam@gmail.com" className="hover:text-primary-900 transition-all duration-300">ashasomasundaralingam@gmail.com</a>
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="bg-primary-700 p-2 rounded-full mr-3">
                  <FontAwesomeIcon icon={faInstagram} className="text-white text-sm" />
                </div>
                <p className="text-gray-800">
                  <a href="https://www.instagram.com/mithraneyecare/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-900 transition-all duration-300">@mithraneyecare</a>
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="bg-primary-700 p-2 rounded-full mr-3">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-white text-sm" />
                </div>
                <p className="text-gray-800">
                  <a href="https://wa.me/918682088136" target="_blank" rel="noopener noreferrer" className="hover:text-primary-900 transition-all duration-300">WhatsApp Consultation</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section 2: Mithran Eye Clinic Information - SEO Optimized */}
      <div className="grid lg:grid-cols-2 gap-x-4 gap-y-6 pt-8 mt-8 lg:pt-20 z-20">
        <div className="lg:col-span-1">
          <div>
            <div className="flex flex-col item-center lg:items-start space-y-4 mb-5">
              <p className="text-primary-900 font-semibold text-lg text-center lg:text-left">-Best Eye Care in Nagercoil</p>
              <h2 className="h1 capitalize font-poppins text-3xl lg:text-5xl font-bold text-grayish-900 text-center lg:text-left leading-8" style={{lineHeight: 1.3}}>
                <span className="text-primary-900 pr-4">Mithran</span>Eye Clinic
              </h2>
            </div>
            <p className="text-gray-600 lg:text-lg pb-4">
              <strong>Mithran Eye Clinic</strong> located conveniently at Rajakamanagalam Road in Karavilai near Nagercoil, our ophthalmology clinic is equipped with the latest vision testing technology and staffed by experienced eye specialists and optometrists. We pride ourselves on providing personalized eye treatment in a comfortable environment, ensuring that each patient from Nagercoil, Marthandam, Thuckalay, Colachel, and neighboring areas receives the highest quality eye surgery and vision care for their unique needs.
            </p>
            <div className="mt-4">
              <h3 className="font-semibold text-xl text-primary-900 mb-3">Our Services Include:</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-600">
                <li className="flex items-center">
                  <span className="mr-2 text-primary-900">✓</span> Complete Eye Examinations
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary-900">✓</span> Minor Procedures
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary-900">✓</span> Glaucoma Management
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary-900">✓</span> Diabetic Retinopathy Care
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary-900">✓</span> Prescription Glasses & Lenses
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary-900">✓</span> Dry Eye Treatment
                </li>
              </ul>
            </div>
            <div className="mt-6 flex flex-col lg:flex-row lg:items-center lg:space-x-4">
              <a 
                href="https://maps.app.goo.gl/1uL6eV8vRjvAXbX28" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center bg-primary-900 text-white px-4 py-2 rounded-md mb-2 lg:mb-0 hover:bg-primary-800 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                <span>Find Us on Google Maps</span>
              </a>
              <a 
                href="tel:+918682088136" 
                className="flex items-center bg-primary-700 text-white px-4 py-2 rounded-md hover:bg-primary-800 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <span>Call for Appointment</span>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg shadow-xl w-full">
            <h3 className="text-xl font-bold text-primary-900 mb-4 text-center">Why Choose Mithran Eye Clinic?</h3>
            <div className="space-y-4">
              <div className="flex p-3 bg-gray-50 rounded-md">
                <div className="mr-3 text-primary-900 text-2xl font-bold">01</div>
                <div>
                  <h4 className="font-semibold text-grayish-900">Experienced Eye Specialists</h4>
                  <p className="text-gray-600">Our team is led by Dr. Asha Priyadarshini, the best eye doctor in Kanyakumari district with expertise in cataract surgery, glaucoma treatment, and vision correction.</p>
                </div>
              </div>
              
              <div className="flex p-3 bg-gray-50 rounded-md">
                <div className="mr-3 text-primary-900 text-2xl font-bold">02</div>
                <div>
                  <h4 className="font-semibold text-grayish-900">Advanced Eye Care Technology</h4>
                  <p className="text-gray-600">We use state-of-the-art diagnostic equipment and modern eye surgery techniques for accurate diagnosis and effective treatment of all eye conditions.</p>
                </div>
              </div>
              
              <div className="flex p-3 bg-gray-50 rounded-md">
                <div className="mr-3 text-primary-900 text-2xl font-bold">03</div>
                <div>
                  <h4 className="font-semibold text-grayish-900">Personalized Eye Treatment</h4>
                  <p className="text-gray-600">Every patient receives a tailored vision care plan designed for their unique eye health needs with affordable eye care options.</p>
                </div>
              </div>
              
              <div className="flex p-3 bg-gray-50 rounded-md">
                <div className="mr-3 text-primary-900 text-2xl font-bold">04</div>
                <div>
                  <h4 className="font-semibold text-grayish-900">Convenient Location</h4>
                  <p className="text-gray-600">Easily accessible from Nagercoil, Marthandam, Thuckalay, Colachel, and surrounding areas in Kanyakumari District.</p>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-700 font-medium">
                <span className="text-primary-900">Address:</span> 18/25 A-2, Rajakamanagalam Road, Karavilai, Kanyakumari District, Tamil Nadu, India - 629201
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SEO-optimized footer section with schema markup */}
      <div className="pt-10 mt-10 border-t border-gray-200 z-20">
        <div className="text-center">
          <h3 className="text-xl font-bold text-primary-900 mb-4">Serving Eye Care Needs Across Kanyakumari District</h3>
          <p className="text-gray-600 mb-4">
            Mithran Eye Clinic provides top-quality eye care services including cataract surgery, glaucoma treatment, LASIK evaluations, and vision correction to patients from Nagercoil, Marthandam, Thuckalay, 
            Colachel, Kulasekharam, Kaliyakkavilai, Eraniel and all surrounding areas in Kanyakumari, Tamil Nadu. Visit our state-of-the-art eye hospital near you for affordable eye treatment and vision care solutions.
          </p>
        </div>
      </div>
      
      {/* Enhanced SEO Schema Markup */}
      <div style={{ display: 'none' }}>
        {/* Medical Clinic Schema */}
        <div itemScope itemType="http://schema.org/MedicalClinic">
          <span itemProp="name">Mithran Eye Clinic</span>
          <meta itemProp="alternateName" content="Best Eye Hospital in Nagercoil" />
          <meta itemProp="description" content="Mithran Eye Clinic is the premier eye care center in Karavilai, Nagercoil, offering comprehensive eye examinations, glaucoma treatment, and specialized treatments for all eye conditions including diabetic retinopathy and pediatric eye disorders." />
          <meta itemProp="slogan" content="Expert Vision Care in Kanyakumari District" />
          <meta itemProp="url" content="https://www.mithraneyeclinic.com" />
          <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
            <span itemProp="streetAddress">18/25 A-2, Rajakamanagalam Road, Karavilai</span>
            <span itemProp="addressLocality">Nagercoil</span>
            <span itemProp="addressRegion">Tamil Nadu</span>
            <span itemProp="postalCode">629201</span>
            <span itemProp="addressCountry">India</span>
          </div>
          <span itemProp="telephone">+918682088136</span>
          <meta itemProp="email" content="ashasomasundaralingam@gmail.com" />
          <div itemProp="geo" itemScope itemType="http://schema.org/GeoCoordinates">
            <meta itemProp="latitude" content="8.1432997764727" />
            <meta itemProp="longitude" content="77.38286991038488" />
          </div>
          <meta itemProp="priceRange" content="₹₹-₹₹₹" />
          <div itemProp="medicalSpecialty">Ophthalmology</div>
          <div itemProp="availableService">Eye Examination</div>
          <div itemProp="availableService">Glaucoma Treatment</div>
          <div itemProp="availableService">Diabetic Retinopathy Care</div>
          <div itemProp="availableService">Vision Testing</div>
          <div itemProp="availableService">Prescription Glasses & Lenses</div>
          <div itemProp="availableService">Dry Eye Treatment</div>
          <div itemProp="openingHours" content="Mo-Fr 09:00-18:00">Monday-Saturday: 9:00AM-8:30PM</div>
          <div itemProp="openingHours" content="Su Closed">Sunday: Appointment Only</div>
          
          {/* Image schema */}
          <div itemProp="image" itemScope itemType="http://schema.org/ImageObject">
            <meta itemProp="url" content="https://www.mithraneyeclinic.com/images/clinic-building.jpg" />
            <meta itemProp="width" content="1200" />
            <meta itemProp="height" content="800" />
            <meta itemProp="caption" content="Mithran Eye Clinic Building in Nagercoil" />
          </div>
          
          {/* Service area */}
          <div itemProp="areaServed" itemScope itemType="http://schema.org/State">
            <meta itemProp="name" content="Kanyakumari District" />
            <meta itemProp="containsPlace" content="Nagercoil, Marthandam, Thuckalay, Colachel, Kulasekharam, Kaliyakkavilai, Eraniel" />
          </div>
          
          {/* Doctor Information Schema */}
          <div itemProp="physician" itemScope itemType="http://schema.org/Physician">
            <meta itemProp="name" content="Dr. Asha Priyadarshini" />
            <meta itemProp="jobTitle" content="Chief Ophthalmologist & Medical Director" />
            <meta itemProp="description" content="Dr. Asha Priyadarshini is a highly qualified eye specialist in Nagercoil with extensive experience in diagnosing and treating various eye conditions including cataract surgery, and glaucoma management." />
            <meta itemProp="telephone" content="+918682088136" />
            <meta itemProp="email" content="ashasomasundaralingam@gmail.com" />
            <div itemProp="medicalSpecialty">Ophthalmology</div>
            <div itemProp="medicalSpecialty">Cataract Surgery</div>
            <div itemProp="medicalSpecialty">Glaucoma Management</div>
            <div itemProp="medicalSpecialty">Pediatric Ophthalmology</div>
            <div itemProp="image" itemScope itemType="http://schema.org/ImageObject">
              <meta itemProp="url" content="https://www.mithraneyeclinic.com/images/dr-asha.jpg" />
              <meta itemProp="width" content="800" />
              <meta itemProp="height" content="1000" />
            </div>
          </div>
          
          {/* Review Schema */}
          <div itemProp="review" itemScope itemType="http://schema.org/Review">
            <div itemProp="author" itemScope itemType="http://schema.org/Person">
              <meta itemProp="name" content="Sundar Raj" />
            </div>
            <meta itemProp="reviewRating" content="5" />
            <meta itemProp="datePublished" content="2025-01-15" />
            <meta itemProp="reviewBody" content="Dr. Asha provided excellent care for my cataract surgery. The staff was professional and the clinic is well-equipped with modern technology. Highly recommend Mithran Eye Clinic!" />
          </div>
          
          {/* Aggregate Rating Schema */}
          <div itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
            <meta itemProp="ratingValue" content="4.9" />
            <meta itemProp="ratingCount" content="127" />
            <meta itemProp="bestRating" content="5" />
            <meta itemProp="worstRating" content="1" />
          </div>
          
          {/* Organization Schema with Social Media */}
          <div itemProp="parentOrganization" itemScope itemType="http://schema.org/Organization">
            <meta itemProp="name" content="Mithran Eye Clinic" />
            <meta itemProp="url" content="https://www.mithraneyeclinic.com" />
            <meta itemProp="logo" content="https://www.mithraneyeclinic.com/logo.png" />
            <div itemProp="sameAs">
              <meta content="https://www.instagram.com/mithraneyecare/" />
              <meta content="https://www.facebook.com/mithraneyeclinic/" />
              <meta content="https://twitter.com/mithraneyecare" />
              <meta content="https://www.linkedin.com/company/mithran-eye-clinic/" />
              <meta content="https://www.youtube.com/channel/mithraneyeclinic" />
              <meta content="https://maps.app.goo.gl/1uL6eV8vRjvAXbX28" />
            </div>
          </div>
          
          {/* FAQ Schema */}
          <div itemProp="mainEntity" itemScope itemType="http://schema.org/FAQPage">
            <div itemScope itemType="http://schema.org/Question" itemProp="mainEntity">
              <meta itemProp="name" content="What eye conditions does Mithran Eye Clinic treat?" />
              <div itemScope itemType="http://schema.org/Answer" itemProp="acceptedAnswer">
                <meta itemProp="text" content="Mithran Eye Clinic treats a wide range of eye conditions including cataracts, glaucoma, diabetic retinopathy, dry eye syndrome, refractive errors, pediatric eye disorders, and more. Our comprehensive services include eye examinations, surgical procedures, and vision correction solutions." />
              </div>
            </div>
            <div itemScope itemType="http://schema.org/Question" itemProp="mainEntity">
              <meta itemProp="name" content="How can I schedule an appointment with Dr. Asha Priyadarshini?" />
              <div itemScope itemType="http://schema.org/Answer" itemProp="acceptedAnswer">
                <meta itemProp="text" content="You can schedule an appointment with Dr. Asha by calling +91 8682088136, sending a WhatsApp message to the same number, or emailing ashasomasundaralingam@gmail.com. Our clinic is open Monday to Friday from 9:00 AM to 6:00 PM and Saturday from 9:00 AM to 4:00 PM." />
              </div>
            </div>
            <div itemScope itemType="http://schema.org/Question" itemProp="mainEntity">
              <meta itemProp="name" content="Where is Mithran Eye Clinic located?" />
              <div itemScope itemType="http://schema.org/Answer" itemProp="acceptedAnswer">
                <meta itemProp="text" content="Mithran Eye Clinic is located at 18/25 A-2, Rajakamanagalam Road, Karavilai, Kanyakumari District, Tamil Nadu, India - 629201. We are easily accessible from Nagercoil, Marthandam, Thuckalay, Colachel, and surrounding areas." />
              </div>
            </div>
          </div>
        </div>
        
        {/* WebPage Schema for About Page */}
        <div itemScope itemType="http://schema.org/AboutPage">
          <meta itemProp="name" content="About Mithran Eye Clinic - Best Eye Hospital in Nagercoil" />
          <meta itemProp="description" content="Learn about Mithran Eye Clinic in Nagercoil and Dr. Asha Priyadarshini, the leading eye specialist in Kanyakumari District offering comprehensive eye care services." />
          <meta itemProp="url" content="https://www.mithraneyeclinic.com/about" />
          <meta itemProp="lastReviewed" content="2025-05-01" />
          <div itemProp="primaryImageOfPage" itemScope itemType="http://schema.org/ImageObject">
            <meta itemProp="url" content="https://www.mithraneyeclinic.com/logo.png" />
            <meta itemProp="width" content="1200" />
            <meta itemProp="height" content="800" />
          </div>
          <div itemProp="specialty">Ophthalmology</div>
          <div itemProp="specialty">Eye Care</div>
          <div itemProp="specialty">Vision Correction</div>
          <div itemProp="keywords" content="eye doctor Nagercoil, best eye clinic Tamil Nadu, cataract surgery Kanyakumari, ophthalmologist near me, eye specialist Marthandam, vision care Karavilai, eye hospital Nagercoil, LASIK evaluation Tamil Nadu" />
        </div>
        
        {/* Open Graph Protocol for Social Media */}
        <meta property="og:title" content="Mithran Eye Clinic - Best Eye Care Hospital in Nagercoil" />
        <meta property="og:description" content="Mithran Eye Clinic provides expert eye care services in Nagercoil, led by Dr. Asha Priyadarshini. Specializing in cataract surgery, glaucoma treatment, and comprehensive eye care." />
        <meta property="og:url" content="https://www.mithraneyeclinic.com/about" />
        <meta property="og:image" content="https://www.mithraneyeclinic.com/logo.png" />
        <meta property="og:image:alt" content="Mithran Eye Clinic Building and Staff" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mithran Eye Clinic" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card Data */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mithraneyecare" />
        <meta name="twitter:title" content="Mithran Eye Clinic - Premier Eye Hospital in Kanyakumari District" />
        <meta name="twitter:description" content="Visit Dr. Asha Priyadarshini at Mithran Eye Clinic for all your eye care needs including examinations, cataract surgery, glaucoma treatment, and more." />
        <meta name="twitter:image" content="https://www.mithraneyeclinic.com/logo.png" />
        <meta name="twitter:image:alt" content="Dr. Asha examining a patient at Mithran Eye Clinic" />
      </div>

    </div>
  </section>
);


export default AboutContainer;