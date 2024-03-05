import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LanguageContext } from './language.context';
import axios from 'axios'
import HomePage from './pages/HomePage';
import _404Page from './pages/404Page';
import LoadingScreen from './components/LoadingScreen';
import MagnaLandingPage from './pages/MagnaLandingPage';
import MrWipeLandingPage from './pages/MrWipeLandingPage';
import AgenciesPage from './pages/AgenciesPage';
import WebAppsPage from './pages/WebAppsPage';
import FormSubmited from './pages/FormSubmited';
import { ToastContainer } from 'react-toastify';

function App() {

  const { strings, language, setLanguage } = useContext(LanguageContext);

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    setLoading(false)

    axios
      .get("https://ipapi.co/json/")
      .then((response) => {

        const { data } = response
        const { country } = data

        if (country == "PT" || country == "AO" || country == "MZ" || country == "BR"
          || country == "ST" || country == "GW" || country == "CV") {
          setLanguage("PT")
        }
        else if (country == "JP") {
          setLanguage("JP")
        }
        else if (country == "FI") {
          setLanguage("FI")
        }
        else {
          setLanguage("EN")
        }

        setLoading(false);

      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (
    <Router>
      <ToastContainer />
      {loading
        ? <LoadingScreen />
        :
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Magna" element={<MagnaLandingPage />} />
          <Route path="/MrWipe" element={<MrWipeLandingPage />} />
          {/* <Route path="/agencies" element={<AgenciesPage />} /> */}
          <Route path="/webapps" element={<WebAppsPage />} />
          <Route path="/formSubmited" element={<FormSubmited />} />
          <Route path="*" element={<_404Page />} />
        </Routes>
      }
    </Router>
  );
}

export default App;
