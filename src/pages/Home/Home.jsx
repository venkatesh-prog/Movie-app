import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero from "../../assets/hero_banner.jpg";
import play from "../../assets/play_icon.png";
import hero1 from "../../assets/hero_title.png";
import info from "../../assets/info_icon.png";
import Tittlecard from '../../components/Tittlecard/Tittlecard';
import Footer from '../../components/Footer/Footer';


const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero} alt="Hero" className='banner-img' />
        <div className="hero-tittle">
          <img src={hero1} alt="Hero Title" className='caption-img' />
          <p>
            Enjoy unlimited access to a wide collection of free movies right here on our website.
            From action-packed blockbusters to heartwarming dramas and comedy favorites, we've got
            something for everyone. No sign-up, no fees — just press play and start streaming your
            favorite films instantly. Dive into entertainment made simple and free!
          </p>
          <div className="hero-btn">
            <button>
              <img src={play} alt="play" />
              Play
            </button>
            <button className="dark-btn">
              <img src={info} alt="info" />
              More Info
            </button>
          </div>
             <Tittlecard/>
        </div>
      </div>
      <div className="more-cards">
        <Tittlecard tittle={"Blockbuster Movies"} categary={"popular"} />
        <Tittlecard tittle={"only on netflix"} categary={"top_rated"}/>
        <Tittlecard tittle={"upcoming movies"}  categary={"upcoming"}/>
        <Tittlecard tittle={"only for you"} categary={"now_playing"} />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
