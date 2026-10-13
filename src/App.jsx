import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      {/* Layout envuelve a todas las páginas (Navbar + Footer fijos) */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App