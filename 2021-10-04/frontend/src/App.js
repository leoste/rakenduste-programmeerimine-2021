import './App.css';
import {Route} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import AddItem from './pages/AddItem';
import AddCategory from './pages/AddCategory';
import ViewCategory from './pages/ViewCategory';

function App() {
  return (
    <div>
      <Navbar />
      <Greetings name={"Raimo"}/>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/cart'>
        <Cart />
      </Route>
      <Route path='/add-item'>
        <AddItem />
      </Route>
      <Route path='/add-category'>
        <AddCategory />
      </Route>
      <Route path='/view-category'>
        <ViewCategory />
      </Route>
    </div>
  );
}

export default App;
