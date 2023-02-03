import { useEffect, useState } from "react";
import Pagination from "./Components/Pagination";
import "./App.css";

function App() {
  const [data, setdata] = useState([]);
  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((receivedData) => setdata(receivedData));
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <Pagination data={data} />
    </div>
  );
}

export default App;
