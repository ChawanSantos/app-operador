// import { useState, useEffect } from 'react'
import Sidebar from './Sidebar';
import DriverTable from './DriverTable';
import AddDriver from './AddDriver';
import './App.css'

import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConnection';

// function App() {
  
//   useEffect(()=>{
//     async function Carregar(){

//       alert('vai enviar para o firebase')
//       addDoc(collection(db, 'bilhete'), {
//         nome: 'chawan'
//       })
//       .then((docRef) => {
//         console.log("Motorista adicionado com ID: ", docRef.id);
//       })
//       .catch((error) => {
//         console.error("Erro ao adicionar motorista: ", error);
//       });


//     }
//     Carregar()
//   },[])

//   return (
//     <>
//       <h1>Hello World</h1>
        
//     </>
//   )
// }


const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <main>
        <header className="app-header">
          <h1>Controle de Operador</h1>
        </header>
        <section className="driver-section">
          <div className="driver-search-add">
            <input type="text" placeholder="Buscar Motorista..." className="search-bar" />
           
          </div>
          <DriverTable />
          <AddDriver />
        </section>
      </main>
    </div>
  );
};

export default App;


