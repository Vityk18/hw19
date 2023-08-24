import React from "react";
import {photosList} from "../../constants/photos";
import "./photos.css"

const Photos = () => {
  return (
      <div className="block">
        <div>
          {photosList.map(({src, id}) => (
            <img className="images"
                 key={id}
                 src={src}
                 alt={id}/>
          ))}
        </div>
      </div>
  )
}
export default Photos;
