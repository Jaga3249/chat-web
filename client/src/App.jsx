import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Auth = lazy(() => import("./pages/Auth"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/chat/:chatid" element={<Chat />} />
        <Route path="/groups" element={<Groups />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
