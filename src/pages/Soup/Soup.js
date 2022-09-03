import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import { Cards } from '../../components/Card/Card';

export const Soup = () => {
  const [meals, setMeals] = useState([]);
  const root = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter'

  useEffect(() => {
    axios.get(root)
  .then((data) => {
    setMeals(data.data.meals)
})
  .catch((e) => {
  console.log('error', e)
})
  }, [])

  return (
    <div className=''>
      <div> 
      {meals.length && (
      <ul className=' h-50 d-flex flex-wrap  justify-content-around  list-unstyled mt-5'>
        {meals.map((e) =>(
            <Cards  key={e.idMeal} obj ={e}/>
        ))}
      </ul>
      )}
      </div>
    </div>
  )
}
