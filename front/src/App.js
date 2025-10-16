import logo from './logo.svg';
import './App.css';
import { Routes,Route,BrowserRouter,Router } from "react-router-dom"
import Home from './components/Home/Home';
import Games from './components/Games/Games';
import NavTest from './components/NavComponent/NavTest';
import LoginPage from './components/LoginPage/LoginPage';

import Memory from './components/GamesEx/memory/memmoryGame';
import DragGame from './components/GamesEx/syllable/DragGame'; 
import QuestC from './components/QuestContainer/questC';

import UsrTopCon from './components/UsrTopCon/UsrTopCon';
import Leaderboard from './components/leaderboard/leaderboard';

import MsgC from './components/msgC/msgC';
import { createContext,useState } from 'react';
export const UserContext = createContext();
function App() {
  const [arr,setArr] = useState()
  /*
  function addMsg(){
        let arr1 = [...arr];
        arr1.push(1)
        setArr([...arr1])
  }*/
  function loadMsgs(obj){
    console.log("ok")
    //addMsg()
    setArr(obj)
    console.log(arr)
  }
  return (
    <div className="App">
      <UserContext.Provider value={loadMsgs}>
        <BrowserRouter>
          <NavTest></NavTest>
          <UsrTopCon></UsrTopCon>
          <div className="mainL">
              <Routes>
                
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/game' element={<Games></Games>}></Route>
                <Route path='/account' element={<LoginPage></LoginPage>}></Route>
                {/** games routes*/}
                <Route path='/memory' element={<Memory></Memory>}></Route>
                <Route path='/syllab' element={<DragGame></DragGame>}></Route>
                <Route path='/quests' element={<QuestC></QuestC>}></Route>
                <Route path='/leader' element={<Leaderboard></Leaderboard>}></Route>
              </Routes>
          </div>
        </BrowserRouter>
      </UserContext.Provider>
      <MsgC arr={{...arr}}></MsgC>
    </div>
  );
}

export default App;
