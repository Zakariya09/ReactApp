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
import HoverCounter from './components/HoverCounter';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import User from './components/User';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
function App() {
  return (
    <div className="App">
      <PostForm></PostForm>
      {/* <PostList></PostList> */}
      {/* <UserProvider value="Zakariya">
      <ComponentC/>
      </UserProvider> */}
      {/* <ClickCounter2></ClickCounter2>
      <HoverCounter2></HoverCounter2>
      <User name={(isLoggedIn)=> isLoggedIn ? 'Zakariya': 'User'}/> */}
      {/* <ClickCounter name="Zakariya"></ClickCounter>
      <HoverCounter></HoverCounter> */}
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
