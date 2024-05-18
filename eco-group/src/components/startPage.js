import React, {useState, useEffect} from "react";
import './StartPage.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import loadingImage from "./Start.png"
library.add(fas);


const StartPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <img src={loadingImage} alt="Loading" className="loading-image" />
      </div>
    );
  }
  
    return (
      <> 
        <div id="start-page1">
          <div id='start-heading'>
            <h1>Welcome to<br/> save the PLANET</h1>
          </div>
          <div>
          <Link to="/usertype">
            <button>
              <FontAwesomeIcon icon="fa-solid fa-arrow-right" style={{color: "#ffffff", height: "30px"}} />   
            </button>
            </Link>
          </div>
        </div>
      </>
    );
  };
  
  export default StartPage;