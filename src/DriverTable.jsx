import React, { useState, useEffect } from "react";
import { db } from './firebaseConnection'
import { collection, getDocs } from 'firebase/firestore'

import { MdDelete  } from "react-icons/md";
import { LiaEdit   } from "react-icons/lia";


const DriverTable = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    carregar()
  }, []);

  const carregar = () => {
    const fetchDrivers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'drivers'));
        const driversList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setDrivers(driversList);
        setIsLoading(true)
      } catch (e) {
        console.error('Erro ao buscar motoristas: ', e);
      }
    };

    fetchDrivers();
  }


  return (
    <>
        {
          isLoading  == false ? 
          (
            <>
              <p className="msg-resp-db">Carregando...</p>
            </>
          ) : 
          (
            drivers.length == 0 ? (
              <p className="msg-resp-db">Nenhum registro encontrado!</p>
            ) :
            <>
              <table className="driver-table">
                <thead>
                  <tr>
                    <th>Nome do Motorista</th>
                    <th>Martícula</th>
                    <th>Data de Admissão</th>
                    <th>Status</th>
                    <th>Ação</th>
                  
                  </tr>
                </thead>
              <tbody>
            { 
              drivers.map((driver) => (
                <tr key={driver.id}>
                  <td>{driver.nome}</td>
                  <td>{driver.numeroCracha}</td>
                  <td>{driver.dataAdmissao || 'N/A'}</td>
                  <td>{driver.status}</td>
                  <td>
                    <button className="button"><MdDelete/></button>
                    <button className="button"><LiaEdit /></button>
                  </td>
                  

                </tr>
              ))
            }
             </tbody>
             </table>
            </>
          )
        }
    </>
  );
};

export default DriverTable;
