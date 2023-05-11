import logo from './logo.svg';
import {Routes, Route, Link} from 'react-router-dom'
import React,{useState} from 'react';
import Home from './pages/Home';
import ThongKe from './pages/ThongKe';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
function App() {
  const [country, setCountr] = useState("vietnam");
  const [isShowForm, setIsShowForm] = useState(false);
  const searchHandler = (e) =>{
    setCountr(e);
  }
  return (
    <div className="App">
      <Header onSearch={searchHandler} isShowForm={isShowForm} a ={1}/>
      <Routes>
        <Route path="/" element={<Home setIsShowForm={setIsShowForm}/>}/>
        <Route path="/thongke" element={<ThongKe setIsShowForm={setIsShowForm} country={country}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
