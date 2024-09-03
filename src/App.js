import logo from './logo.svg';
import './App.css';
import { Heading, Text } from '@chakra-ui/react';
import Footer from './component/Footer';
import Homecard from './component/Homecard';

function App() {
  return (
    <div className="App">
      <Homecard />
      <Footer />
    </div>
  );
}

export default App;
