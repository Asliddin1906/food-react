import {Routes,Route} from 'react-router-dom'
import { NavBar } from "../../components/NavBar/NavBar"
import { Dashboard } from '../Dashboard/Dashboard'
import { Main } from "../Main/Main"
import { Settings } from '../Setting/Settings'
import "./Home.css"

export const Home = () => {
  
  return (
    <div className="container d-flex  ">

      <div className='nav col-1'>
        <NavBar />
      </div>
      
      <div className='  body overflow-auto '>
      <Routes>
        <Route index path='/main/*'  element={<Main/>}/>
        <Route path='/options' element={<>Options</>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/message' element={<>Message</>}/>
        <Route path='/notification' element={<>Notification</>}/>
        <Route path='/settings/*' element={<Settings/>}/>
        <Route path='/logout' element={<>Log Out</>}/>
      </Routes> 
      </div>
      
    </div>
  )
}
