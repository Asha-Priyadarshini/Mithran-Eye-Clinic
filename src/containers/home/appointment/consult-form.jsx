import React, {useState} from 'react';

import './consult.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { ButtonPrimary } from '../../../components/button/button';
import { Input } from '../../../components/common/input';

const ConsultForm = () => {
  const [state, setState] = useState({
    data: {
      fullName: '',
      email: '',
      phone: '',
      date: ''
    }
  });

  const handleChange = (e) => {
    const data = {...state.data}
    data[e.target.name] = e.target.value
    setState({data})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send email to ashasomasundaralingam@gmail.com with form details
    const { fullName, email, phone, date } = state.data;
    const subject = `New Appointment Request from ${fullName}`;
    const body = `
      Full Name: ${fullName}
      Email Address: ${email}
      Phone: ${phone}
      Requested Date: ${date}
    `;
    
    window.location.href = `mailto:ashasomasundaralingam@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  
  return (
    <div className="transform lg:-translate-y-4 xl:-translate-y-12 z-30">
      <div className="bg-opacity-90 bg-primary-600 rounded-lg px-5 py-6 shadow-new border sm:border-0 mt-">
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-12 gap-y-4">
            {/* Full Name */}
            <div className="lg:col-span-3">
              <div className="flex items-center space-x-5">
                <button type="button" className="bg-primary-700 px-2 py-1 rounded-md">
                  <FontAwesomeIcon icon={ faUser } className=" text-primary-900" />
                </button>
                <p className="text-gray-500 font-semibold">Full Name</p>
              </div>
              <Input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={ state.data.fullName }
                onChange={handleChange}
                className="border-0 bg-transparent focus:outline-none outline-none appearance-none pt-7 ml-5 cursor-pointer" />
            </div>
            {/* Email Address */ }
            <div className="lg:col-span-3">
              <div className="flex items-center space-x-5">
                <button type="button" className="bg-primary-700 px-2 py-1 rounded-md">
                  <FontAwesomeIcon icon={ faEnvelope } className=" text-primary-900" />
                </button>
                <p className="text-gray-500 font-semibold">Email Address</p>
              </div>
              <Input
                type="email"
                name="email"
                placeholder="yourname@example.com"
                value={ state.data.email }
                onChange={handleChange}
                className="border-0 bg-transparent focus:outline-none outline-none appearance-none pt-7 ml-5 cursor-pointer" />
            </div>
            {/* Phone */ }
            <div className="lg:col-span-3">
              <div className="flex items-center space-x-5">
                <button type="button" className="bg-primary-700 px-2 py-1 rounded-md">
                  <FontAwesomeIcon icon={ faPhone } className=" text-primary-900" />
                </button>
                <p className="text-gray-500 font-semibold">Phone</p>
              </div>
              <Input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                value={ state.data.phone }
                onChange={handleChange}
                className="border-0 bg-transparent focus:outline-none outline-none appearance-none pt-7 ml-5 cursor-pointer" />
            </div>
            {/* Date */ }
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-5">
                <button type="button" className="bg-primary-700 px-2 py-1 rounded-md">
                  <FontAwesomeIcon icon={ faCalendarAlt } className=" text-primary-900" />
                </button>
                <p className="text-gray-500 font-semibold">Date</p>
              </div>
              <Input
                type="date"
                name="date"
                placeholder="Select preferred date"
                value={ state.data.date }
                onChange={handleChange}
                className="border-0 bg-transparent focus:outline-none outline-none appearance-none pt-7 ml-5 cursor-pointer" />
            </div>
            {/* Submit */ }
            <div className="lg:col-span-1">
              <ButtonPrimary type="submit" padding="px-5 py-2 mt-4">
                Make an Appointment
              </ButtonPrimary>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultForm;