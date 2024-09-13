import React, { useEffect, useState } from "react";
import axios from 'axios'
import DoctorCard from "./DoctorCard";


const apiUrl = import.meta.env.VITE_API_URL

const Doctor = () => {

    // Below usestate is used to store the data enterd in the form
    const [doctor,setDoctor] = useState({
        dname: '',
        mobile: '',
        speciality: '',
        designation: '',

    })
    
    // Below Function is used to handle the input entered in the input box
    const handleInput = (e) => {
        const {name,value} = e.target
        setDoctor((preDoctor) =>({
            ...preDoctor,[name]: value
        }))
    }

    // Below Function is used to create a new doctor data in the DB - POST Method
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${apiUrl}/doctor/new`,doctor)
            .then(result => {
                console.log(result.data)
                alert('Doctor data have been Added')
            })
            .catch(err => console.log(err))
            setDoctor({dname:'',mobile:'',speciality:'',designation:''})
    }

  return (
    <section className="mt-16 flex justify-between">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
            <div className="px-4 py-8 sm:px-10">
            <div className="relative mt-6">
                <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm leading-5">
                <span className="text-xl px-2 text-gray-500 bg-white">
                    Add New Doctor
                </span>
                </div>
            </div>
            <div className="mt-6">
                <div className="w-full space-y-6">
                <div className="w-full">
                    <div className=" relative ">
                    <input
                        type="text"
                        required
                        className="doctor"
                        placeholder="Doctor's Name"
                        name="dname"
                        value={doctor.dname}
                        onChange={handleInput}
                    />
                    </div>
                </div>
                <div className="w-full">
                    <div className=" relative ">
                    <input
                        type="text"
                        required
                        className="doctor"
                        placeholder="Mobile No"
                        name="mobile"
                        value={doctor.mobile}
                        onChange={handleInput}
                    />
                    </div>
                </div>
                <div className="w-full">
                    <div className=" relative ">
                    <input
                        type="text"
                        required
                        className="doctor"
                        placeholder="Speciality"
                        name="speciality"
                        value={doctor.speciality}
                        onChange={handleInput}
                    />
                    </div>
                </div>
                <div className="w-full">
                    <div className=" relative ">
                    <input
                        type="text"
                        required
                        className="doctor"
                        placeholder="Designation"
                        name="designation"
                        value={doctor.designation}
                        onChange={handleInput}
                    />
                    </div>
                </div>
                <div>
                    <span className="block w-full rounded-md shadow-sm">
                    <button
                        type="submit"
                        className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                        Add Doctor
                    </button>
                    </span>
                </div>
                </div>
            </div>
            </div>
            {/*<div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
            <p className="text-xs leading-5 text-gray-500"></p>
            </div>*/}
        </form>
        <div className="bg-white rounded-lg shadow sm:w-fit sm:mx-auto sm:overflow-y-hidden">
            <DoctorCard/>
        </div>
    </section>
  );
};

export default Doctor;
