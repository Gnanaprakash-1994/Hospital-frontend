import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom';


const apiUrl = import.meta.env.VITE_API_URL

const UpdateAppointment = () => {

    //useParams is used to fetch the id of the Doctor Data from DB
    const {id} = useParams()

    // Initialization of navigate
    const navigate = useNavigate()

    // Below usestate is used to store the data enterd in the form
    const [app,setApp] = useState({
        pname: '',
        dname: '',
        speciality: '',
        date: '',

    })
    
    // Below Function is used to handle the input entered in the input box
    const handleInput = (e) => {
        const {name,value} = e.target
        setApp((preApp) =>({
            ...preApp,[name]: value
        }))
    }

    //Below useEffect Hook is used to fetch the data from the DB to Frontend
    useEffect(()=>{
        axios.get(`${apiUrl}/appointment/`+id)
            .then(result => setApp(result.data))
            .catch(err => console.log(err))
    },[])

    // Below Function is used to create a new doctor data in the DB - PUT Method
    const handleUpdate = (e) => {
        e.preventDefault()
        axios.patch(`${apiUrl}/appointment/update/${id}`,app)
            .then(result => {
                console.log(result.data)
                navigate('/appointment')
            })
            .catch(err => console.log(err))
    }

  return (
    <section className="mt-16 flex justify-between">
      <form onSubmit={handleUpdate} className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
        <div className="px-4 py-8 sm:px-10">
          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm leading-5">
              <span className="text-xl px-2 text-gray-500 bg-white">
                Update Appointment Details
              </span>
            </div>
          </div>
          <div className="mt-6">
            <div className="w-full space-y-6">
              <div className="w-full">
                <div className=" relative ">
                  <input
                    type="text"
                    className="doctor"
                    placeholder="Patient's Name"
                    name="pname"
                    value={app.pname}
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className=" relative ">
                  <input
                    type="text"
                    className="doctor"
                    placeholder="Doctor's Name"
                    name="dname"
                    value={app.dname}
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className=" relative ">
                  <input
                    type="text"
                    id="search-form-name"
                    className="doctor"
                    placeholder="Speciality"
                    name='speciality'
                    value={app.speciality}
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className=" relative ">
                  <input
                    type="datetime-local"
                    className="doctor"
                    placeholder="Date"
                    name="date"
                    value={app.date}
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
                    Update
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
    </section>
  );
};


export default UpdateAppointment