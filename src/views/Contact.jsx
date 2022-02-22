import React from 'react';

const Contact = () => {
  const images = {
    name: 'name',
    src: 'https://images.unsplash.com/photo-1645390786282-af647b6acd7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80',
  }
  return (
    <div className="contactContainer">
      <div className="left">
        <img src={images.src} alt="#" />
      </div>
      <div className="right">
        <form action="post">
        <h1>Got any question? Let’s talk about it.</h1>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <textarea type="message" placeholder="Enter a Message" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact