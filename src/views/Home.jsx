import { React, useState, useEffect } from 'react';
import About from './About';
import '../App.css';

const Home = () => {
  const [images, setImages] = useState ([
    {
      id: '1',
      img: 'https://images.unsplash.com/photo-1644946965891-a82ec145a357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: '2',
      img: 'https://images.unsplash.com/photo-1645088520336-62d94324e869?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: '3',
      img: 'https://images.unsplash.com/photo-1644976541214-2a5d7e1a1f79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      id: '4',
      img: 'https://images.unsplash.com/photo-1645390786282-af647b6acd7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80',
    }
    ])
    const [ingCount, setIngCount] = useState(1)
    
    useEffect(() => {
      const interval = setInterval(() => {
        images.length - 1 >= ingCount ? setIngCount(ingCount + 1) : setIngCount(1);
      }, 4000);
      
      return () => {
        clearInterval(interval);
      };
    });
  
console.log(ingCount)
    return (
    <>
    <div className="homeContainer">
        <div>
          <span
            onClick={() => { 2 <= ingCount ? setIngCount(ingCount - 1) : setIngCount(images.length); }}
            style={{ cursor: 'pointer', marginRight: '-150px', fontSize: '100px', }}
            className="material-icons-outlined arrow">chevron_left
          </span>
          
          <img src={images[ingCount - 1].img} alt='#' />
          
          <div className="circleContainer">
              {images.map((item) => (
                <span onClick={() => { setIngCount(item.id); }} className={item.id == ingCount ? "material-icons-round" : "material-icons-outlined"} style={{ fontSize: '25px', marginRight: '15px', cursor: 'pointer' }}>{item.id == ingCount ? "circle" : "radio_button_unchecked"}</span>
          ))}
          </div>
          <span
            onClick={() => { images.length <= ingCount ? setIngCount(1) : setIngCount(ingCount + 1); }}
            style={{ cursor: 'pointer', marginLeft: '-150px', fontSize: '100px', }}
            className="material-icons-outlined arrow">chevron_right
          </span>
        </div>
    </div>
    <About />
    </>
  )
}
export default Home