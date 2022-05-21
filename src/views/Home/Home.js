
import React from "react";
import LayoutHoc from "components/Common/LayoutHoc";
import DiningOptions from 'components/DiningOptions/DiningOptions'

import "./Home.scss"

const Home=()=> {

  return (
   <div className="view-home content-holder">
       <DiningOptions/>
   </div>
    )
}

export default LayoutHoc(Home)