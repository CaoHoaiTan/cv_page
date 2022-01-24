import Contact from './components/contact.js'
import Education from './components/education.js'
import './App.css';


function App() {
  return (
    <div className="App">
        <div className="introduce">
            <Contact />
            <Education />
        </div>
    </div>
  );
}

export default App;
