import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'

const App = () => {
  
  const thisIsBS= [1,2,3,4,5]

  const [people, setNames] = useState('')

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
  console.log(people.length)
  thisIsBS.map(x => {
    console.log(x)
  })
  for(let i=0;i<people.length;i++){
    console.log(people[i])
  }

  const letsSee = () => {
    for(let i=0;i<people.length;i++){
      return (
        <>{people[i].name}</>
        )
    }
  }
  return (
    <div className="App">
      {
        letsSee()
      }
    </div>
  );
}

export default App;
