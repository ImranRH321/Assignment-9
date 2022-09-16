import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./componets/About/About";
import Blogs from "./componets/Blogs/Blogs";
import Deshboard from "./componets/Deshboard/Deshboard";
import Header from "./componets/Header/Header";
import Demo from "./componets/Home/Demo";
import Home from "./componets/Home/Home";
import NotFoundPage from "./componets/NotFountPage/NotFoundPage";
import ReviewDetail from "./componets/ReviewDetail/ReviewDetail";
import useReview from "./hooks/useReview";

export const MyContext = createContext();

function App() {
  const [review, setReivew] = useReview();

  return (
    <>
      <MyContext.Provider value={[review, setReivew]}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/demo" element={<Demo />}></Route>
          <Route path="/detail" element={<ReviewDetail />}></Route>
          <Route path="/deshboard" element={<Deshboard />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/*" element={<NotFoundPage />}></Route>
        </Routes>
      </MyContext.Provider>
    </>
  );
}

export default App;
