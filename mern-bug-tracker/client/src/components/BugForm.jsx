import { useState } from "react";
import axios from "axios";

export default function BugForm({ refresh }) {
  const [title, setTitle] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/bugs", { title });
    refresh();
  };

  return (
    <form onSubmit={submit}>
      <input
        placeholder="Bug title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Add Bug</button>
    </form>
  );
}
