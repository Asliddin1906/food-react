import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Appertizer } from '../Appertizer/Appertizer'
import { ColdDishes } from '../ColdDishes/ColdDishes'
import { Desert } from '../Desert/Desert'
import { Grill } from '../Grill/Grill'
import { HotDishes } from '../HotDishes/HotDishes'
import { Soup } from '../Soup/Soup'

export const Management = () => {
  return (
    <div className='pt-5'>
      <div className='d-flex justify-content-between'>
        <p className='h4'>Products Management</p>
        <input type='text' placeholder='Filter Order' className='inp'/>
      </div>
      <div>
      <ul className='link-box'>
          <li>
          <Link  to='/settings/management' className='main-link'>Hot Dishes</Link>
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
            <Route index element={<HotDishes/>}/>
            <Route path='cold' element={<ColdDishes/>}/>
            <Route path='soup' element={<Soup/>}/>
            <Route path='grill' element={<Grill/>}/>
            <Route path='appertizer' element={<Appertizer/>}/>
            <Route path='desert' element={<Desert/>}/>
          </Routes>
        </div>
    </div>
  )
}
