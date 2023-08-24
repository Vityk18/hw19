import "./App.css";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./pages/main/main.js";
import Posts from "./pages/posts/posts.js";
import Photos from "./pages/photos/photos";
import Contacts from "./pages/contacts/contacts";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <div>
        <nav className="navigation">
          <Link to="/">Main</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/photos">Photos</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contact/:id" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
