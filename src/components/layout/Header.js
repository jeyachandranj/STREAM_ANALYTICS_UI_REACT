import { useEffect,useState } from "react";
import React from "react";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";

function Header({
  placement,
  name,
  subName,
  onPress,
  handleSidenavColor,
  handleSidenavType,
  handleFixedNavbar,
}) {

   
  useEffect(() => window.scrollTo(0, 0));

  return (
    <>
      <div className="logo-container">
        <img
          src="https://lh7-us.googleusercontent.com/u7VsKYlUbG-yJ4hNEB567D7k2OAZld6kdd_on-GZd7Za82fTzWSORGp8LBsCVHXIJ0ugIke7WdDR4kt9oJjoe9EMlq32CIXZAkgMxBfSRHuPWLl08U__-L7sih-8spx0jIrH1fYuI2vgNrE=s2048"
          alt="Logo"
          className="logo"
          style={{
            width: "100px",
            height: "60px",
            borderRadius: "50%",
            border: "5px solid block",
          }} 
        />
      
      
      {/* <span style={{ marginLeft: "10px",color:"white" }}>
    //Start Date: {startDate ? startDate.format("YYYY-MM-DD") : "None"}
  </span>
  <span style={{ marginLeft: "10px",color:"white" }}>
   // End Date: {endDate ? endDate.format("YYYY-MM-DD") : "None"}
  </span> */}

    
    </div>
      
      
    </>
  );
}

export default Header;
