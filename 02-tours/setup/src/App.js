import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const fetchTour = async () => {
    setLoading(true);
    try {
      const newLoad = await fetch(url);
      const tours = await newLoad.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTour();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  } else {
    return (
      <main>
        <Tours tours={tours} />
      </main>
    );
  }
}

export default App;
