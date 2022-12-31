import React from "react";

const About = () => {
  return(
    <div id="about" className="flex flex-col items-center p-12">
      <h1 className="text-4xl sm:text-7xl pt-12 pb-6">About Me</h1>

      <div className="flex flex-col sm:flex-row justify-around w-full">
        <p className="font-light sm:font-normal md:w-96 lg:w-2/5">
          Hello, my name is Tony Le, an alumnus from Red River College Polytechnic in the Business Information Technology (BIT) program.
          <br/>
          <br/> 
          During my work term at the college, I was a Full Stack Web Developer at the Canadian Horse Auction Alternative, where I was responsible for 
          creating and updating various pages on the website, making it responsive, and working with development teams and product managers 
          to ideate software solutions.
        </p>

        <img
          className="object-contain"
          src="https://via.placeholder.com/300"
          alt="picture of myself"
        />
      </div>
    </div>
  )
}

export default About