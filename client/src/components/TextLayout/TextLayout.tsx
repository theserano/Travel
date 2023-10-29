import {Link} from "react-router-dom";
import "./TextLayout.scss"

type Props = {
    title: string,
    header: string,
    text: string,
    button: string,
    linkTo: string,
}

const TextLayout = ({title, header, text, button, linkTo}: Props) => {
  return (
    <div className="text_layout flex flex-col item-start justify-between gap-4 p-4">
        <h3 className="text-sm font-bold">{title}</h3>
        <h1 className="text-3xl font-bold ">{header}</h1>
        <p className="text-sm">{text}</p>
        <button className="text-sm">
            <Link to={linkTo}>{button}</Link>
        </button>
    </div>
  )
}

export default TextLayout