import './App.css';
import { UserDetailsView } from "./UserDetailsView";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserDetailsView pageNo={1}/>
      </header>
    </div>
  );
}

export default App;
