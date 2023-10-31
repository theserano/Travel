import "./Footer.scss";
import logoArrow from "../../assets/Arrow 05.png";
import {FaLinkedinIn, FaFacebookMessenger, FaTwitter, FaInfinity} from "react-icons/fa";


const Footer = () => {
  return (
    <div className="Footer w-full mt-20 pb-8">

        <div className="footer_guy flex gap-4 justify-between items-start w-3/4 mx-auto py-16">

            <div className="travel_footer flex flex-col items-start justify-between">
                <div className="logo">
                    <div className="logo_text text-blue-950 text-2xl font-bold">Travel</div>
                    <div className="arrow"><img src={logoArrow} alt="logoArrow" /></div>
                </div>
                <div className="text-sm text-slate-400 mb-4">Travel helps companies<br/> manage payments easily.</div>
                <div className="socials flex gap-2 text-orange-700">
                    <span><FaLinkedinIn /></span>
                    <span><FaFacebookMessenger /></span>
                    <span><FaTwitter /></span>
                    <span><FaInfinity /></span>
                </div>
            </div>

            <div className="company flex flex-col gap-3">
                <h2 className="text-xl font-bold text-slate-700">Company</h2>
                <p>About us</p>
                <p>Careers</p>
                <p>Blog</p>
                <p>Pricing</p>
            </div>

            <div className="Destinations flex flex-col gap-3">
                <h2 className="text-xl font-bold text-slate-700">Destinations</h2>
                <p>Maldives</p>
                <p>Los Angeles</p>
                <p>Las Vegas</p>
                <p>Toronto</p>
            </div>

            <div className="NewsLetter flex flex-col gap-3">
                <h2 className="text-xl font-bold text-slate-700">Join Our Newsletter</h2>
                <div className="form">
                    <input type="text" placeholder="Your email address" className="i_text" />
                    <input type="submit" value="Subscribe" className="i_sub" />
                </div>
                <p>* Will send you weekly updates for your better tour packages</p>
            </div>

        </div>

        <div className="w-2/3 mx-auto">
            <hr />
            <p className="text-sm text-center py-4">Copyright @ Xpro 2023. All Rights Reserved.</p>
        </div>

    </div>
  )
}

export default Footer