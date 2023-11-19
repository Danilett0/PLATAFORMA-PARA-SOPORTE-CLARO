import React from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import "../App.css";
import "../styles/pages/Home.css"

function Home() {
  return (
    <main className="HomePage">
      <div>
        <h1>Bienvenido a tu espacio <br/> de trabajo 💕 </h1>
        <Player
          autoplay
          loop
          src="https://lottie.host/fd2de7a2-2f38-4d24-8310-b32d79ec40c5/6G8WkLi1JX.json"
          className="Animation"
        ></Player>
        <Link
          className="Button Red"
          style={{ width: "300px", margin: "auto" }}
          to={"/SuportCos"}
        >
          Ingresar
        </Link>
        <code>By Daniletto</code>
      </div>
    </main>
  );
}

export default Home;
