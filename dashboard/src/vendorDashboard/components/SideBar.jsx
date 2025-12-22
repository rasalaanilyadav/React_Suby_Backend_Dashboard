import React from 'react'

const SideBar = ({showFirmHandler,showProductHandler , showAllProductsHandler,showFirmTitle}) => {
  return (
    <div className="sideBarSection">
        <ul>
          {showFirmTitle ? <li onClick={showFirmHandler}>Add Firm</li> : ""}
            
            <li onClick={showProductHandler}>Add Prdoucts</li>
            <li onClick={showAllProductsHandler}>All Prdoucts</li>
            <li>User Details</li>
        </ul>
    </div>
  ) 
}

export default SideBar
