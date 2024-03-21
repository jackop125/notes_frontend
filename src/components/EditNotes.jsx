import { useState } from "react";

const EditNotes = (props) => {
    const [Note,setNote] = useState({
        title:props.title,
        description:props.desc,
        id:props.id
    })
  return (
    <>
      <button
        className="btn btn-success m-1 edit-btn"
        type="button"
        data-bs-toggle="modal"
        data-bs-target={`#${Note.id}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-pencil-square"
          viewBox="0 0 16 16"
        >
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path
            fillRule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
          />
        </svg>
      </button>

      <div
        className="modal fade"
        id={`${Note.id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog bg-dark">
          <div className="modal-content bg-dark">
            <div className="modal-header bg-dark">
              <h1 className="modal-title bg-dark fs-5" id="exampleModalLabel">
                Edit 
              </h1>
              <button
                type="button"
                className="btn-close bg-light "
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Note Title
                </label>
                <input
                style={{color:"white",backgroundColor:"transparent"}}
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name="title"
                  value={Note.title}
                  onChange={(e)=>{
                    setNote((prevData)=>{
                        return {
                            ...prevData,
                            [e.target.name]:e.target.value
                        }
                    })
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Note Description
                </label>
                <textarea
                style={{color:"white",backgroundColor:"transparent"}}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="4"
                  name="description"
                  value={Note.description}
                  onChange={(e)=>{
                    setNote((prevData)=>{
                        return {
                            ...prevData,
                            [e.target.name]:e.target.value
                        }
                    })
                  }}
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditNotes;
