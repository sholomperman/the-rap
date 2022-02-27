import { React, useState, useEffect } from 'react';
import '../App.css';


const Home = ({apiHome}) => {
      const [imgCount, setImgCount] = useState(1)
    
    useEffect(() => {
      const interval = setInterval(() => {
        apiHome?.length - 1 >= imgCount ? setImgCount(imgCount + 1) : setImgCount(1);
      }, 5000);
      
      return () => {
        clearInterval(interval);
      };
    });
  
    return (
    <>
    <div className="homeContainer">
        <div>
          <span
            onClick={() => { 2 <= imgCount ? setImgCount(imgCount - 1) : setImgCount(apiHome?.length); }}
            style={{ cursor: 'pointer', marginRight: '-150px', fontSize: '100px', }}
            className="material-icons-outlined arrow">chevron_left
          </span>
          
          <img src={apiHome?.[imgCount - 1].attributes.image.data.attributes.caption} alt='#' />
          
          {/* <div className="circleContainer">
              {apiHome?.data.map((item) => (
                <span key={item.id} onClick={() => { setImgCount(item.id); }} className={item.id == imgCount ? "material-icons-round" : "material-icons-outlined"} style={{ fontSize: '25px', marginRight: '15px', cursor: 'pointer' }}>{item.id == imgCount ? "circle" : "radio_button_unchecked"}</span>
          ))}
          </div> */}
            
          <span
            onClick={() => { apiHome?.length <= imgCount ? setImgCount(1) : setImgCount(imgCount + 1); }}
            style={{ cursor: 'pointer', marginLeft: '-150px', fontSize: '100px', }}
            className="material-icons-outlined arrow">chevron_right
          </span>
        </div>
    </div>
    </>
  )
}
export default Home