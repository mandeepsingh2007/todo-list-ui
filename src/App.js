import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className='bg-gradient-to-r from-indigo-500 via-teal-400 to-yellow-300 grid py-4 min-h-screen'>
      <Todo/>
    </div>
  );
}

export default App;
