import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'
import Names from './components/Names.js'
import ApiKey from './components/ApiKey.js'
const App = () => {

  const [people, setNames] = useState([])
  const [apiKey, setApiKey] = useState ('https://swapi.co/api/people')
  const [nextApiKey,setNextApiKey] = useState('')
  const [previousApiKey, setPreviousApiKey] = useState('')
  const [directApiKey,setDirectApiKey] = useState('https://swapi.co/api/people/?page=')
  const [numOfPages,setNumOfPages] = useState('1')

  useEffect(() => {
    axios.get(apiKey)
      .then(response => {
        console.log(response)
        setNames(response.data.results)
        setNextApiKey(response.data.next)
        setPreviousApiKey(response.data.previous)
      })
      .catch(err =>{
        console.log(err)
      })
  },[apiKey])
  console.log(people)
const clickHandler = (buttonType) => {
  switch (buttonType){
    case 'next':
      setApiKey(nextApiKey)
      break;
    case 'previous' :
      setApiKey(previousApiKey)
      break;
    default:
      setApiKey(nextApiKey)
  }
}
  // for(let i=0;i<people.length;i++){
  //   console.log(people[i])
  // }
  return (
    <div className="App">
      <ApiKey 
      content = 'Previous'
      clickHandler = {clickHandler}
      styling = 'PreviousButton'
      type='previous'
      />
      {
        people.map(x => {
          return(
            <Names name={x}/>
          )
        })
      }
      <ApiKey 
      content = 'Next'
      clickHandler = {clickHandler}
      styling = 'NextButton'
      type='next'
      />
    </div>
  );
}

export default App;
