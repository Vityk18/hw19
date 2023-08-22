import "./App.css";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./pages/main/Main.js";
import Posts from "./pages/posts/Posts.js";
import Photos from "./pages/photos/Photos";
import Contacts from "./pages/contacts/contacts";

function App() {
  return (
    <Router>
      <div>
        <nav className="navigation">
          <Link to="/hw19/">Main</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/photos">Photos</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
