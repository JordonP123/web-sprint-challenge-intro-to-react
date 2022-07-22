import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Character from './components/Character';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setPeople] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=>{
    axios.get(`https://swapi.dev/api/people`)
    .then(res=>{
      setPeople(res.data.results)
    })
    .catch(err=>{
      console.log(err)
    })
  }, [])

  console.log(people)
  return (
    <div className="App">
      <h1 className="Header">REACT WARS</h1>
      {
      people.map(e=>
        <Character key={e.height} people={e.name} date={e.birth_year}/>
      )
      
      }    
    </div>
  );
}

export default App;
