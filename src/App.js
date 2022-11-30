import './App.css';
import Header from "./components/Header"
import Places from "./components/Places"
import data from "./data"

function App() {
  let place = data.map(location => {
    return <Places 
              key={location.id}
              {...location}
            />
  })
  return (
    <main>
      <Header />
      {place}
    </main>
  );
}

export default App;
