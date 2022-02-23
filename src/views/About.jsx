import React from 'react';
import '../App.css';

const tethers = [
    {
        name: "pesach brake",
        position: 'february 01, 2022, 10:00:00',
        img: null,
        bio: 'ffdsaf fdsaafds fdsasafdsf fdsfasfdsa',
    },
    {
        name: "pesach brake",
        position: 'february 01, 2022, 10:00:00',
        img: null,
        bio: 'ffdsaf fdsaafds fdsasafdsf fdsfasfdsa',
    },
    {
        name: "pesach brake",
        position: 'february 01, 2022, 10:00:00',
        img: null,
        bio: 'ffdsaf fdsaafds fdsasafdsf fdsfasfdsa',
    },
    {
        name: "pesach brake",
        position: 'february 01, 2022, 10:00:00',
        img: null,
        bio: 'ffdsaf fdsaafds fdsasafdsf fdsfasfdsa',
    },
];

const anonymous = 'https://www.tutorsvalley.com/public/storage/uploads/tutor/1574383712-1AB5217C-5A13-4888-A5A1-BE0BCADBC655.png'

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="top">
        <h1></h1>
        <p></p>
      </div>
      <div className="bottom">
        {
          tethers.map((i) => (
            <div>
              {i.img ? <img src={i.img}alt = "#" /> : <img src={anonymous}alt = "#" />}
              <h1>{i.name}</h1>
              <h3>{i.position}</h3>
              <p>{i.bio}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default About