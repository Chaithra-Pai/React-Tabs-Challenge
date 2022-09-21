import './App.css';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App">
      <Tabs>
        <div title={"Section 1"}>Content of section 1</div>
        <div title={"Section 2"}>Content of section 2</div>
        <div title={"Section 3"}>Content of section 3</div>
      </Tabs>
    </div>
  );
}

export default App;
