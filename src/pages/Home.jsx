import React,{useContext,useEffect,useState} from 'react'
// import {userContext} from '../../context/userContext'
import Navbar from '../components/Header'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import ActivityTypes from '../components/ActivityTypes'
import Footer from '../components/Footer'
import UserActivities from '../components/UserActivities'
import axios from '../axios/api'
import {useNavigate, Link} from 'react-router-dom'
import { toast } from "react-toastify";
import inceptor from '../axios/inceptor'


export default function Home() {

  const navigate = useNavigate();
  const [ran,setRan] = useState(false);
  
  



  {/* only run setup once */}
  if(!ran){
     inceptor(navigate);
     setRan(true);
  }

  return (
    <>
    <Navbar/>
    <Hero mainHeading="Maintain Your Fitness With Daily Activities" subHeading="devise time for your body & mind!" button="Let's Start" bannerImg="/assets/images/home.png" style="h-auto md:h-auto lg:h-[620px] bg-[#F6DDFF61] lg:px-10 lg:pt-10 md:mt-[50px] md:px-[90px] px-4 pt-20 items-center flex justify-center flex-col-reverse lg:flex-row md:flex-row md:gap-28 gap-10`"/>
    <HowItWorks/>
    <ActivityTypes/>
    <UserActivities/>
    <Footer/>
    </>
  )
}
