import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { HotDishes } from '../HotDishes/HotDishes'
import { ColdDishes } from '../ColdDishes/ColdDishes'
import { Grill } from '../Grill/Grill'



import  "./Main.css"
import { Soup } from '../Soup/Soup'
import { Appertizer } from '../Appertizer/Appertizer'
import { Desert } from '../Desert/Desert'

export const Main = () => {
  return (
    <div className='ps-3 row '>
      <div className='col-11'>
    <div className="d-flex justify-content-between">
        <div>
          <p className='h2'>Jaegar Resto</p>
          <div>Tuesday, 2 Feb 2021</div>
        </div>
        <div>
          <input  type="text" className="inp " placeholder="Search for food, coffe, etc..." />
        </div>
    </div>

    <div >

        <ul className='link-box'>
          <li>
          <Link  to='/main' className='main-link'>Hot Dishes</Link>
          </li>
          <li>
          <Link to='cold' className='main-link'>Cold Dishes</Link>
          </li>
          <li>
          <Link to='soup' className='main-link'>Soup</Link>
          </li>
          <li>
          <Link to='grill' className='main-link'>Grill</Link>
          </li>
          <li>
          <Link to='appertizer' className='main-link'>Appertizer</Link>
          </li>
          <li>
          <Link to='desert' className='main-link'>Desert</Link>
          </li>


        </ul>
        <hr className='hr'/>
        <div className='d-flex justify-content-between'>
        <h5>Choose Dishes</h5>
        <select className="sel  " aria-label="Default select example">
          <option  defaultValue>Dine In</option>
          <option value="1">To Go</option>
          <option value="2">Delivery</option>
        </select>
      </div>
          <Routes>
            <Route index  element={<HotDishes/>}/>
            <Route path='cold' element={<ColdDishes/>}/>
            <Route path='soup' element={<Soup/>}/>
            <Route path='grill' element={<Grill/>}/>
            <Route path='appertizer' element={<Appertizer/>}/>
            <Route path='desert' element={<Desert/>}/>
          </Routes>
        </div>
        </div>

      
      </div>
  )
}
