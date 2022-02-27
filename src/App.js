import { Routes, Route } from "react-router-dom";
import { React, useState, useEffect } from 'react';
import About from './views/About';
import Home from './views/Home';
import Contact from './views/Contact';
import Calender from './views/Calender';
import Videos from './views/Videos';
import Apply from './views/Apply';
import NavBar from './components/NavBar';
import ServerLink from './views/ServerLink';
import './App.css';
import axios from 'axios';

const App = () => {
  const [apiHome, setApiHome] = useState()
  const [apiAbout, setApiAbout] = useState()
  const [apiCalender, setApiCalendar] = useState()
  const [apiContact, setApiContact] = useState()
  
  const apiLink = 'http://localhost:1337/';
  
  const homeApi = () => {
        try {
      const apiRout = 'api/home-imegas?populate=*';
      const api = async () => {
        const { data } = await axios.get(`${apiLink}${apiRout}`);
        setApiHome(data.data);
      };
      api();
    } catch (error) {
      console.log(error);
    }
  }

  const contactApi = () => {
    const apiRout = 'api/contact-image?populate=*';
    try {
      const api = async () => {
        const { data } = await axios.get(`${apiLink}${apiRout}`);
        setApiContact(data);
      };
      api();
    } catch (error) {
      console.log(error);
    }
  }
  
  const calendarApi = () => {
      try {
        const apiRout = 'api/calendar-dates?populate=*'
        const api = async () => {
        const { data } = await axios.get(`${apiLink}${apiRout}`);
        setApiCalendar(data.data);
      };
      api();
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    homeApi()
    calendarApi()
    contactApi()
      }, []);
      
  return (
    <div className="App" >
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home apiHome={apiHome} />} />
        <Route path="/Calender" element={<Calender apiCalender={apiCalender}/>} />
        <Route path="/Videos" element={<Videos />} />
        <Route path="/About" element={<About apiAbout={apiAbout}/>} />
        <Route path="/Contact" element={<Contact apiContact={apiContact}/>} />
        <Route path="/Apply" element={<Apply />} />
        <Route path="/admin" element={<ServerLink />} />
      </Routes>
    </div>
  );
}

export default App;
