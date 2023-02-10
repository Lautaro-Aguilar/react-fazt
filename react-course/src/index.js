import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { NavBar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <TaskCard />
    <Button text="saludar" />

    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("enviado");
      }}
    >
      <h1>Registro de usuario</h1>
      <button>Send</button>
    </form>
    <input
      onChange={(e) => {
        console.log(e.target.value);
      }}
    ></input>
  </>
);
