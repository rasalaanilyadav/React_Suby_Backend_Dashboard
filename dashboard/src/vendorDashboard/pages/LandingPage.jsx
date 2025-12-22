import React, { useState,useEffect } from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirm from '../components/forms/AddFirm'
import AddProduct from '../components/forms/AddProduct'
import Welcome from '../components/Welcome'
import AllProducts from '../components/AllProducts'


const LandingPage = () => {
  const[showLogin,setShowLogin]=useState(false)
  const[showRegister,setShowRegister]=useState(false)
  const[showFirm,setShowFirm]=useState(false)
  const[showProduct,setShowProduct]=useState(false)
  const[showWelcome,setshowWelcome]=useState(false)
  const[showAllProducts,setShowAllProducts]=useState(false);
  const[showLogOut,setshowLogOut]=useState(false) 
  const[showFirmTitle,setshowFirmTitle]=useState(true)


  useEffect(()=>{
    const loginToken=localStorage.getItem('loginToken');
    if(loginToken){
      setshowLogOut(true)
    }

  },[])

  useEffect(()=>{
    const firmName=localStorage.getItem('firmName');
    if(firmName){
      setshowFirmTitle(false)
    }
  },[])
  
  const logOutHandler=()=>{
    confirm("Are you sure to logout ?")
    localStorage.removeItem("loginToken");
    localStorage.removeItem("firmId") 
    localStorage.removeItem('firmName');
    setshowLogOut(false)
    setshowFirmTitle(true)
  } 

const showLoginHandler=()=>{
  setShowLogin(true)
  setShowRegister(false)
  setShowFirm(false)
  setShowProduct(false)
  setshowWelcome(false)
  setShowAllProducts(false)
}
const showRegisterHandler=()=>{
  setShowFirm(false)
  setShowRegister(true)
  setShowLogin(false)
  setShowProduct(false)
  setshowWelcome(false)
  setShowAllProducts(false)
}
const showFirmHandler=()=>{
  if(showLogOut){
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(true)
    setShowProduct(false)
    setshowWelcome(false)
    setShowAllProducts(false)
  }else{
    alert("please login");
    setShowLogin(true)
  }
}
const showProductHandler=()=>{
  if(showLogOut){
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(true)
    setshowWelcome(false)
    setShowAllProducts(false)
  }else{
    alert("please login")
    setShowLogin(true)
  }
}
const showWelcomeHandler=()=>{
  setShowRegister(false)
  setShowLogin(false)
  setShowFirm(false)
  setShowProduct(false)
  setshowWelcome(true)
  setShowAllProducts(false)
  
}
const showAllProductsHandler=()=>{
  if(showLogOut){
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(false)
    setshowWelcome(false)
    setShowAllProducts(true)
  }else{
    alert("please login")
    setShowLogin(true)
  }
}
  return (
    <>
        <section  className='landingSection'>
            <NavBar  showLoginHandler={showLoginHandler} showRegisterHandler={showRegisterHandler}
            showLogOut={showLogOut} logOutHandler={logOutHandler}
            />
            <div className="collectionSection">
              <SideBar showFirmHandler={showFirmHandler} showProductHandler={showProductHandler} 
              showAllProductsHandler ={showAllProductsHandler} showFirmTitle={showFirmTitle}
              />
             {showLogin && <Login showWelcomeHandler={showWelcomeHandler}/>}
             {showRegister && <Register showLoginHandler={showLoginHandler}/>}
             {showFirm &&  showLogOut && <AddFirm/> }
             {showProduct && showLogOut &&<AddProduct/>}
             {showWelcome && <Welcome/>}
             {showAllProducts && showLogOut && <AllProducts/>}
            </div>
        </section>

    </>
  )
}

export default LandingPage
