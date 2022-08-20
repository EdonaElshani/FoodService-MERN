import React from 'react'
import Accordion from './Accordion'
import DisplayAll from './DisplayAll'
import Navbar from './Navbar'
import Testimonials from './Testimonials'

const HomePage = () => {
  return (
    <div>
      <DisplayAll/>
      <Testimonials/>
      <Accordion/>
    </div>
    )

};


export default HomePage;
