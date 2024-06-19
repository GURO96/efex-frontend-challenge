
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
// import './App.css'
import Home from './pages/home';
import AppHeader from '../components/app-header/app-header';
import DashboardPage from './pages/dashboard';

import MainFrame from "../components/dashboard-frame/dashboard-frame.tsx";
import { CurrencyProvider } from '../stores/CurrencyProvider.tsx';

// const Home = () => {
//     return <h1>Home</h1>
//   } 

  const Header = () => {
    return <h1>Header</h1>
  }

  const Login = () => {
    return <h1>Login</h1>
  }

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" >
        <Route path="dashboard" element={<MainFrame />} />
        <Route path="home" element={<Home />}/>
        {/* <Route path="register" element={<Register />} /> */}
      </Route>
    )
  )

  

function App() {
    return (
        <>
           <CurrencyProvider>
            <RouterProvider router={router}/>
           </CurrencyProvider>
          
        </>
      );
}

export default App
