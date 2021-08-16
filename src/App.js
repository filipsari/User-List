import { Fragment} from 'react';
import {Header} from './Components/Header/Header';
import {Footer} from './Components/Footer/Footer';
import { UserList} from './Components/UserList/UserList';


import './App.css';

function App() {
  return (
   <Fragment> 

    <Header/> 
   <UserList/> 
    <Footer/> 

   </Fragment>
  );
}

export default App;
