import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

// this is the old way below
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Willow",
//       animal: "Dog",
//       breed: "Angel",
//     }),
//     React.createElement(Pet, {
//       name: "Sophie",
//       animal: "Cat",
//       breed: "Angel",
//     }),
//     React.createElement(Pet, {
//       name: "Brownie",
//       animal: "Dog",
//       breed: "Angel",
//     }),
//   ]);
// };
// old way too
// render(React.createElement(App), document.getElementById("root"));

// jsx way
render(<App />, document.getElementById("root"));
