"use client";
import styles from "@/styles/page.module.css";
import { Button } from "@/ui/Button";
import { Input } from "@/ui/Inputs";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState('');
  const [json,setJson] = useState([])
  const [data,setData] = useState("")

  const handle = async () => {
    try {
      const res = await fetch("/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set content type for JSON
        },
        body: JSON.stringify({ name,json }),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const jsondata = await res.json(); // Await the response and parse JSON
      console.log(jsondata);
    } catch (error) {
      console.error("Error calling API:", error);
    }
  };

  const handleJson = ()=>{
    json.push(data)
  }

  return (
    <main className={styles.main}>
      <Input value={name} onChange={(e) => setName(e.target.value)} />
      <Input value={data} onChange={(e)=>setData(e.target.value)}/>
      <Button onClick={handle}>Call API</Button>
      <Button onClick={handleJson}>Add Data</Button>
    </main>
  );
}
