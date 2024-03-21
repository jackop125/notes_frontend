import EditNotes from "./EditNotes";
const DisplayNotes = (props) => {
  // console.log(props.key);
  return (
    <>
      <div className="col-11 col-md-5 col disp_notes_container offset-1 m-1">
        <p className="disp_notes_title">{props.title}</p>
        <hr />
        <p className="disp_notes_description">{props.desc}</p>
        <button
          className="btn btn-danger m-1 delete-btn"
          onClick={(e) => {
            (async () => {
              const result = await fetch(
                `https://notes-api-navy.vercel.app/notes/${props.id}`,
                {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json", // Specify the content type of the request body
                  },
                }
              );
              if (result.status === 200 && result.ok === true) {
                // alert("Note Added");
                props.getDATA();
              }
              console.log(await result);
            })();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
          </svg>
        </button>
        <EditNotes title={props.title} desc={props.desc} id={props.id}/>
        
      </div>
    </>
  );
};

export default DisplayNotes;
