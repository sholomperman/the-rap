import { Routes, Route } from "react-router-dom";
import { React, useState, useEffect } from "react";
import About from "./views/About";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Calender from "./views/Calender";
import Gallery from "./views/Gallery";
import Apply from "./views/Apply";
import ServerLink from "./views/ServerLink";
import ErrorRout from "./views/ErrorRout";
import NavBar from "./components/NavBar";
import "./App.css";
import axios from "axios";

const App = () => {
  const [apiHome, setApiHome] = useState([]);
  const [apiAbout, setApiAbout] = useState();
  const [apiCalender, setApiCalendar] = useState();
  const [apiContact, setApiContact] = useState([]);
  const [apiGallery, setApiGallery] = useState();

  const apiLink = "http://localhost:5001/the-rap-server/us-central1/app/";

  const homeApi = () => {
    try {
      const apiRout = "api/homeImg";
      const api = async () => {
        const { data } = await axios.get(`${apiLink}${apiRout}`);
        setApiHome(data);
      };
      api();
    } catch (error) {
      console.log(error);
    }
  };

  const contactApi = () => {
    const apiRout = "api/contactImg";
    try {
      const api = async () => {
        const { data } = await axios.get(`${apiLink}${apiRout}`);
        setApiContact(data);
      };
      api();
    } catch (error) {
      console.log(error);
    }
  };

  const calendarApi = () => {
    try {
      const apiRout = "api/calendar";
      const api = async () => {
        const { data } = await axios.get(`${apiLink}${apiRout}`);
        setApiCalendar(data);
      };
      api();
    } catch (error) {
      console.log(error);
    }
  };

  // const galleryApi = () => {
  //   try {
  //     const apiRout = "api/gallery-images?populate=*";
  //     const api = async () => {
  //       const { data } = await axios.get(`${apiLink}${apiRout}`);
  //       setApiGallery(data.data);
  //     };
  //     api();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    homeApi();
    calendarApi();
    contactApi();
    // galleryApi();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home apiHome={apiHome} />} />
        <Route
          path="/Calender"
          element={<Calender apiCalender={apiCalender} />}
        />
        <Route path="/Gallery" element={<Gallery apiGallery={apiGallery} />} />
        <Route path="/About" element={<About apiAbout={apiAbout} />} />
        <Route path="/Contact" element={<Contact apiContact={apiContact} />} />
        <Route path="/Apply" element={<Apply />} />
        <Route path="/admin" element={<ServerLink />} />
        <Route path="*" element={<ErrorRout />} />
      </Routes>
    </div>
  );
};

export default App;
