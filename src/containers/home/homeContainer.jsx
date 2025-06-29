import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import AboutBrief from './aboutBrief/aboutBrief';
import HeroHome from './banner/heroHome';
// import DoctorsBrief from './doctors/doctors';
import ServiceBrief from './serviceBrief/serviceBrief';

function HomeContainer (){
  // Set SEO metadata using native JavaScript
  useEffect(() => {
    // Set page title
    document.title = "Mithran Eye Clinic - Best Eye Hospital in Nagercoil, Karavilai";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Mithran Eye Clinic offers comprehensive eye care services in Nagercoil, Karavilai. Visit Dr. Asha Priyadarshini for expert eye treatment, cataract surgery, glaucoma management and vision care near you.");
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = "description";
      newMetaDescription.content = "Mithran Eye Clinic offers comprehensive eye care services in Nagercoil, Karavilai. Visit Dr. Asha Priyadarshini for expert eye treatment, cataract surgery, glaucoma management and vision care near you.";
      document.head.appendChild(newMetaDescription);
    }
    
    // Set meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', "eye clinic near me, eye hospital Nagercoil, best ophthalmologist Karavilai, eye doctor Kanyakumari, cataract surgery Nagercoil, vision care center, Dr Asha Somasundaralingam, eye specialist Tamil Nadu, glaucoma treatment near me");
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = "keywords";
      metaKeywords.content = "eye clinic near me, eye hospital Nagercoil, best ophthalmologist Karavilai, eye doctor Kanyakumari, cataract surgery Nagercoil, vision care center, Dr Asha Somasundaralingam, eye specialist Tamil Nadu, glaucoma treatment near me";
      document.head.appendChild(metaKeywords);
    }
    
    // Set canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', "https://www.mithraneyeclinic.com");
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = "canonical";
      canonicalLink.href = "https://www.mithraneyeclinic.com";
      document.head.appendChild(canonicalLink);
    }
    
    // Add Open Graph tags
    const openGraphTags = [
      { property: "og:title", content: "Mithran Eye Clinic - Best Eye Hospital in Nagercoil | Dr. Asha Priyadarshini" },
      { property: "og:description", content: "Looking for the best eye doctor near you? Visit Mithran Eye Clinic in Karavilai, Nagercoil for comprehensive eye examinations, cataract surgery, glaucoma treatment and specialized eye care." },
      { property: "og:url", content: "https://www.mithraneyeclinic.com" },
      { property: "og:image", content: "https://www.mithraneyeclinic.com/logo.png" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Mithran Eye Clinic" },
      { property: "og:locale", content: "en_IN" }
    ];
    
    openGraphTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', tag.content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        metaTag.setAttribute('content', tag.content);
        document.head.appendChild(metaTag);
      }
    });
    
    // Add Twitter Card tags
    const twitterTags = [
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@mithraneyecare" },
      { name: "twitter:title", content: "Mithran Eye Clinic - Top Rated Eye Hospital in Nagercoil" },
      { name: "twitter:description", content: "Expert eye care services provided by Dr. Asha Priyadarshini at Mithran Eye Clinic, Karavilai. Serving Nagercoil, Marthandam, and all of Kanyakumari District." },
      { name: "twitter:image", content: "https://www.mithraneyeclinic.com/logo.png" }
    ];
    
    twitterTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', tag.content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', tag.name);
        metaTag.setAttribute('content', tag.content);
        document.head.appendChild(metaTag);
      }
    });
    
    // Cleanup function
    return () => {
      // Optional: Reset any metadata when component unmounts
    };
  }, []); // Empty dependency array means this runs once on component mount

  return (
    <main className="min-h-screen">

      <HeroHome />
      <ServiceBrief />
      <AboutBrief />
      {/* <DoctorsBrief /> */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-grayish-900 mb-6">Need to get in touch with our eye specialists?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Have questions about our eye care services or want to schedule an appointment with Dr. Asha Priyadarshini? Contact our friendly team at Mithran Eye Clinic in Karavilai, Nagercoil today.
          </p>
          <Link to="/contact-us" className="px-6 py-3 bg-primary-900 text-white font-semibold rounded-md hover:bg-primary-800 transition-all duration-300 ease-out shadow-md">
            Contact Us
          </Link>
        </div>
      </div>
      
      {/* Hidden SEO Section with Schema Markup */}
      <div style={{ display: 'none' }} aria-hidden="true">
        {/* Medical Clinic Schema */}
        <div itemScope itemType="http://schema.org/MedicalClinic">
          <span itemProp="name">Mithran Eye Clinic</span>
          <meta itemProp="alternateName" content="Best Eye Hospital in Nagercoil" />
          <meta itemProp="description" content="Mithran Eye Clinic is the premier eye care center in Karavilai, Nagercoil, offering comprehensive eye examinations, cataract surgery, glaucoma treatment, and specialized vision care services for patients across Kanyakumari District." />
          <meta itemProp="slogan" content="Your Vision, Our Priority" />
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
          <meta itemProp="priceRange" content="₹-₹₹" />
          <div itemProp="medicalSpecialty">Ophthalmology</div>
          <div itemProp="availableService">Eye Examination</div>
          <div itemProp="availableService">Glaucoma Treatment</div>
          <div itemProp="availableService">Diabetic Retinopathy Care</div>
          <div itemProp="availableService">Vision Testing</div>
          <div itemProp="availableService">Prescription Glasses & Lenses</div>
          <div itemProp="openingHours" content="Mo-Fr 09:00-18:00">Monday-Friday: 9:00AM-8:30PM</div>
          <div itemProp="openingHours" content="Su Closed">Sunday: Appointment Only</div>

          {/* Doctor Information Schema */}
          <div itemProp="physician" itemScope itemType="http://schema.org/Physician">
            <meta itemProp="name" content="Dr. Asha Priyadarshini" />
            <meta itemProp="jobTitle" content="Chief Ophthalmologist & Medical Director" />
            <meta itemProp="description" content="Dr. Asha Priyadarshini is a highly qualified eye specialist in Nagercoil with extensive experience in diagnosing and treating various eye conditions." />
            <meta itemProp="telephone" content="+918682088136" />
            <meta itemProp="email" content="ashasomasundaralingam@gmail.com" />
            <div itemProp="medicalSpecialty">Ophthalmology</div>
            <div itemProp="medicalSpecialty">Cataract Surgery</div>
            <div itemProp="medicalSpecialty">Glaucoma Management</div>
          </div>
          
          {/* Service area */}
          <div itemProp="areaServed" itemScope itemType="http://schema.org/State">
            <meta itemProp="name" content="Kanyakumari District" />
            <meta itemProp="containsPlace" content="Nagercoil, Marthandam, Thuckalay, Colachel, Kulasekharam, Kaliyakkavilai, Eraniel" />
          </div>
          
          {/* Local Business Schema */}
          <div itemProp="hasMap" content="https://maps.app.goo.gl/1uL6eV8vRjvAXbX28" />
          <div itemProp="sameAs">
            <meta content="https://www.instagram.com/mithraneyecare/" />
            <meta content="https://maps.app.goo.gl/1uL6eV8vRjvAXbX28" />
          </div>
          
          {/* WebPage Schema for Home Page */}
          <div itemScope itemType="http://schema.org/WebPage">
            <meta itemProp="name" content="Mithran Eye Clinic - Leading Eye Hospital in Nagercoil" />
            <meta itemProp="description" content="Mithran Eye Clinic offers comprehensive eye care services in Nagercoil, including eye examinations, cataract surgery, glaucoma treatment and more by Dr. Asha Priyadarshini." />
            <meta itemProp="url" content="https://www.mithraneyeclinic.com" />
            <meta itemProp="lastReviewed" content="2025-05-15" />
            <div itemProp="specialty">Ophthalmology</div>
            <div itemProp="specialty">Eye Care</div>
            <div itemProp="specialty">Vision Correction</div>
            <div itemProp="keywords" content="eye hospital near me, best eye clinic Nagercoil, eye doctor Karavilai, cataract surgery Kanyakumari, ophthalmologist Tamil Nadu, eye specialist near me" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomeContainer;