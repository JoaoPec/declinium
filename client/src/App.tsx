import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { PrivateRoute } from './routes/PrivateRoute';
import Main from './pages/Main';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CharactersPage from './pages/CharactersPage';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<Main />} />
          <Route
            path="/characters"
            element={<PrivateRoute><CharactersPage /></PrivateRoute>}
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
