import './App.css';
import InputArea from '../components/InputArea/InputArea.jsx';
import ToDoList from '../components/ToDoList/ToDoList.jsx';
import FilterArea from '../components/FilterArea/FilterArea.jsx';

function App() {
  return (
    <div className="App">
      <InputArea />
      <FilterArea />
      <ToDoList />
    </div>
  );
}

export default App;
