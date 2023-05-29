 import React,{useState} from 'react'
  import {Link,useNavigate} from 'react-router-dom'
 import { toast } from 'react-toastify';
 import { HashLink } from 'react-router-hash-link';
 import { FaBars, FaTimes} from 'react-icons/fa';
//  import { useSelector } from 'react-redux'
// import { setIsLoggedIn } from '../redux/slice';

export default function Header() {
  // const isLoggedIn = useSelector((state) => state.isLoggedIn)
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen); 
  let [open,setOpen]=useState(false);
  const name = localStorage.getItem("userName");
  const navigate = useNavigate();
  

  //logout function
  const logout = () =>{
      localStorage.clear();
      // setIsLoggedIn();
      navigate("/")
      toast.success("User Logged-out Successfully!")
  }

return (
  <div className='shadow-md w-full fixed top-0 left-0'>
    <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
    <Link to="/home"  className="flex items-center">
       <img src="/assets/images/logo.png" className="mr-3 md:ml-10 h-[57px] w-[55px]" alt="Fitrack Logo"/>
       <span className="self-center md:text-4xl text-4xl font-bold   pt-2 brandName">FITRACK</span>
   </Link>
    </div>
    
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
    <button >{open ? <FaTimes  style={{color: "#545454",fontSize: '25px',float:"left"}} /> : <FaBars  style={{color: "#545454",fontSize: '25px',float:"left"}} /> }</button> 
    </div>

     <ul className={`flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-6 md:mt-2 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12 ':'top-[-430px]'}`}> 
       <li>
         <Link to="/home" className="block py-2 pl-3 pr-4  rounded md:bg-transparent  md:p-0 md:dark:text-[#BF6FFF]" aria-current="page">Home</Link>
       </li>
       <li>
         <HashLink to="/home#activities" smooth className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#BF6FFF] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"> Activities</HashLink>
       </li>
       <li>
       <button  type="button"  onClick={toggleDropdown}><img src='/assets/images/userIcon.png' class="w-[45%] mt-[10px] "/></button>
  {isOpen && (
<div class=" absolute bg-white text-base z-1000 list-none divide-y divide-gray-100 rounded shadow ">
    <div class="px-4 py-3">
    <span class="block text-sm">@{name}</span>
    </div>
    <ul class="py-1" aria-labelledby="dropdown">
    <li>
        <button type="button" onClick={()=>logout()} class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Sign Out</button>
    </li>

    </ul></div>)}
      </li>
      </ul>
  </div>
  </div>
)
}

