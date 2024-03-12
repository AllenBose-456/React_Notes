import React from "react";
import "./note.css";


function Content({ props, onDelete, onUpdate,ser}) {
  return (
    <>
      {props.filter((item)=>{
        return(ser.toLowerCase() === '' ?item: item.date.includes(ser) || item.about.toLowerCase().includes(ser));
      }).map((item, index) => (
        <div 
          className="gdg col-lg-3 col-md-4 col-sm-6 col-8 bg mt-4 mb-5 me-3 ms-5 text-justify border border-5 border-white ms-4 me-5"
          key={index}
        >
          <p className="text-end me-3 text-danger">Date: {item.date}</p>

          <h2 className="text-center fw-bold">About: {item.about}</h2>
          <h4 className="text-start ms-2 bg-white">Notes: {item.text}</h4>
          <br/><br/><br/>
          <div className="row">
    <div className="col-md-6">
        <a
            href="#a"
            className="btn btn-outline-success text-start fs-6"
            onClick={() => onUpdate(index)}
        >
            Update
        </a>
    </div>
    <div className="col-md-6">
        <button
            className="btn btn-outline-danger abs text-end"
            onClick={() => onDelete(index)}
        >
            Delete
        </button>
    </div>
</div>
<br/>
        </div>
      ))}
    </>
  );
}

export default Content;
