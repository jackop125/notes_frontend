import React, { useEffect, useState } from "react";

const NotesArea = () => {
  const [inputNote, setInputNote] = useState({
    title: "",
    description: "",
  });
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-10 col-lg-6 p-2">
            <form className="d-flex flex-column notes_input p-2 position-relative">
              <input
                type="text"
                value={inputNote.title}
                onChange={(e) => {
                  setInputNote((prevData) => {
                    return {
                      ...prevData,
                      [e.target.name]: e.target.value,
                    };
                  });
                }}
                placeholder="Title Here"
                name="title"
                className="title_input"
              />
              <hr />
              <textarea
                className="description_input"
                name="description"
                value={inputNote.description}
                placeholder="value Here"
                onChange={(e) => {
                  setInputNote((prevData) => {
                    return {
                      ...prevData,
                      [e.target.name]: e.target.value,
                    };
                  });
                }}
              ></textarea>
              <span className="position-absolute top-100 start-50 translate-middle">
                <button className="col-auto ms-2 btn btn-danger ">Clear</button>
                <button
                  className="col-auto ms-2 btn btn-warning "
                  onClick={(e) => {
                    e.preventDefault();
                    const POSTDATA =JSON.stringify({
                      ...inputNote
                    });
                    (async()=>{
                        const result = await fetch("https://notes-api-navy.vercel.app/notes",{
                          method:"POST",
                          body:POSTDATA ,
                          headers: {
                            'Content-Type': 'application/json', // Specify the content type of the request body
                          },
                        })
                        console.log(await result.json());
                    })()
                  }}
                >
                  Add
                </button>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotesArea;
