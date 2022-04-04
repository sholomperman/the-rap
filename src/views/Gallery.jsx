import {useState} from 'react'

const Gallery = ({ apiGallery }) => {
  const [imgBig, setImgBig] = useState(null)

  return (
    <div className="galleryContainer">
      <div className="topGallery">
        <h1>Our pic's of the year</h1>
      </div>
      <div className="bottomGallery">
        {
          apiGallery?.map((i) => (
          <div onClick={() => setImgBig(i.id)} key={i.id}>
            <img src={i.attributes.image.data[0].attributes.caption} alt="" />
          </div>
          ))
        }
      </div>
        {
          imgBig ?
          <div className="imgBigContainer">
            <span onClick={() => setImgBig(null)} className="material-icons-round ex">close</span>
            <img className="imgBig" src={apiGallery[imgBig - 1].attributes.image.data[0].attributes.caption} alt="" />
          </div> : <></>
        
        }
    </div>
  )
}

export default Gallery