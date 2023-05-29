import React from 'react'
import Navbar from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Edit from '../components/Edit/EditActivity'

export default function AddEdit() {

  return (
    <>
    <Navbar/>
    <Hero mainHeading="	Customize Activity Card" subHeading="update, maintain & be healthy" button="null" bannerImg="/assets/images/ActivityImg.png" style=" h-auto md:h-auto lg:h-[400px] bg-[#F6DDFF61] lg:px-10  md:mt-[50px] md:px-[90px] px-4 pt-20 items-center flex justify-center flex-col-reverse lg:flex-row md:flex-row md:gap-10 gap-10"/>
    <Edit/>
    <Footer/>
    </>
  )
}
