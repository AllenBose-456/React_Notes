import React, { useState } from "react";
import Content from "./note";

import "./addnoteform.css";

function Note() {
    const [data, setData] = useState({
        date: "",
        about: "",
        text: ""
    });
    const [newData, setNewData] = useState([]);
    const [edit, setEdit] = useState(false); 
    const [search,setSearch]=useState("");
    console.log(search)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSave = (e) => {
        e.preventDefault();
        console.log("Form data saved:", data);
        if (data.date && data.about && data.text) {
            if (edit || edit===0) { 
                setNewData(newData.map((item,index) => index === edit  ? data : item));
                setEdit(false);
            } else {
                setNewData([...newData, data]);
            }
            setData({
                date: "",
                about: "",
                text: ""
            });
        } else {
            alert("Please fill in all fields before saving.");
        }
    };

    const handleDelete = (index) => {
        setNewData(newData.filter((_, i) => i !== index));
    };

    const handleUpdate = (index) => {
        const update = newData.find((_, i) => i === index);
        if (update) {
            setData({
                date: update.date,
                about: update.about,
                text: update.text
            });
            setEdit(index); 
            console.log(index)
            console.log(edit)
        }
    };

    return (
        <div className="gg " >
            <div className="bg-black ">
                <h1 className="text-warning pt-3 pb-3 dd">NOTES_APEX</h1>
            </div>
            <div className="text-center">
                <h1 className="heading  w-25 ">No<span>T</span>es</h1>
            </div>
            <div className=" gg vv  row" id="a">
                <h1 className="text-center border-4 border-primary border-bottom text-black fw-bold h-25 pb-2 ms-2 w-25 position-relative col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ani hh">Create Notes <span className="text-danger ">=></span> </h1>
                
                <div className="pp w-25 text-center container-fluid mt-5  border-black col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12  ani">
                    <h1 className="fs-3 fw-bold dd form-container head  text-warning">NOTES</h1>
                    <h2></h2>
                    <form>
    <div class="row mb-3">
        <div class="col-12">
            <input id="date" value={data.date} class="form-control text-center" placeholder="DATE" type="date" name="date" onChange={handleChange} />
        </div>
    </div>
    <div class="row mb-3">
        <div class="col-12">
            <input id="about" value={data.about} class="form-control text-center" type="text" name="about" placeholder="ABOUT.." maxLength="10" onChange={handleChange} />
        </div>
    </div>
    <div class="row mb-3">
        <div class="col-12">
            <textarea id="note" value={data.text} class="form-control" rows="9" placeholder="write notes here" name="text" onChange={handleChange}></textarea>
        </div>
    </div>
   <div className="text-center">
            <button onClick={handleSave} class="btn btn-warning ">{edit !== false ? "UPDATE" : "SAVE"}</button>
            </div>
</form>

                    <br />
                </div>
                
                </div>
                <div className="ee">
                <h1 className="text-center fw-bold text-primary border-4 border-dark border-bottom w-25 ms-5 pb-2 mt-3 ani" >My Notes</h1><br/>
             
                 <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="search by date/about" className="form-control w-50 border-dark border-4 ms-3 me-5 " /><br/><br/>
                 
                <div className="row">
                    <Content props={newData} onDelete={handleDelete} onUpdate={handleUpdate} ser={search} />
                </div>
                </div>
            
        </div>
    );
}
export default Note;
