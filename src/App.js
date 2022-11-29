import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Places from "./components/Places"
import data from "./data"

function App() {
  let place = data.map(location => {
    return <Places 
              key={location.id}
              location={location}
            />
  })
  return (
    <body>
      <Header />
      {place}
    </body>
  );
}

export default App;
