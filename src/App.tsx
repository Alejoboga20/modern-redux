import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { decrement, increment, amountAdded } from './features/counter/counterSlice'
import { useFetchBreedsQuery } from './features/dogs/dosgApiSlice'

function App() {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  const handleClick = () => dispatch(increment())
  const handleAddAmount = () => dispatch(amountAdded(10))

  const {data = [], isFetching, isError} = useFetchBreedsQuery();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={handleClick}>
            count is: {count}
          </button>
        </p>
        <p>
          <button type="button" onClick={handleAddAmount}>
            count is added with amount of 10: {count}
          </button>
        </p>
        <div>
          <p>
            Number of Dogs fetch: {data.length}
          </p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {data.map(breed => (
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td><img src={breed.image.url} alt={breed.name} height={250}/></td>
                </tr>))}
            </tbody>
          </table>
        </div>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
