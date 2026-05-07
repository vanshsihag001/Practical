<<<<<<< HEAD
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
=======
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter App</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment Button </button>
      <button onClick={() => setCount(count - 1)}>Decrement Button</button>
      <button onClick={() => setCount(0)}>Reset Button</button>
    </div>
>>>>>>> a913a4e845e30b9a5f215e7bb050695df31fcff8
  );
}

export default App;