import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Shared from './pages/Shared'
import Trash from './pages/Trash'
import Recent from './pages/Recent'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shared" element={<Shared />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/recent" element={<Recent />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}