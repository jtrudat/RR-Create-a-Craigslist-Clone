// Import data


// Import components
import './App.css';
import Gallery from './components/gallery'
import Directory from './components/directory'
import Help from './components/help'
import Postings from './components/postings'
import Searchbar from './components/searchbar'
import Sidebar from './components/sidebar'

function App(){
  return (
    <div>
      <h1>Craigslist</h1>
      <div className="App">
        <Gallery/>
        <Directory/>
        <Help/>
        <Postings/>
        <Searchbar/>
        <Sidebar/>
        {/* Your content will go here! */}
      </div>
    </div>
  );
}

export default App;
