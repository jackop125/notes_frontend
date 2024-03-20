import { useState,useEffect } from "react";
import DisplayNotes from "./components/DisplayNotes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotesArea from "./components/NotesArea";

function App() {
  const [notes,setNotes] = useState([]);
  useEffect(()=>{
    (async()=>{
      const resultData = await fetch("https://notes-api-navy.vercel.app/notes");
      const data = await resultData.json();
    console.log(data);
    setNotes(data)
    })();
  },[])
  return (
    <>
      <Navbar />
      <NotesArea />
      <hr />
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          {
            notes.map((note)=><DisplayNotes title={note.title} desc={note.description} key={note._id} id={note._id}/>)
          }
          {/* <DisplayNotes title={notes.title} desc={notes.description}/> */}
         
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}

export default App;
