import { Routes, Route } from 'react-router-dom'

import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Home from './routes/home/home.component';

const Shop = () => {
  return <h1>Shop</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  )
};

export default App;
