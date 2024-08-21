import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth"; // Importa onAuthStateChanged y signOut
import { auth } from '../firebase'; // Asegúrate de importar tu instancia de auth
import CreateTaskCard from './CreateTaskCard';
import TaskCardsList from './TaskCardsList';
import Login from '../views/Login';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Limpia el listener cuando el componente se desmonta
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Sesión cerrada con éxito");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  if (!user) {
    return <Login />;
  }

  return (
    <div style={{padding: '20px'}}>
      <h1>Gestión de Trabajos y Mantenciones</h1>
      <button onClick={handleLogout}>Cerrar Sesión</button>
      <hr />
      <CreateTaskCard />
      <hr />
      <TaskCardsList />
    </div>
  );
};

export default Dashboard;