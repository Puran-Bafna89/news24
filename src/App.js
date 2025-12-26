
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import './App.css';
import Navbar from "./MyComponents/Navbar";
import News from './MyComponents/News';

export default function App() {

  const [progressValue, setProgressValue] = useState(10);

  const setProgress = (pv) => {
    setProgressValue(pv);
  }

  return (
    <>
      <Navbar />
      <LoadingBar color="red" progress={progressValue} onLoaderFinished={() => setProgress(0)}></LoadingBar>
      <Routes>
        <Route path="/" element={<News key="home" setProgress={setProgress} catagory="general" />} />
        <Route path="/general" element={<News key="general" setProgress={setProgress} catagory="general" />} />
        <Route path="/health" element={<News key="health" setProgress={setProgress} catagory="health" />} />
        <Route path="/business" element={<News key="business" setProgress={setProgress} catagory="business" />} />
        <Route path="/sports" element={<News key="sports" setProgress={setProgress} catagory="sports" />} />
        <Route path="/entertainment" element={<News key="entertainment" setProgress={setProgress} catagory="entertainment" />} />
        <Route path="/technology" element={<News key="technology" setProgress={setProgress} catagory="technology" />} />
        <Route path="/science" element={<News key="science" setProgress={setProgress} catagory="science" />} />
      </Routes>
    </>
  );
}
