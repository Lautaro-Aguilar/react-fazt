import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { NavBar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Posts } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Posts />
  </>
);
