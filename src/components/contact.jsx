import React from 'react'

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <h1 className="text-3xl sm:text-6xl ">Get In Touch</h1>
      <p className="p-10 text-center">
        Whether it's a job opportunity, feedback on my projects, or a call
        for collaboration my inbox is always open! Feel free to send me a message!
      </p>

      <a href="mailto:tonyle9511@gmail.com">
        <button className="border-2 rounded-md p-3">
          Send Email
        </button>
      </a>
    </div>
  )
}

export default Contact