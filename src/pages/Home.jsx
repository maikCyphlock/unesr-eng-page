import React from 'react'
import { Footer } from '../components/Footer'
import { Courses } from '../components/Courses'
import { LandingPage } from '../components/LandingPage'

function Home () {
  return (
    <>
      {/* <!-- HEADING  */}
      <LandingPage />
      {/* <!-- Courses --> */}
      <Courses />
      {/* <!-- FOOTER --> */}
      <Footer />
    </>
  )
}

export default Home
