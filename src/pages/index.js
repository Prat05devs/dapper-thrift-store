import { useEffect, useState } from "react"; 
import { Menu } from "lucide-react";
import Button from "@/components/ui/button";  // ✅ CORRECT
// import Button from "../components/ui/button"; // ❌ WRONG
import Navbar from "@/components/navbar";     // ✅ CORRECT
import Footer from "@/components/footer";     // ✅ CORRECT
import LandingPage from "@/components/landingPage";

export default function Home() {
  const [data, setData] = useState(""); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5001/");
        const text = await res.text();
        setData(text);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <title>Dapper.</title>
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
  
}
