import React from 'react'
import Shoe from "../images/shoe_image.png"
import Shop from "../images/shops.png"

export const Hero = () => {
  return (
    <div className="conatiner " style={{
        margin: "0px 200px"
    }}>
      <div className="row  py-5">
    <div className="col  ">
        <div className=" me-5 ">
            <h1 className=' text-wrap justify-content-start' style={{width: "200px"}}>
            YOUR FEET 
            DESERVE
            THE BEST
            </h1>
            
        </div>
    <div className='me-5 mt-5'>
    <p className='text-wrap' style={{width: "200px"}}>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            </p>
    </div>
        <div>
        <button type="button" class="  btn btn-danger">Shop Now</button>

        <button type="button" class=" mx-4 btn border-black btn-light">Category</button>
        </div>
        <div className='my-5'>
            <p>Also Available On</p>
            <img src={Shop} alt="" />
        </div>
    </div>
    <div className="col ">
    <img src={Shoe} alt="Shoe" />    
    </div>
    
  </div>
    </div>
  )
}
