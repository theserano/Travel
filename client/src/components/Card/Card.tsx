import {AiOutlineCalendar} from "react-icons/ai";
import {SlPeople} from "react-icons/sl";
import stars from "../../assets/stars.png";
import {CiLocationOn} from "react-icons/ci";
import "./Card.scss"

interface Props {
    [key: string]: string;
  }


const Card = ({image, flag, people,country, location, price}: Props) => {
  return (
    <div className="card flex flex-col gap-2 justify-start">

        <div className="card_image w-full">
            <img src={image} alt="stuff" />
            <span><img src={flag} alt="" /></span>
        </div>
        <div className="cal flex justify-between items-center text-slate-400 text-sm mt-8">
            <span className="flex gap-1 items-center"><AiOutlineCalendar className="icon" /> 8 days</span>
            <span className="flex gap-1 items-center"><SlPeople /> {people} People Going</span>
        </div>
        <div className="country flex justify-between items-center">
            <span className="font-bold text-xl text-blue-950">{country}</span>
            <span><img src={stars} alt="stars" /></span>
        </div>
        <div className="location flex item-center gap-1 text-sm text-slate-400 -mt-2">
            <CiLocationOn /> {location}
        </div>
        <div className="color flex items-center gap-4">
            <span className="text-xl font-semibold">{price}</span>
            <span className="text-slate-500 line-through font-semibold">$1,200</span>
        </div>
        <div className="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates qui mollitia odio. Quas necessitatibus harum vitae dolore</div>

        <button className="btn text-sm">Explore Now</button>

    </div>
  )
}

export default Card