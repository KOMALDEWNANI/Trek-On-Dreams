import React from 'react'
// import Footer from "./Footer";
// import Navbar from "./Navbar";
import Carousel2 from './Carousel2';
import BookingCard from './BookingCard';

function Booking() {
  return (
    <div >
    <h1 style={{marginLeft:20, marginTop:200}} class="text-6xl font-normal leading-normal mt-0 mb-0 text-purple-800">
  Booking Information
</h1>
    <Carousel2 />
    <h1 style={{marginLeft: 40, marginTop:50}} class="text-5xl font-bold m-0 text-xl">Ohio</h1>
    <h2 style={{marginLeft: 40, marginTop:2}} class="font-bold m-0 ">Duration:</h2>
    <p style={{marginLeft: 40, marginTop:2}} class="font-bold m-0 " >Age Group:</p>
    <hr
        style={{
          color: 'purple',
          borderColor: 'purple',
          height: '2px',
          width:1000,
          marginLeft:40,
          marginTop:10
        }}
      />
    <h3 style={{marginLeft: 40, marginTop:2}} class="font-semibold m-0">About</h3>
    <h3 style={{marginLeft: 40, marginTop:2}} class="font-normal m-0">All the "about" of the place here in this para</h3>
    <BookingCard / >

    </div>
  )
}

export default Booking