import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import NavBar from '../../components/NavBar'
import Bookshelf from '../Bookshelf'
import Sort from '../Sort'

const Layout: React.FC = () => (
  <div>
    <Routes>
      <Route path="bookshelf" element={<Bookshelf />} />
      <Route path="sort/*" element={<Sort />} />
      <Route path="*" element={<Navigate to="/bookshelf" />} />
    </Routes>

    <NavBar />
  </div>
)

export default Layout
