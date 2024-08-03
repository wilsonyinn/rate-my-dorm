import React from "react";
import { Link } from "react-router-dom";

//add
// West Grove Common
//Mary Park Hall
// Mary Ward Hall
// Towers Junior Suites
// Towers at Centennial Square
// Village at Centennial Square
// University Park South

const LandingPage = () => {
  return (
    <div>
      <Link to={`/manzanita-square`}>Manzanita Square</Link>
      <br />
      <Link to={`/university-park-north`}>University Park North</Link>
      <br />
      <Link to={`/towers-at-centennial-square`}>
        Towers At Centennial Square
      </Link>
      <br />
      <Link to={`/towers-at-junior-suites`}>Towers At Junior Suites</Link>
      <br />
      <Link to={`/west-grove-common`}>West Grove Common</Link>
      <br />
      <Link to={`/mary-park-hall`}>Mary Park Hall</Link>
      <br />
      <Link to={`/mary-ward-hall`}>Mary Ward Hall</Link>
      <br />
      <Link to={`/village-at-centennial-square`}>
        Village At Centennial Square
      </Link>
      <br />
      <Link to={`/university-park-south`}>University Park South</Link>
      <br />
      <Link to={`/university-park-north`}>University Park North</Link>
    </div>
  );
};

export default LandingPage;
