import React from 'react';
import Header from "./components/Header";
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import Count from "./components/Count";
import Footer from "./components/Footer";
import './styles.css'
import {useState} from 'react';


function App(props) {
  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes((prevValue)=>{
      return [...prevValue, newNote];
    });
  }

  function deleteNotes(id) {
    setNotes((preValue) => {
      localStorage.removeItem(id+1);
      return [...preValue.filter((note, index) => index !== id)];
    });
  }

  function allStorage() {
    var keys = Object.keys(localStorage),
    totalItems = keys.length;
    return totalItems;
  }
  
  var indexVal = allStorage();
  let values = localStorage.getItem(indexVal);
  // const noteValues = JSON.parse(values);

  return (
    <div className="App">
      <Header/>
      <Count
        count={
          notes.length === 0
            ? "No records"
            : `Showing ${notes.length} Note(s)`
        }
      />
      <CreateArea onAdd={addNote} />
      
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          localContent = {values}
          title={note.title}
          content={note.content}
          onDelete={deleteNotes}  
        />
      ))}

      <Footer />
      
    </div>
  );
}

export default App;
