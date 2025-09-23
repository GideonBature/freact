import { Routes, Route } from 'react-router-dom';
import './App.css';
import Todo from './components/TodoList/TodoList';
import TodoPage from './pages/TodoPage/TodoPage';
import About from './pages/About';
import QuotePage from './pages/QuotePage/QuotePage';
import UserPage from './pages/UserPage/UserPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/todos' element={<TodoPage />} />
        <Route path='/quotes' element={<QuotePage />} />
        <Route path='/users' element={<UserPage />} />
        <Route path='/' element={<Todo />} />
        <Route path='/about' element={<About />} />
      </Routes>
      {/* <Todo /> */}
    </>
  )
}

export default App
