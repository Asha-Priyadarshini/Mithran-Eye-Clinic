import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import bgImage from '../../images/hero-bg.png';

const FaqContainer = () => {
    // State to track which FAQ items are expanded
    const [expandedFaqs, setExpandedFaqs] = useState({});    // Toggle FAQ expansion
    const toggleFaq = (id) => {
        setExpandedFaqs(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };    // Handle direct navigation via URL hash
    useEffect(() => {
        // Check if URL has a hash
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            if (hash) {
                // Find if the hash corresponds to a FAQ ID
                const allQuestions = faqCategories.flatMap(cat => cat.questions);
                const matchingFaq = allQuestions.find(q => q.id === hash);

                if (matchingFaq) {
                    // Expand the matching FAQ
                    setExpandedFaqs(prev => ({
                        ...prev,
                        [hash]: true
                    }));

                    // Scroll to the element (with a slight delay to ensure DOM is updated)
                    setTimeout(() => {
                        const element = document.getElementById(hash);
                        if (element) {
                            // Scroll to the FAQ item
                            element.scrollIntoView({ behavior: 'smooth', block: 'center' });

                            // Add a highlight animation for better visibility
                            element.classList.add('highlight-faq');
                            setTimeout(() => {
                                element.classList.remove('highlight-faq');
                            }, 2000);
                        }
                    }, 300);
                }
            }
        };

        // Call on mount and listen for hash changes
        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    // FAQ categories with their questions
    const faqCategories = [
        {
            id: 'general',
            title: 'General Eye Care',
            questions: [{
                id: 'eye-exam-frequency',
                question: 'How often should I get my eyes examined?',
                answer: 'For adults with good eye health, we recommend a comprehensive eye examination every 1 years. If you\'re over 60, have a family history of eye diseases, wear corrective lenses, or have conditions like diabetes or high blood pressure, 6 months once eye check-ups are essential. Children should have their first eye exam at 6 months, again at age 3, before starting school, and then annually throughout their school years.'
            }, {
                id: 'eye-strain-prevention',
                question: 'How can I prevent eye strain from digital screens?',
                answer: 'To reduce digital eye strain, follow the 20-20-20 rule: every 20 minutes, look at something 20 feet away for at least 20 seconds. Ensure proper lighting, adjust your screen position (slightly below eye level, at arm\'s length), increase text size if needed, and use blue light filters. Keep your eyes lubricated with artificial tears if necessary, and consider computer glasses. If you continue experiencing eye strain despite these measures, schedule an appointment with an eye doctor for a comprehensive evaluation.'
            }, {
                id: 'protect-eyes-sun',
                question: 'How do I protect my eyes from the sun?',
                answer: 'Protect your eyes from harmful UV rays by wearing sunglasses that block 99-100% of UVA and UVB radiation. Choose wrap-around styles for extra protection from side exposure. Wear a wide-brimmed hat outdoors for additional coverage. Remember that UV damage is cumulative and can contribute to cataracts, macular degeneration, and other eye conditions. Children need even more protection, so ensure they wear sunglasses outdoors. Ask your eye doctor about the best UV protection options for your specific lifestyle at your next check-up.'
            }, {
                id: 'food-for-eye-health',
                question: 'What foods are good for eye health?',
                answer: 'For optimal eye health, include foods rich in antioxidants, vitamins, and minerals in your diet. Dark, leafy greens like spinach and kale contain lutein and zeaxanthin, which protect against macular degeneration. Omega-3 fatty acids found in fish like salmon and tuna support retinal health. Orange vegetables and fruits (carrots, sweet potatoes, oranges) provide beta-carotene and vitamin C. Nuts, seeds, and eggs offer vitamin E and zinc. A balanced diet is a key component of maintaining long-term eye health and preventing age-related vision problems.'
            }
            ]
        },
        {
            id: 'conditions',
            title: 'Common Eye Conditions',
            questions: [{
                id: 'cataract-symptoms',
                question: 'What are the early symptoms of cataracts?',
                answer: 'Early cataract symptoms include cloudy or blurry vision, faded colors, glare sensitivity (especially at night with oncoming headlights), halos around lights, frequent prescription changes, and double vision in one eye. You might also experience improved near vision temporarily ("second sight") before it worsens. Many people don\'t notice early symptoms as cataracts develop gradually. Regular comprehensive eye exams can detect cataracts before they significantly impact your vision. Mithran Eye Clinic offers advanced cataract evaluation and surgical options when needed.'
            }, {
                id: 'glaucoma-risk',
                question: 'Am I at risk for glaucoma?',
                answer: 'Glaucoma risk factors include age over 60, family history of glaucoma, African, Asian or Hispanic descent, high eye pressure, extreme nearsightedness or farsightedness, previous eye injuries, prolonged corticosteroid use, and conditions like diabetes, heart disease, or hypertension. However, glaucoma can develop without any risk factors. Since early-stage glaucoma typically has no symptoms, regular comprehensive eye exams are crucial for early detection and preventing permanent vision loss.'
            }, {
                id: 'diabetic-retinopathy',
                question: 'How does diabetes affect my eyes?',
                answer: 'Diabetes can damage the small blood vessels in your retina, causing diabetic retinopathy. Initially, you may not notice symptoms, but as it progresses, you might experience floating spots, blurred vision, fluctuating vision, impaired color perception, dark areas in your vision, or vision loss. All people with diabetes (both Type 1 and Type 2) are at risk. Control your blood sugar, blood pressure, and cholesterol, and have yearly dilated eye exams. Early detection through regular screenings can prevent up to 95% of diabetes-related vision loss.'
            }, {
                id: 'dry-eye-treatment',
                question: 'What are the treatments for dry eyes?',
                answer: 'Dry eye treatments include over-the-counter artificial tears, prescription medications to increase tear production or reduce inflammation (like Restasis or Xiidra), punctal plugs to retain tears, meibomian gland expression, warm compresses, lifestyle changes (like using a humidifier), and nutritional supplements with omega-3 fatty acids. For severe cases, specialized treatments like intense pulsed light therapy might be recommended. The best treatment approach depends on the underlying cause and severity of your symptoms.'
            }, {
                id: 'pink-eye',
                question: 'How contagious is pink eye and how is it treated?',
                answer: 'Pink eye (conjunctivitis) contagiousness depends on its cause. Viral conjunctivitis is highly contagious and spreads through respiratory droplets or direct contact with eye secretions. Bacterial conjunctivitis is also contagious until after 24 hours of antibiotic treatment. Allergic conjunctivitis is not contagious. Treatment varies: viral cases typically resolve in 1-2 weeks with symptomatic care, bacterial pink eye requires antibiotic eye drops, and allergic pink eye is managed with antihistamine drops and allergen avoidance. For proper diagnosis, it\'s important to have your condition evaluated by an eye care professional.'
            }
            ]
        },
        {
            id: 'treatments',
            title: 'Eye Treatments and Surgeries',
            questions: [{
                id: 'cataract-surgery',
                question: 'What happens during cataract surgery?',
                answer: 'During modern cataract surgery, the ophthalmologist makes a tiny incision in your eye, uses ultrasound (phacoemulsification) to break up and remove the cloudy lens, and then implants a clear artificial intraocular lens (IOL). The procedure typically takes 15-30 minutes per eye, is performed under local anesthesia, and most patients go home the same day. Recovery is relatively quick, with most patients noticing improved vision within days. Various IOL options are available, including standard monofocal lenses and premium multifocal or toric lenses for astigmatism correction.'
            }, {
                id: 'lasik-candidates',
                question: 'Am I a good candidate for LASIK surgery?',
                answer: 'Good LASIK candidates are typically 18+ years old with stable vision prescription for at least a year, adequate corneal thickness, no significant dry eye issues, and good overall eye health. You should be free of certain conditions like keratoconus, severe glaucoma, or cataracts. Pregnant or nursing women should wait. Conditions like diabetes need to be well-controlled. A thorough LASIK evaluation by a qualified ophthalmologist can determine if LASIK is right for you or if alternative vision correction options would be more suitable for your specific needs.'
            }, {
                id: 'glasses-contacts',
                question: 'Should I choose glasses or contact lenses?',
                answer: 'The choice between glasses and contacts depends on your lifestyle, comfort preferences, eye health, and vision needs. Glasses are low-maintenance, don\'t touch your eyes (reducing infection risk), and can be stylish accessories. Contacts provide unobstructed peripheral vision, don\'t fog up, and are better for active lifestyles. Many patients opt for both—contacts for certain activities and glasses for everyday wear. During your comprehensive eye examination, your eye doctor can discuss the pros and cons of each option based on your specific situation and help you make the best choice.'
            }, {
                id: 'myopia-control',
                question: 'How can my child\'s nearsightedness (myopia) progression be slowed?',
                answer: 'Myopia progression in children can be managed through various approaches: specialized contact lenses (orthokeratology or multifocal lenses), atropine eye drops (low-concentration), increased outdoor time (at least 90 minutes daily), proper reading habits (maintaining good distance, taking breaks), and regular comprehensive eye exams to monitor changes. Early intervention is key—children with myopia should be evaluated promptly to determine the most effective approach for their specific case. Mithran Eye Clinic offers specialized pediatric eye care services including myopia management.'
            }
            ]
        },
        {
            id: 'clinic',
            title: 'About Mithran Eye Clinic',
            questions: [
                {
                    id: 'appointment',
                    question: 'How do I schedule an appointment at Mithran Eye Clinic?',
                    answer: 'To schedule an appointment at Mithran Eye Clinic, you can call us at +91 8682088136, send a WhatsApp message to the same number, or email Dr. Asha at ashasomasundaralingam@gmail.com. We offer flexible scheduling options and try to accommodate urgent eye care needs promptly. Our clinic in Karavilai, Nagercoil, is open Monday through Saturday from 9:00 AM to 8:30 PM and by appointment on Sundays. We serve patients from across Kanyakumari District, including Marthandam, Thuckalay, Colachel, and surrounding areas.'
                },
                {
                    id: 'services',
                    question: 'What services does Mithran Eye Clinic offer?',
                    answer: 'Mithran Eye Clinic offers comprehensive eye care services including complete eye examinations, glaucoma management, diabetic retinopathy care, dry eye treatment, prescription glasses & contact lens fittings, management of pink eye and other infections, and genetic eye disorder consultations. Our state-of-the-art facility in Karavilai, Nagercoil is equipped with the latest diagnostic technology to provide precise assessments and effective treatments for all eye conditions.'
                },
                {
                    id: 'emergency',
                    question: 'What should I do in case of an eye emergency?',
                    answer: 'For eye emergencies such as sudden vision loss, eye injury, chemical exposure, or severe eye pain, contact Mithran Eye Clinic immediately at +91 8682088136. During business hours, we prioritize emergency cases. For severe trauma cases, proceed to the nearest emergency room. Never ignore eye emergencies—prompt treatment can prevent permanent vision damage. Eye emergencies require immediate professional attention, as delays can result in permanent vision loss.'
                },
                {
                    id: 'clinic-location',
                    question: 'Where is Mithran Eye Clinic located?',
                    answer: 'Mithran Eye Clinic is conveniently located at 18/25 A-2, Rajakamanagalam Road, Karavilai, Kanyakumari District, Tamil Nadu, India - 629201. We are easily accessible from Nagercoil, Marthandam, Thuckalay, Colachel, Kulasekharam, Kaliyakkavilai, Eraniel, and all surrounding areas in Kanyakumari District. Our clinic offers ample parking and is wheelchair accessible. For directions, you can find us on Google Maps or call us at +91 8682088136 for guidance. We serve patients from across South Tamil Nadu seeking quality eye care.'
                }
            ]
        }
    ]; return (
        <section id="top" className="relative">
            <div className="bg-cover bg-no-repeat w-full h-full absolute inset-0" style={{ backgroundImage: `url(${bgImage})` }} />
            <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 py-10">
                {/* Page Header */}
                <div className="text-center mb-8 pt-16">
                    <p className="text-primary-900 font-semibold text-lg mb-2">-Answers to Your Eye Care Questions</p>
                    <h1 className="h1 font-poppins text-3xl lg:text-5xl font-bold text-grayish-900 mb-4">
                        Frequently Asked <span className="text-primary-900">Questions</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-gray-600 lg:text-lg">
                        Get answers to common questions about eye health, treatment options, and our services at Mithran Eye Clinic.
                        Can't find what you're looking for? Contact Dr. Asha Priyadarshini directly.
                    </p>
                </div>

                {/* Quick Contact Box */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8 flex flex-col lg:flex-row items-center justify-between">
                    <div className="mb-4 lg:mb-0 text-center lg:text-left">
                        <h3 className="text-primary-900 font-semibold text-xl mb-2">Have a Question Not Answered Here?</h3>
                        <p className="text-gray-700">Dr. Asha and our team are happy to provide personalized guidance for your eye care needs.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a
                        href="tel:+918682088136"
                        className="flex items-center bg-primary-900 text-white px-4 py-2 rounded-md hover:bg-primary-800 transition-all duration-300"
                    >
                        <FontAwesomeIcon icon={faPhone} className="mr-2" />
                        <span>Call Us</span>
                    </a>
                        <a
                            href="https://wa.me/918682088136"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-all duration-300"
                        >
                            <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                            <span>WhatsApp</span>
                        </a>
                        <a
                            href="https://maps.app.goo.gl/1uL6eV8vRjvAXbX28"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center bg-primary-900 text-white px-4 py-2 rounded-md hover:bg-primary-800 transition-all duration-300"
                        >
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                            <span>Find Us</span>
                        </a>
                    </div>
                </div>                {/* FAQ Categories */}                <div className="space-y-10">
                    {faqCategories.map(category => (
                        <div key={category.id} className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-bold text-primary-900 mb-6 border-b pb-3">{category.title}</h2>
                            <div className="space-y-4">                                {category.questions.map(faq => (<div id={faq.id} key={faq.id} className="border border-gray-200 rounded-lg">
                                <button
                                    className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                                    onClick={() => toggleFaq(faq.id)}
                                >
                                    <h3 className="text-lg font-medium text-grayish-900">
                                        <a href={`#${faq.id}`} onClick={(e) => e.stopPropagation()} className="hover:text-primary-700 focus:outline-none">
                                            {faq.question}
                                        </a>
                                    </h3>
                                    <FontAwesomeIcon
                                        icon={expandedFaqs[faq.id] ? faChevronUp : faChevronDown}
                                        className={`transition-transform duration-200 text-primary-700 ${expandedFaqs[faq.id] ? 'transform rotate-180' : ''}`}
                                    />
                                </button>{expandedFaqs[faq.id] && (
                                    <div
                                        id={`content-${faq.id}`}
                                        className="p-4 pt-0 border-t"
                                        itemProp="answerExcerpt"
                                    >
                                        <p className="text-gray-600 text-base">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                            ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Clinic Information Summary */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-center mb-8">
                        Visit <span className="text-primary-900">Mithran Eye Clinic</span> Today
                    </h2>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <h3 className="font-semibold text-xl mb-3 text-primary-900">Location</h3>
                                <p className="text-gray-700">
                                    18/25 A-2, Rajakamanagalam Road, Karavilai, Kanyakumari District, Tamil Nadu - 629201
                                </p>
                                <a
                                    href="https://maps.app.goo.gl/1uL6eV8vRjvAXbX28"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary-800 hover:underline mt-2 inline-block"
                                >
                                    View on Google Maps
                                </a>
                            </div>

                            <div className="text-center">
                                <h3 className="font-semibold text-xl mb-3 text-primary-900">Hours</h3>
                                <p className="text-gray-700 mb-1">Monday - Friday: 9:00 AM - 8:30 PM</p>
                                <p className="text-gray-700">Sunday: Appointment Only</p>
                            </div>

                            <div className="text-center">
                                <h3 className="font-semibold text-xl mb-3 text-primary-900">Contact</h3>
                                <p className="text-gray-700 mb-1">
                                    <a href="tel:+918682088136" className="hover:text-primary-900">+91 8682088136</a>
                                </p>
                                <p className="text-gray-700 mb-1">
                                    <a href="mailto:ashasomasundaralingam@gmail.com" className="hover:text-primary-900">ashasomasundaralingam@gmail.com</a>
                                </p>
                                <a
                                    href="https://www.instagram.com/mithraneyecare/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary-800 hover:underline"
                                >
                                    @mithraneyecare
                                </a>
                            </div>
                        </div>
                    </div>
                </div>                {/* Back to top button */}
                <div className="flex justify-center mt-10">
                    <a
                    href="#top"
                    className="bg-primary-900 hover:bg-primary-800 text-white px-5 py-2 rounded-full transition-all duration-300 flex items-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Back to Top
                </a>
                </div>

                {/* SEO-optimized hidden content */}
                <div style={{ display: 'none' }}>
                    <div itemScope itemType="http://schema.org/FAQPage">
                        {faqCategories.flatMap(category =>
                            category.questions.map(faq => (
                                <div key={faq.id} itemScope itemType="http://schema.org/Question" itemProp="mainEntity">
                                    <meta itemProp="name" content={faq.question} />
                                    <div itemScope itemType="http://schema.org/Answer" itemProp="acceptedAnswer">
                                        <meta itemProp="text" content={faq.answer} />
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Additional SEO metadata */}
                    <div itemProp="provider" itemScope itemType="http://schema.org/MedicalClinic">
                        <meta itemProp="name" content="Mithran Eye Clinic" />
                        <meta itemProp="description" content="Premier eye care center in Nagercoil offering comprehensive eye examinations, cataract surgery, glaucoma treatment and specialized eye care services for patients in Kanyakumari District." />
                        <meta itemProp="priceRange" content="₹₹-₹₹₹" />
                        <meta itemProp="telephone" content="+918682088136" />
                        <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                            <meta itemProp="streetAddress" content="18/25 A-2, Rajakamanagalam Road, Karavilai" />
                            <meta itemProp="addressLocality" content="Nagercoil" />
                            <meta itemProp="addressRegion" content="Tamil Nadu" />
                            <meta itemProp="postalCode" content="629201" />
                            <meta itemProp="addressCountry" content="India" />
                        </div>
                    </div>

                    {/* More SEO tags */}
                    <meta name="description" content="Find answers to common eye care questions. Mithran Eye Clinic in Nagercoil provides expert information about cataracts, glaucoma, LASIK, eye health tips and more." />
                    <meta name="keywords" content="eye care FAQ, eye clinic questions, cataract symptoms, glaucoma risks, LASIK eligibility, dry eye treatment, Nagercoil eye doctor, Kanyakumari eye hospital, eye health Tamil Nadu, Dr. Asha Priyadarshini" />

                    {/* Open Graph tags */}
                    <meta property="og:title" content="Frequently Asked Questions - Mithran Eye Clinic Nagercoil" />
                    <meta property="og:description" content="Get expert answers about eye conditions, treatments, and general eye health from Dr. Asha Priyadarshini at Mithran Eye Clinic in Nagercoil, Tamil Nadu." />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://www.mithraneyeclinic.com/faq" />
                    <meta property="og:image" content="https://www.mithraneyeclinic.com/logo.png" />
                    <meta property="og:site_name" content="Mithran Eye Clinic" />
                    <meta property="og:locale" content="en_IN" />

                    {/* Twitter Card tags */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Eye Care FAQ - Mithran Eye Clinic Nagercoil" />
                    <meta name="twitter:description" content="Expert answers about cataracts, glaucoma, LASIK, pediatric eye care and more from the leading eye hospital in Kanyakumari District." />
                    <meta name="twitter:image" content="https://www.mithraneyeclinic.com/logo.png" />
                </div>

            </div>
        </section>
    );
};

export default FaqContainer;
