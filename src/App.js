import './App.css';
import Navigation from "./components/Navigation.js"
import Journey from "./components/Journey.js"
import Journey_Data from "./components/Journey_Data.js"
import Footer from "./components/Footer.js"

function App() {

  const journeys = Journey_Data.map(item => {
    return (
      <Journey
        key = {item.id}
        item = {item}
      />
    )
  })

  return (
    <div className="App">
      <Navigation/>
      {journeys}
      <Footer/>
    </div>
  );
}

export default App;
