import './App.css';
import Greet from './components/Greet';
import { Welcome } from "./components/Welcome";
import { Message } from "./components/Message";
import Parent from './components/Parent';
import Forms from './components/Forms';
import Fragment from './components/Fragment'
import { Portals } from "./components/Portals";
import Hero from './components/Hero';
import ErrorBoiundary from './components/ErrorBoiundary';
import ClickCounter from './components/ClickCounter';
function App() {
  return (
    <div className="App">
      <ClickCounter></ClickCounter>
      {/* <ErrorBoiundary>
      <Hero heroName ="BATMAN"></Hero>
      </ErrorBoiundary>
      <ErrorBoiundary>
      <Hero heroName ="Joker"></Hero> */}
      {/* </ErrorBoiundary> */}
      {/* <Portals></Portals> */}
      {/* <Fragment></Fragment> */}
      {/* <Forms></Forms> */}
      {/* <Parent></Parent> */}
      {/* <Greet name="Zakariya" power="Developer"></Greet>
      <Welcome name="Zakariya" power="BATMAN"></Welcome>
      <Message></Message> */}
    </div>
  );
}

export default App;
