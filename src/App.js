import React, { useEffect, useState } from "react";
import "./App.css";
import { storage } from "./firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";

const App = () => {
  const [image, Setimage] = useState(null);
  const [imageList, setImagelist] = useState([]);
  const imageListRef = ref(storage, "images/");
  const fileHandler = (event) => {
    Setimage(event.target.files[0]);
  };
  const UploadHandler = () => {
    if (image === null) return;
    const imageRef = ref(storage, `images/${image.name}`);
    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        return setImagelist((prev) => [...prev, url]);
      });
    });
  };
  useEffect(() => {
    listAll(imageListRef).then((res) =>
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImagelist((prev) => [...prev, url]);
        });
      })
    );
  }, []);
  return (
    <React.Fragment>
      <h1 className="head container"> NftVerse Upload Images</h1>
      <div className="container">
        <div className="drop">
          <label htmlFor="file">Upload Images Here</label>
          <input
            id="file"
            type="file"
            onChange={fileHandler}
            className="input"
            accept="image/*"
          />
        </div>
        <button onClick={UploadHandler}>Upload</button>
      </div>
      {imageList.map((image) => {
        console.log(image);
        return (
          <div className="imagecontainer">
            <img src={image} className="image" />
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default App;
