import React from "react";
import dummyData from "../dummy.json";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <Link to={`/manzanita-square`}>Manzanita Square</Link>
      <br />
      <Link to={`/university-park-north`}>University Park North</Link>
      <br />
      <Link to={`/towers`}>Towers</Link>
    </div>
  );
};

export default LandingPage;
