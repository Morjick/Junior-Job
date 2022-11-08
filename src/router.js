import { Route, Routes } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Home from "./pages/home"
import Auth from "./pages/auth"
import Login from './pages/auth-login'
import AuthCreate from './pages/auth-create'

const history = createBrowserHistory()

export default function router() {
  return (
    <Routes history={history}>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/auth-login" element={<Login history={history} />}  />
      <Route path="/auth-create" element={<AuthCreate history={history} />}  />
    </Routes>
  )
}