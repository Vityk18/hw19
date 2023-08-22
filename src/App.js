import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from "./pages/main/Main.js";
import Posts from "./pages/posts/Posts.js";
import Photos from "./pages/photos/Photos";
import Contacts from "./pages/contacts/contacts";

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
        <Route path="/hw19/" element={<Main />} />
        <Route path="/hw19/posts" element={<Posts />} />
        <Route path="/hw19/photos" element={<Photos />} />
        <Route path="/hw19/contacts" element={<Contacts />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
