import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'

const apiUrl = import.meta.env.VITE_API_URL

const AppointmentCard = () => {

    // useState hook is used to store the data fetched from DB to Frontend
    const [data,setData] = useState([])

    //useNavigate Initialization is used to create navigate element
    const navigate = useNavigate()

    //useEffect hook is used to display the Appointment Details from DB
    useEffect(()=>{
        axios.get(`${apiUrl}/appointment/`)
             .then(result => setData(result.data))
             .catch(err => console.log(err))
    },[])

    //Below function is used to Delete the Appointment Entry from DB
    const handleDelete = (id) => {
        const confirm = window.confirm('Need to Cancel Appointment ?')
        if(confirm){
                axios.delete(`${apiUrl}/appointment/${id}`)
                .then(result =>{
                    console.log(result)
                    setData(data.filter(item =>item._id!==id))
                    alert('Appointment Cancelled')
                    navigate('/appointment')
                }) .catch(err=>console.log(err))
            }
    }
  return (
    <div> 
        <div className="container max-w-3xl px-4 mx-auto sm:px-8">
            <div className="py-8">
                <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                    <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                        <table className="min-w-full leading-normal">
                            <caption className='caption-top uppercase text-center text-lg mt-4 mb-4 bg-sky-300'>Appointment Details</caption>
                            <thead>
                                <tr>
                                    <th scope='col' className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Patient's Name
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Doctor's Name
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Speciality
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Appointment Date
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Edit
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {data.map((item)=>{
                                return<tr key={item._id}>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        <div className="flex items-center">
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {item.pname}
                                                </p>
                                                
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {item.dname}
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {item.speciality}
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                            {item.date}
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        <Link to={`/appointment/update/${item._id}`} className="text-indigo-600 hover:text-indigo-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>
                                        </Link>
                                    </td>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        <button onClick={()=> handleDelete(item._id)} className="text-indigo-600 hover:text-indigo-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                                })}
                            </tbody>
                        </table>
                        {/*<PageCard/>*/}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppointmentCard