import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <section>
        <h1 className='font-mono font-semibold mt-6  text-3xl text-center bg-amber-200 md:block sm:mx-auto'>VGP Hospital Management</h1>
        <ul className='grid items-right md:flex md:justify-around mt-4 mx-auto'>
            <li className='menu'><Link to={'/'} >Home</Link></li>
            <li className='menu'><Link to={'/appointment'} >Appointment</Link></li>
            <li className='menu'><Link to={'/doctor'}>Doctors</Link></li>
            <li className='menu'><Link to={'/patient'}>Patients</Link></li>
            <li className='menu'><Link to={'/setting'}>Settings</Link></li>
            <li className='menu'><Link to={'/contact'}>Contacts</Link></li>
            <li className='menu'><Link to={'/help'}>Help</Link></li>
        </ul>
    </section>
  )
}

export default Header