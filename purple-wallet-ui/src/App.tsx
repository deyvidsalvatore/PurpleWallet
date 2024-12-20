import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthGuard } from './guards/AuthGuard.tsx';
import { SignIn } from './pages/SignIn.tsx';
import { SignUp } from './pages/SignUp.tsx';
import { Home } from './pages/Home.tsx';
import { TransactionForm } from './components/TransactionForm.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/home"
          element={
            <AuthGuard>
              <Home />
            </AuthGuard>
          }
        />
        <Route
          path="/transaction/:type"
          element={
            <AuthGuard>
              <TransactionForm />
            </AuthGuard>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
