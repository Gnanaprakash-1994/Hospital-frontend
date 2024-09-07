import React, { useState } from "react";
import axios from 'axios'
import AppointmentCard from "./AppointmentCard";

const apiUrl = import.meta.env.VITE_API_URL

const Appointment = () => {

    //Below useState Hook is used to store the input data for appointment
    const [app,setApp] = useState({
        pname:'',
        dname: '',
        speciality: '',
        date: ''
    })

    //Below function is used to handle the input change:
    const handleInputApp = (e) => {
        const {name,value} = e.target
        setApp((preApp) =>({
            ...preApp,[name]: value
        }))
    }

    //Below function is used to store the entered input value in DB.
    const handleAppointment = (e) => {
        e.preventDefault()
        axios.post(`${apiUrl}/appointment/newappointment`,app)
            .then(result =>{
                console.log(result.data)
                alert("Appointment has been Created")
            })
            .catch(err => console.log(err))
        setApp({pname:'',dname:'',speciality:'',date:''})
    }
  return (
    <section className="mt-16 flex justify-between">
            <form onSubmit={handleAppointment} className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
                <div className="px-4 py-8 sm:px-10">
                <div className="relative mt-6">
                    <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm leading-5">
                    <span className="text-xl px-2 text-gray-500 bg-white">New Appointment</span>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="w-full space-y-6">
                    <div className="w-full">
                        <div className=" relative ">
                        <input
                            type="text"
                            required
                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="Patient's Name"
                            name="pname"
                            value={app.pname}
                            onChange={handleInputApp}
                        />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className=" relative ">
                        <input
                            type="text"
                            required
                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="Doctor's Name"
                            name="dname"
                            value={app.dname}
                            onChange={handleInputApp}
                        />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className=" relative ">
                        <input
                            type="text"
                            required
                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="Speciality"
                            name="speciality"
                            value={app.speciality}
                            onChange={handleInputApp}
                        />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className=" relative ">
                        <input
                            type="datetime-local"
                            required
                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="Date"
                            name="date"
                            value={app.date}
                            onChange={handleInputApp}
                        />
                        </div>
                    </div>
                    
                    <div>
                        <span className="block w-full rounded-md shadow-sm">
                        <button
                            type="submit"
                            className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                            Book Appointment
                        </button>
                        </span>
                    </div>
                    </div>
                </div>
                </div>
                <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
                <p className="text-sm font-medium leading-5 text-gray-500">
                    Check all Entered Details are correct
                </p>
                </div>
            </form>
        <div className="bg-white rounded-lg shadow sm:w-fit sm:mx-auto sm:overflow-y-auto">
            <AppointmentCard/>
        </div>
    </section>
  );
};

export default Appointment;
