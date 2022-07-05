import React from 'react'
import ContactUs from '../ContactUs/ContactUs'
import Footer from '../Footer/Footer'
import CategoryNav from '../Navigation/CategoryNav/CategoryNav'
import TopNav from '../Navigation/TopNav/TopNav'

function ContactUsPage() {
  return (
    <div>
        <TopNav/>
        <CategoryNav/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default ContactUsPage