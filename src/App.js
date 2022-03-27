import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";

export default function App() {
  AOS.init({ once: true, duration: 400 });

  return (
    <>
      <Navbar />
    </>
  );
}
