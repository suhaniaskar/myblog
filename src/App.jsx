import { AddBlog } from "./components/addblog";
import Dashboard from "./components/dashboard";
import Header from "./components/header";
import { BrowserRouter, Route, Routes, Switch} from 'react-router-dom';

function App() {
  return (
 
    <><Header /><Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/addblog" element={<AddBlog />}></Route>

    </Routes></>
    
  
  );
}

export default App;
