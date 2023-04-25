
// import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';
// import Login from './Components/login';
// import Register from './Components/register';
import QuizComp from './Components/QuizCompo';
function App() {
  // const [currentForm, setCurrentForm] = useState('login');

// const toggleForm = (formName) => {
//   setCurrentForm(formName);
// }

  return (
    <div className="App">
      <h1>Quiz App in React</h1>
      <QuizComp/>
     {/*{
      // currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
    } */}
     
    </div>
  );
}

export default App;
