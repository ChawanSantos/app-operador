import React, { useState } from 'react';
import { db } from './firebaseConnection'
import { collection, addDoc } from 'firebase/firestore';


import DriverTable from './DriverTable';

const AddDriver = () => {
  const [nome, setNome] = useState('');
  const [numeroCracha, setNumeroCracha] = useState('');
  const [status, setStatus] = useState('Ativo');

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Referência à coleção de motoristas no Firestore
      const docRef = await addDoc(collection(db, 'drivers'), {
        nome: nome,
        numeroCracha: numeroCracha,
        status: status
      });
      console.log('Motorista Adicionado com ID:', docRef.id);

      // Limpa o formulário após a submissão
      setNome('');
      setNumeroCracha('');
      setStatus('Ativo');
      DriverTable.carregar;
    } catch (e) {
      console.error('Erro ao adicionar motorista: ', e);
    }
  };

  return (
    <form className="add-driver-form" onSubmit={handleSubmit}>
      <div>
        <label>Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Número do Crachá</label>
        <input
          type="text"
          value={numeroCracha}
          onChange={(e) => setNumeroCracha(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Status</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Ativo">Ativo</option>
          <option value="Inativo">Inativo</option>
        </select>
      </div>
      <button type="submit">Adicionar Motorista</button>
    </form>
  );
};

export default AddDriver;
