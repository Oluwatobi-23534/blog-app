import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import About from "./pages/About/About";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Dashboard from "./pages/Admin/Dashboard";
import BlogPostPage from "./pages/Blog/BlogPostPage";
import Header from "./components/Navigation/Header";
import CreatePostPage from "./pages/Blog/CreatePostPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/blog-post" element={<BlogPostPage/>} />
        <Route path="/create-post" element={<CreatePostPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
