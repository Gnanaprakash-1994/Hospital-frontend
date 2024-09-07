import Header from "./components/Header"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Patients from "./components/Patients"
import Doctor from "./components/Doctor"
import UpdateDoctor from "./components/UpdateDoctor"
import Appointment from "./components/Appointment"
import UpdateAppointment from "./components/UpdateAppointment"
import Home from "./components/Home"
import UpdatePatient from "./components/UpdatePatient"

function App() {
  
  return (
        
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/appointment" element={<Appointment/>}></Route>
        <Route path="/patient" element={<Patients/>}></Route>
        <Route path="/doctor" element={<Doctor/>}></Route>
        <Route path="/doctor/update/:id" element={<UpdateDoctor/>}></Route>
        <Route path="/appointment/update/:id" element={<UpdateAppointment/>}></Route>
        <Route path="/patient/update/:id" element={<UpdatePatient/>}></Route>
    </Routes>
</BrowserRouter>
  )
}

export default App
