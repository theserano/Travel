
type Props = {
    image: string,
    flag: string,
}

const Card = ({image, flag}: Props) => {
  return (
    <div className="card flex flex-col">

        <div className="card_image">
            <img src={image} alt="stuff" />
            <span><img src={flag} alt="" /></span>
        </div>
        <div className="cal">
            
        </div>

    </div>
  )
}

export default Card