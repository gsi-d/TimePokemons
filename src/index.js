import ReactDOM from "react-dom";
import App from "./App";
import "./reset.css";
import "./styles.css";

const pokemons = [
  { nome: "bulbasaur", numero: 1 },
  { nome: "charmander", numero: 4 },
  { nome: "squirtle", numero: 7 },
  { nome: "ekans", numero: 23 },
  { nome: "pikachu", numero: 25 },
  { nome: "jigglypuff", numero: 39 },
  { nome: "meowth", numero: 52 },
  { nome: "growlithe", numero: 58 },
  { nome: "geodude", numero: 74 }
];

ReactDOM.render(<App pokemons={pokemons} />, document.querySelector(".root"));
