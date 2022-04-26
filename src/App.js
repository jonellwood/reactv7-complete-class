import { render } from "react-dom";
import { StrictMode, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("#f06d06");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <header>
            <Link to="/">Adopt Me</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
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
