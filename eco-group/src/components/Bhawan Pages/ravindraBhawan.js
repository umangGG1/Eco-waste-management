import React from "react";
import "./rajeevBhawan.css";
import photo from "./ravindra.png";
import { useNavigate } from 'react-router-dom';
import { baseUrl } from "../../url";
const Ravindra = () => {
  const bhawanName = "Ravindra Bhawan"; // Define the bhawan name
  const navigate= useNavigate();

  const handleButtonClick = (status) => {
    const data = {
      bhawanName: bhawanName,
      status: status,
    };

    fetch(`${baseUrl}/api/bhawan/store`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log('Success:', data);
        navigate('/success');
      })
      .catch((error) => {
        console.error('Error:', error);
        // Optionally, add logic to show error feedback to the user
      });
  };

  return (
    <div className="bhawanPage">
      <div className="bhawanPhotoName">
        <img src={photo} alt="Bhawan" />
      </div>
      <div className="buttons">
        <button
          type="button"
          onClick={() => handleButtonClick('segregated')}
          style={{
            backgroundColor: "white",
            color: "black",
            height: "40px",
            width: "222px",
            margin: '10px',
            borderRadius: '4px',
            fontFamily: "Maven Pro",
            fontWeight: '600',
            border: "0px",
            boxShadow: '0 3px 5px rgba(0, 0, 0, 0.4)',
          }}
        >
          Segregated
        </button>
        <button
          type="button"
          onClick={() => handleButtonClick('unsegregated')}
          style={{
            backgroundColor: "black",
            color: "white",
            height: "40px",
            width: "222px",
            margin: '10px',
            borderRadius: '4px',
            fontFamily: "Maven Pro",
            fontWeight: '500',
            border: "0px",
            boxShadow: '0 3px 5px rgba(0, 0, 0, 0.4)',
          }}
        >
          Unsegregated
        </button>
      </div>
    </div>
  );
};

export default Ravindra;