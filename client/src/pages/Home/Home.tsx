import Navbar from "../../components/Navbar/Navbar";
import "./Home.scss";
import vector from "../../assets/Vector 1.png";
import groupPeople from "../../assets/Group 81.png";
import partner1 from "../../assets/partners/image 909.png";
import partner2 from "../../assets/partners/image 910.png";
import partner3 from "../../assets/partners/image 910..png";
import partner4 from "../../assets/partners/image 9011.png";
import partner5 from "../../assets/partners/image 912.png";
import category1 from "../../assets/category/tour-guide 1.png";
import category2 from "../../assets/category/travelling 1.png";
import category3 from '../../assets/category/hands 1.png';
import category4 from "../../assets/category/medical-team 1.png"
import TextLayout from "../../components/TextLayout/TextLayout";
import fast1 from "../../assets/fastandeasy/Group 7.png"
import fast2 from "../../assets/fastandeasy/Group 12.png"
import fast3 from "../../assets/fastandeasy/Group 11.png"
import fastImage from "../../assets/fastandeasy/Rectangle 17.png";
import fastOptions from "../../assets/fastandeasy/OPTIONS.png";
import group from "../../assets/fastandeasy/Group.png";
import love from "../../assets/fastandeasy/heart (6) 1.png"
import fsi from "../../assets/fastandeasy/Mask Group.png";
import line from "../../assets/fastandeasy/Group 3.png";
import d1 from "../../assets/bt/Destination 1.png";
import d2 from "../../assets/bt/Destination 2.png";
import d3 from "../../assets/bt/Destination 3.png";
import d4 from "../../assets/bt/Destination 4.png";
import bt_round from "../../assets/bt/Rectangle 19299.png";
import Card from "../../components/Card/Card";
import bg1 from "../../assets/trendy/bg1.png";
import bg2 from "../../assets/trendy/bg2.png";
import bg3 from "../../assets/trendy/bg3.png";
import flag1 from "../../assets/trendy/flag1.png"
import flag2 from "../../assets/trendy/flag2.png"
import flag3 from "../../assets/trendy/flag3.png"
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      {/* Header */}
      <div className="header w-full">
        <Navbar />

        {/* No matter text design */}
        <div className="header_text w-4/6 flex flex-col justify-between gap-6 mx-auto">
          <img src={vector} alt="vector" />

          <h1 className="text-4xl font-bold text-white w-2/3">
            No matter where you &apos;re going to, we&apos;ll take you there
          </h1>

          <div className="reachout w-3/4 flex justify-between gap-4">
            <input
              type="text"
              className="w-2/3"
              placeholder="Reach out to us"
            />
            <input type="submit" value="Submit" />
          </div>
          <div className="group_people flex flex-row gap-4 justify-start items-center">
            <img src={groupPeople} alt="group" />
            <p className="text-sm text-white">
              2500 people booked Tomorrow land Event in last 24 hours
            </p>
          </div>
        </div>
      </div>

      {/* patners */}
      <div className="partners w-full flex justify-between items-center gap-8 bg-slate-100">
        <img src={partner1} alt="partner" />
        <img src={partner2} alt="partner" />
        <img src={partner3} alt="partner" />
        <img src={partner4} alt="partner" />
        <img src={partner5} alt="partner" />
      </div>

    {/* Categories */}
    <section className="category w-full flex flex-col justify-between items-center ">
        <h3>CATEGORY</h3>
        <h1>We Offer the Best Services</h1>

        <div className="flex justify-between item-center gap-12 w-2/3">
            <article className="section_card">
                <div className="section_card_image">
                    <img src={category1} alt="" />
                </div>
                <h4>Guided Tours</h4>
                <p className="text-center w-3/4 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <span className="section_box"></span>
            </article>
            <article className="section_card">
                <div className="section_card_image">
                    <img src={category2} alt="" />
                </div>
                <h4>Best Flight Options</h4>
                <p className="text-center w-3/4 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <span className="section_box"></span>
            </article>
            <article className="section_card">
                <div className="section_card_image">
                    <img src={category3} alt="" />
                </div>
                <h4>Religious Tours</h4>
                <p className="text-center w-3/4 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <span className="section_box"></span>
            </article>
            <article className="section_card">
                <div className="section_card_image">
                    <img src={category4} alt="" />
                </div>
                <h4>Medical Insurance</h4>
                <p className="text-center w-3/4 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <span className="section_box"></span>
            </article>
        </div>
        

    </section>

    {/* honeymoon special section */}
    <div className="honeymoon_section w-3/4 mx-auto p-20">
        {/* image side */}
        <div className="honeymoon_section_image">
            <div className="h1">Honeymoon Packages</div>
            <div className="h_image">
              {/* <img src={maskGroup} alt="image" /> */}
              <span className="h_image_first">
                {/* <img src={eclipse1} alt="eclipse1" /> */}
              </span>
              <span className="h_image_second">
                {/* <img src={eclipse2} alt="eclipse2" /> */}
              </span>
              <span className="h_image_third">
                {/* <img src={eclipse3} alt="eclipse3" /> */}
              </span>
              <span className="h_rounded_square"></span>
              <span className="h_rounded_rectangle"></span>
            </div>
        </div>
        {/* Text side */}
        <div className="honeymoon_section_text">
            <TextLayout
              title="HONEYMOON SPECIAL"
              header="Our Romantic Tropical Destinations"
              text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum dolore molestias quo? Ad alias, reprehenderit error a aliquam fugiat dolore voluptatibus blanditiis reiciendis dolores, soluta minus similique, unde dicta id!"
              button="View Packages"
              linkTo=""
             />
             
        </div>
    </div>

    {/* Fast and easy section */}
    <div className="fast_and_Easy w-2/3 mx-auto">

      {/* bookings text side */}
      <div className="bookings">
        <h3 className="font-bold text-sm">FAST & EASY</h3>
        <h1 className="text-3xl font-bold w-2/3">Get Your Favourite Resort Bookings</h1>

        <div className="booking_options w-2/3">
          <div className="booking_options_image">
            <img src={fast1} alt="stuff" />
          </div>
          <div className="booking_options_text">
            <h5>Choose Destination</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>

        <div className="booking_options w-2/3">
          <div className="booking_options_image">
            <img src={fast2} alt="stuff" />
          </div>
          <div className="booking_options_text">
            <h5>Choose Destination</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
        <div className="booking_options w-2/3">
          <div className="booking_options_image">
            <img src={fast3} alt="stuff" />
          </div>
          <div className="booking_options_text">
            <h5>Choose Destination</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>

      </div>

      {/* booking image side */}
      <div className="fast_bookings">
        <div className="fast_image">
          <img src={fastImage} alt="stuff" className="f_img" />
          <h4 className="text-sm font-bold">Trip to Hawaii</h4>
          <p className="text-sm text-slate-400">14-29 June | by JR Matir</p>
          <img src={fastOptions} alt="stuff" className="f_opt" />
          <span className="flex flex-row justify-between item-center">
            <span className="flex flex-row justify-between gap-2 text-sm text-slate-400 item-center"><img src={group} alt="stuff" /> 60 people are interested</span>
            <span><img src={love} alt="stuff" /></span>
          </span>
          <span className="fast_square"></span>
          <span className="fast_sidebar flex flex-row gap-2">
            <div className="fast_sidebar_image"><img src={fsi} alt="" /></div>
            <div className="flex flex-col">
              <p className="text-slate-400">Ongoing</p>
              <h5 className="font-bold">Trip to rome</h5>
              <h3>40% <span className="font-bold text-sm text-black">completed</span></h3>
              <img src={line} alt="stuff" />
            </div>
          </span>
          <span className="fast_air"></span>
        </div>
      </div>

    </div>

      {/* statue of liberty stuff */}
      <div className="statue w-full">
        <h1 className="statue_header">Let&apos;s Make Your<br/> Next Holiday Amazing</h1>
        <span></span>
      </div>

      {/* Breathtaking */}
      <div className="bt w-2/3 mx-auto">

        <div className="bt_text">
          <TextLayout
            title="PROMOTION"
            header="We Provide You The Best Europe Sighting Tours"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique facere nam rem beatae dolore dicta quae delectus alias provident adipisci reiciendis, amet atque cum et, rerum ratione nobis quisquam fugit!"
            button="View Packages"
            linkTo=""
           />
           <div className="bt_text_images">
            <div><img src={d1} alt="stuff" /></div>
            <div><img src={d2} alt="stuff" /></div>
            <div><img src={d3} alt="stuff" /></div>
            <div><img src={d4} alt="stuff" /></div>
           </div>
        </div>

        <div className="bt_image">
          <div className="bt_head">Breath Taking Views</div>
          <span><img src={bt_round} alt="stuff" /></span>
        </div>

      </div>

      {/* EXPLORE */}
      <div className="explore w-full">

        <div className="explore_nature flex flex-col justify-center items-center gap-4">
          <h3 className="text-white text-sm">PROMOTION</h3>
          <h1 className="text-white text-3xl">Explore Nature</h1>
          <button className="text-white">View Packages</button>
        </div>
        <div className="explore_cities flex flex-col justify-center items-center gap-4">
          <h3 className="text-white text-sm">PROMOTION</h3>
          <h1 className="text-white text-3xl">Explore Cities</h1>
          <button className="text-white">View Packages</button>
        </div>

      </div>

      {/* TRENDY */}
      <section className="trendy w-2/3 mx-auto flex flex-col justify-center items-center gap-4 py-20">

        <h3 className="text-sm font-bold">TRENDY</h3>
        <h1 className="text-3xl font-bold text-center">Our Trending Tour <br />Packages</h1>

        <article className="flex gap-8 justify-start mx-auto">

          <div className="article">
            <Card
              image={bg1}
              flag={flag1}
              people="25"
              country="Switzerland"
              location="Europe"
              price="$1,000"
            />
          </div>

          <div className="article">
            <Card
              image={bg2}
              flag={flag2}
              people="30"
              country="Amazon"
              location="Brazil"
              price="$1,223"
            />
          </div>

          <div className="article">
            <Card
              image={bg3}
              flag={flag3}
              people="$1,200"
              country="Giza"
              location="Egypt"
              price="$1,000"
            />
          </div>
          
        </article>

      </section>

      <Footer />

    </div>
  );
};

export default Home;
