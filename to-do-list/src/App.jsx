import React from "react";
import { useState, useEffect } from "react";

import "./components/App.css";

const App = () => {
  const [toDoList, setToDoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fetchToDoData();
  }, []);

  async function fetchToDoData() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/todos");
      const result = await apiResponse.json();

      if (result?.todos && result?.todos.length > 0) {
        setToDoList(result?.todos);
        setLoading(false);
        setErrorMsg("");
      } else {
        setToDoList([]);
        setLoading(false);
        setErrorMsg("");
      }
    } catch (error) {
      console.log(error);
      setErrorMsg("Some error has happened");
    }
  }

  return (
    <div className="container">
      <h1>Simple To Do App</h1>
      <div className="cards-container"></div>
    </div>
  );
};

export default App;
