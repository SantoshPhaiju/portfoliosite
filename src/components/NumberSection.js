import React from 'react'
import CountUp, { useCountUp } from "react-countup";


const NumberSection = () => {
    

  useCountUp({
    ref: "counter",
    end: 2000,
    enableScrollSpy: true,
    scrollSpyDelay: 0
  });
  return (
    <>
      <div className="section section-work-data">
          <div className="container grid grid-four-column">
            <div className="numberDiv">
              
              <h2 id="counter"><CountUp end={2000} enableScrollSpy/></h2>
              <p>Project completed</p>
            </div>
            <div className="numberDiv">
            <h2 id="counter"><CountUp end={6000} enableScrollSpy/></h2>
              <p>Project completed</p>
            </div>
            <div className="numberDiv">
            <h2 id="counter"><CountUp end={5000} enableScrollSpy/></h2>
              <p>Project completed</p>
            </div>
            <div className="numberDiv">
            <h2 id="counter"><CountUp end={3000} enableScrollSpy/></h2>
              <p>Project completed</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default NumberSection
