import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import EventList from './pages/EventList';
import CreateEvent from './pages/CreateEvent';  // Nueva importación

const App = () => {
  const [user, setUser] = useState(null);

  const logout = () => {
    setUser(null);
    alert('Sesión cerrada.');
  };

  return (
    <Router>
      <Header user={user} logout={logout} />
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/create-event" element={<CreateEvent />} /> {/* Nueva ruta */}
        <Route path="/" element={<EventList />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
