import { React, useState, useEffect } from 'react';
import About from './About';
import '../App.css';

const Home = () => {
  const [x, setX] = useState(1)
  const [images, setImages] = useState ([
    {
        id: '1',
        title: 'FPV Calculator',
        img: 'https://images.unsplash.com/photo-1644946965891-a82ec145a357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
        id: '2',
        title: 'To do list',
        img: 'https://images.unsplash.com/photo-1645088520336-62d94324e869?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
        id: '3',
        title: 'react clock',
        img: 'https://images.unsplash.com/photo-1644976541214-2a5d7e1a1f79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
        {
        id: '3',
        title: 'react clock',
        img: 'https://images.unsplash.com/photo-1645390786282-af647b6acd7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80',
    }
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      images.length - 1 >= x ? setX(x + 1) : setX(1);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
    <div className="homeContainer">
          <div >
        <span onClick={() => { 2 <= x ? setX(x - 1) : setX(images.length); }} style={{ cursor: 'pointer', marginRight: '-150px', fontSize: '100px', zIndex: '1.1'}} className="material-icons-outlined">chevron_left</span>
        <img src={images[x - 1].img} />
            <h1>{images[x -1].title}</h1>
        <span onClick={() => { images.length <= x ? setX(1) : setX(x + 1); }} style={{ cursor: 'pointer', marginLeft: '-150px', fontSize: '100px', zIndex: '1.1'}} className="material-icons-outlined">chevron_right</span>
          </div>
      </div>
      <About />
    </>
  )
}
export default Home