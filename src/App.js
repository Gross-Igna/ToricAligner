import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarHeader from './components/BarHeader';
import Input from './components/Input';

function App() {

  
  

  return (
    <div className="App">

      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;1,700&display=swap" rel="stylesheet"></link>

      <BarHeader />
      <Input />

    </div>
  );
}

export default App;
