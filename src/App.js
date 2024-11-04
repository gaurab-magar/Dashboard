import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import './App.css';
import Layout from './components/shared/Layout';
import Dashboard from './components/Dashboard';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard/>}></Route>
          <Route path='products' element={<Products/>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
