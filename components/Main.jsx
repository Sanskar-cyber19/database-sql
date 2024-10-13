"use client";
import { useState } from "react";
import { Sidebar } from "./Sidebar";

export function Layout({ children }) {
  const [style, setStyle] = useState({
    marginLeft: "15%",
    width: "85%",
  });
  return (
    <main style={{display:"flex"}}>
      <Sidebar />
      <div style={{ marginLeft: "15%", width: "85%" }}>{children}</div>
    </main>
  );
}
