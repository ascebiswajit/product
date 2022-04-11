import React from 'react';
import Products from './component/Products';
import New from './component/New';
import './App.css';
import Details from './component/Details';
import Edit from './component/Edit';

import{BrowserRouter as Router,Routes,Route,useParams,Navigate} from 'react-router-dom'

function App() {
  return (
  <>
  <Router>
    <Routes>
      <Route path="/" element={<Products/>}/>
      {/* <Route path="/products" element={<Navigate replace to="/"/>}/> */}
        <Route path="/products/:id" element={<Details/>}/>
      
           
      
      <Route path="/show" element={<Details/>}/>
      <Route path="new" element={<New/>}/>
      
    </Routes>
  </Router>
     
     {/* <New/> */}
     {/* <Edit/>
     <Details/> */}
     

  </>
  );
}

export default App;
