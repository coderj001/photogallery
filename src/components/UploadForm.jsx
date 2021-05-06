import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";

function UploadForm() {
  const [file, setFile] = useState(null);
  const [err, setErr] = useState(null);

  const fileTypes = ["image/jpg", "image/jpeg", "image/png"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && fileTypes.includes(selected.type)) {
      setFile(selected);
      setErr(null);
    } else {
      setFile(null);
      setErr("Please selecte correct file format.");
    }
  };

  return (
    <form>
      <input type="file" onChange={changeHandler} />
      <div className="output">
        {err && <div className="error">{err}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
}

export default UploadForm;
