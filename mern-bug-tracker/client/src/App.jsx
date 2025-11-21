import { useEffect, useState } from "react";
import BugForm from "./components/BugForm";
import BugList from "./components/BugList";
import ErrorBoundary from "./components/ErrorBoundary";
import axios from "axios";

export default function App() {
  const [bugs, setBugs] = useState([]);

  const fetchBugs = async () => {
    const res = await axios.get("http://localhost:5000/api/bugs");
    setBugs(res.data);
  };

  useEffect(() => {
    fetchBugs();
  }, []);

  return (
    <ErrorBoundary>
      <h1>Bug Tracker</h1>
      <BugForm refresh={fetchBugs} />
      <BugList bugs={bugs} />
    </ErrorBoundary>
  );
}
