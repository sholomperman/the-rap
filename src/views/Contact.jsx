import { React, useState } from "react";

const Contact = ({apiContact}) => {
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

  console.log(apiContact)
  return (
    <div className="contactContainer">
      <div className="left">
        <img src={apiContact.data.attributes.image.data[0].attributes.caption} alt="" />
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