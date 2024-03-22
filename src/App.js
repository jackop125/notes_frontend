import { useState,useEffect } from "react";
import DisplayNotes from "./components/DisplayNotes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotesArea from "./components/NotesArea";

function App() {
  const [notes,setNotes] = useState([]);
  async function getDATA(){
    const resultData = await fetch("https://notes-api-navy.vercel.app/notes");
    let data = await resultData.json();
  console.log(data);
  data = data.reverse();
  setNotes(data)
  }
  useEffect(()=>{
    getDATA();
  },[])
  return (
    <>
      <Navbar />
      <NotesArea getDATA={getDATA} />
      <hr />
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          {
            notes.map((note)=><DisplayNotes title={note.title} desc={note.description} key={note._id} id={note._id} getDATA={getDATA}/>)
          }
          {/* <DisplayNotes title={notes.title} desc={notes.description}/> */}
         
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
