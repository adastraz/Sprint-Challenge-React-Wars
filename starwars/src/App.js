import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'
import Names from './components/Names.js'
const App = () => {

  const [people, setNames] = useState([])

  useEffect(() => {
    axios.get('https://swapi.co/api/people')
      .then(response => {
        console.log(response)
        setNames(response.data.results)
      })
      .catch(err =>{
        console.log(err)
      })
  },[])
  console.log(people)

  // for(let i=0;i<people.length;i++){
  //   console.log(people[i])
  // }
  return (
    <div className="App">
      {
        people.map(x => {
          return(
            <Names name={x}/>
          )
        })
      }
    </div>
  );
}

export default App;
