import React, {FC} from 'react';
import './App.css';
import Footer from './app/components/Footer';
import Header from './app/components/Header';
import Main from './app/components/Main';


const App: FC = () => {
  return (
    <div className="App">
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
