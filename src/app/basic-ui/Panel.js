import "../../assets/styles/components/_panel.scss";
import React from "react";
import { useState } from "react";

export const Panel =  ({width, isEnable, title, panelClose,  children}) => {
console.log("isEnable", isEnable);
const [xPosition, setX] = useState(width);
//const [enable, setEnable] = useState(isEnable);

console.log("xPosition", xPosition);
  const toggleMenu = () => {
      console.log("ww", isEnable);
      panelClose(false);
    if (isEnable) {
      setX(width);
    } else {
      setX(0);
    }
  };

  React.useEffect(() => {
    console.log("isEnable2", width);
      if(isEnable){
        setX(0);
      }else{
        setX(width); 
      }
    
  }, [isEnable]);

    return(
        <div className="Panel" style={{width: width, transform: `translatex(${xPosition}px)` }}>
           
        <h2>
        {title} 
        <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon"
        onClick={() => toggleMenu()}
        
        ><i className="fa fa-times"></i></button></h2>
        <div className="panel-body">
            <React.Fragment>{children}</React.Fragment>
        </div> 
        </div>
    )
}