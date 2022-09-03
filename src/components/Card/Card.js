import { Link } from "react-router-dom"
import "./Card.css"
export const Cards = ({obj}) =>{
  
  return(
    <li className=" text-center  list-type-none meal" key={obj.id}>
      <img src={obj.strMealThumb} alt='rasm' className="card-img rounded-circle w-75"  />
      <div className="mb-3">{obj.strMeal}</div>
      <section>$ {Math.floor(Math.random() * 11)}  </section>
      <section className="my-1"> {Math.floor(Math.random() * 25)} bowls available</section>
    </li>

  )
}