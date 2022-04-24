import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Search from './components/Search'


const App = () => {
  // using useState and deconstructuring of the state variables
  const [word, setWord] = useState('');
  // fetching state variables to test valuse
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
  }

  return (
    <div>
      <Header title="Images Gallery"/>
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
