import { useState } from "react";

function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "#2874f0",
      padding: "10px 20px",
      color: "white"
    }}>