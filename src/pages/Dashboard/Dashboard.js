import React from 'react'
import dollar from "../../assets/img/dollar.png"
import up from "../../assets/img/up.png"
import down from "../../assets/img/down.png"
import saves from "../../assets/img/saves.png"
import users from "../../assets/img/users.png"
import avatar1 from "../../assets/img/Avatar 1.png"
import "./Dashboard.css"
import ApexChart from '../../components/Chart/Chart'

import img1 from "../../assets/img/image 4.png"
import img2 from "../../assets/img/image 5.png"
import img3 from "../../assets/img/image 6.png"



export const Dashboard = () => {
  return (
    <div className='row p-2'>

    <div className='p-2 col-7'>
      <div className=''>
        <div>
        <p className='h1'>Dashboard</p>
        <span>Tuesday 2 Feb, 2021</span>
        </div>

      <hr/>

        <div >
          <ul className='d-flex justify-content-between'>
            <li className='list'>
              <div className='mb-3'>
                <img src={dollar} alt='doll'/>
                <span className='mx-2 text-success '>+32.40%</span>
                <img src={up} alt='up'/>
              </div>
              <span className='h4 '>$10.243.00</span>
              <p className='mt-3 text-secondary'>Total Revenue</p>
            </li>
            <li className='list'>
              <div className='mb-3'>
                <img src={saves} alt='doll'/>
                <span className='mx-2 text-danger '>-12.40%</span>
                <img src={down} alt='up'/>
              </div>
              <span className='h4 '>23.456</span>
              <p className='mt-3 text-secondary'>Total Dish Ordered</p>
            </li>
            <li className='list'>
              <div className='mb-3'>
                <img src={users} alt='doll'/>
                <span className='mx-2 text-success '>+2.40%</span>
                <img src={up} alt='up'/>
              </div>
              <span className='h4 '>1.234</span>
              <p className='mt-3 text-secondary'>Total Costumer</p>
            </li>
          </ul>
        </div>

        <div className='user '>
          <div className='d-flex justify-content-between mt-3'>
            <p className='h4 ms-5'>Order report</p>
            <input type='text' placeholder='Filter Order' className='inp'/>
          </div>
          <div>
            <ul className='w-100 '>
              <li className='d-flex justify-content-between'>
                <div className=''>Customer</div>
                <div className=''>Customer</div>
                <div className=''>Customer</div>
                <div className=''>Customer</div>
              </li>
              <hr/>
              <li className='d-flex justify-content-between'>
                <div className=''><img src={avatar1} className='me-2' alt='avatar'/>
                  Earen Jeager</div>
                <div className='w-25'>Spicy seasoned seafood noodles </div>
                <div className=''>$125</div>
                <div className='bg-succes'>completed</div>
              </li>
              <li className='d-flex justify-content-between'>
                <div className=''><img src={avatar1} alt='avatar' className='me-2'/>
                  Earen Jeager</div>
                <div className='w-25'>Spicy seasoned seafood noodles </div>
                <div className=''>$125</div>
                <div className=''>completed</div>
              </li>
              <li className='d-flex justify-content-between'>
                <div className=''><img src={avatar1} alt='avatar' className='me-2'/>
                  Earen Jeager</div>
                <div className='w-25'>Spicy seasoned seafood noodles </div>
                <div className=''>$125</div>
                <div className=''>completed</div>
              </li>
              <li className='d-flex justify-content-between'>
                <div className=''><img src={avatar1} alt='avatar' className='me-2'/>
                  Earen Jeager</div>
                <div className='w-25'>Spicy seasoned seafood noodles </div>
                <div className=''>$125</div>
                <div className=''>completed</div>
              </li> 
              <li className='d-flex justify-content-between'>
                <div className=''><img src={avatar1} alt='avatar' className='me-2'/>
                  Earen Jeager</div>
                <div className='w-25'>Spicy seasoned seafood noodles </div>
                <div className=''>$125</div>
                <div className=''>completed</div>
              </li> 
            </ul>
          </div>
        </div>
      </div>

    </div>

    <div className='col-5'>

      <div className='chart-box'>
      <section className='d-flex justify-content-between'>
        <p className='h5 mt-3'>Most type of order </p>
        <select className="order  " aria-label="Default select example">
          <option  defaultValue>Today </option>
          <option value="1">One week</option>
          <option value="2">One month</option>
        </select>
      </section>
      <hr/>
      <section className=''>
        <div className='d-flex'>
          <img src={img1} alt='rasm' className='rounded-circle w-25 me-2 mb-2'/>
          <section>
            <p>Spicy seasoned seafood noodles</p>
            <span>200 dishes ordered</span>
          </section>
        </div>
        <div className='d-flex'>
          <img src={img2} alt='rasm' className='rounded-circle w-25 me-2 mb-2'/>
          <section>
            <p>Salted pasta with mushroom sauce</p>
            <span>120 dishes ordered</span>
          </section>
        </div>
        <div className='d-flex'>
          <img src={img3} alt='rasm' className='rounded-circle w-25 me-2 mb-2'/>
          <section>
            <p>Beef dumpling in hot and sour soup</p>
            <span>80 dishes ordered</span>
          </section>
        </div>
      </section>
      <button className='mt-2 w-100 p-2 box-btn'>View All</button>
      </div>

    <div className=' chart-box p-3'>
      <section className='d-flex justify-content-between'>
        <p className='h5'>Most type of order </p>
        <select className="order  " aria-label="Default select example">
          <option  defaultValue>Today </option>
          <option value="1">One week</option>
          <option value="2">One month</option>
        </select>
      </section>
      <hr/>
      <section className='d-flex '>
        <ApexChart/>
        <ul >
          <li className='d-flex '>
            <span className='dot1 me-2'></span>
            <section>
              <p>Today</p>
              <span className='text'>200 costumer</span>
            </section>
          </li>
          <li className='d-flex '>
            <span className='dot2 me-2'></span>
            <section>
              <p>Week</p>
              <span className='text'>396 costumer</span>
            </section>
          </li>
          <li className='d-flex '>
            <span className='dot3 me-2'></span>
            <section>
              <p>Month</p>
              <span className='text'>452 costumer</span>
            </section>
          </li>
        </ul>
      </section>

    </div>
    </div>



  </div>

  )
}
