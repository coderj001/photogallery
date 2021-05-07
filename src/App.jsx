import React, { useState } from "react";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";

function App() {
  const [selecteImg, setSelectImg] = useState(null);

  function selecteImagaHandler(img) {
    setSelectImg(img);
  }
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid selecteImagaHandler={selecteImagaHandler} />
      {selecteImg && <Modal image={selecteImg} setSelectImg={setSelectImg} />}
    </div>
  );
}

export default App;
