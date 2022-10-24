import React from "react";
import { Link } from "react-router-dom";
//import background from "public/images/landingPlaceholder.jpeg";

const LandingPage: React.FC = () => {
  return (
    <div
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        //suvaline placeholder pilt
        backgroundImage: `url(${"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-three-females-in-slippers-royalty-free-image-1659569918.jpg"})`,
      }}
    >
      <div
        className="catchphrase"
        style={{
          marginLeft: 50,
          paddingTop: 220,
          fontSize: 40,
          color: "white",
        }}
      >
        Sinu susside kodu.
        <div>
          <div style={{padding: 20, marginTop: 60}}>
          <Link to="./Shop" style={{ textDecoration: "none", color: "black" }}>
            Mehed
          </Link>
          </div>
          <div style={{padding: 20}}>
          <Link to="./Shop" style={{ textDecoration: "none", color: "white" }}>
            Naised
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
