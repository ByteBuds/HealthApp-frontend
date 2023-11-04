import React from 'react';
import logo from './logo.svg';
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import LandinPage from './routes/LandingPage';
import Profile from './routes/Profile';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';


function App() {
  const theme = createTheme({
    palette: {
      // primary: {
      //   main: "#034c81"
      // },
      // secondary: {
      //   main: "#fff"
      // }
    }
  })
  return (
    <div className="">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />

          <Route path="/home" element={<LandinPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
