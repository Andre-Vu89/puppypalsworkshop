import { useState } from 'react'
import './App.css'
import Lincoln from './components/Lincoln';

function App() {
  const [count, setCount] = useState(0)
  const [bestDog, setBestDog] = useState (null)
console.log(bestDog);

const dogs = [
  { name: "Logan", breed: "Italian Greyhound", age: 14 },
  { name: "Chase", breed: "Italian Greyhound", age: 12 },
  { name: "Lincoln", breed: "Mixed Rescure", age: 5 },
];

  return (
    <>
      <h1>Vite + React</h1>
      {/* <h2>{bestDog} is the best dog!</h2> */}
      {bestDog ? <h2>{bestDog} is the best dog!</h2> : null}
      {dogs.map((dog) => {
  return <p key={dog.name}onClick={() => setBestDog(dog.name)}>{dog.name} is a {dog.age} year old {dog.breed}.</p>;
})}

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Lincoln says the count is {count}
        </button>
      </div>
    </>
  )
}

export default App
