import { React, useState } from "react";

  const images = {
    name: "name",
    src: "https://images.unsplash.com/photo-1645390786282-af647b6acd7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80",
  }

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  })
  console.log("form data", formData)

  const handelChange = e => {
    setFormData({
      ...formData,
        [e.target.name]: e.target.value
    })
  }


  return (
    <div className="contactContainer">
      <div className="left">
        <img src={images.src} alt="#" />
      </div>
      <div className="right">
        <form action="post">
        <h1>Got any question? Let’s talk about it.</h1>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handelChange}
            type="text"
            placeholder="First Name"
          />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handelChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handelChange}
            type="email"
            placeholder="Email"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handelChange}
            type="message"
            placeholder="Enter a Message"
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact