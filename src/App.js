// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './Component/Main';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Layout/Routing';

<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap" rel="stylesheet"></link>


function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routing/>
      </BrowserRouter>
    </div>
  );
}

export default App;
