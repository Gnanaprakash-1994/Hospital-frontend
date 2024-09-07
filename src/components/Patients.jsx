import React,{useState} from 'react'
import axios from 'axios'
import PatientCard from './PatientCard'

const apiUrl = import.meta.env.VITE_API_URL

const Patients = () => {

    // Below usestate is used to store the data enterd in the form
    const [patient,setPatient] = useState({
        pname: '',
        mobile: '',
        gender: '',
        age: '',
        address: '',

    })
    
    // Below Function is used to handle the input entered in the input box
    const handleInput = (e) => {
        const {name,value} = e.target
        setPatient((prePatient) =>({
            ...prePatient,[name]: value
        }))
    }

    // Below Function is used to create a new patient data in the DB - POST Method
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${apiUrl}/patient/newpatient`,patient)
            .then(result => {
                console.log(result)
                alert('Patient data have been Added')
            })
            .catch(err => console.log(err))
            setPatient({pname:'',mobile:'',gender:'',age:'',address:''})
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
                Add New Patient 
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
                    placeholder="Patients's Name"
                    name="pname"
                    value={patient.pname}
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
                    value={patient.mobile}
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
                    placeholder="Gender"
                    name="gender"
                    value={patient.gender}
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
                    placeholder="Age"
                    name="age"
                    value={patient.age}
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
                    placeholder="Address"
                    name="address"
                    value={patient.address}
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
                    Add Patient
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
      <div className="bg-white rounded-lg shadow sm:w-fit sm:mx-auto sm:overflow-y-auto">
        <PatientCard/>
      </div>
    </section>
  )
}

export default Patients