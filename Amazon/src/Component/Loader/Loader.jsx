import React from 'react'
import {FadeLoader} from 'react-spinners'
function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "5 0vh",
      }}
    >
      <FadeLoader color="#23e133" />
    </div>
  );
}

export default Loader
