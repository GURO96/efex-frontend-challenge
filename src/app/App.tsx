
import {  createBrowserRouter,  RouterProvider } from 'react-router-dom';
// import './App.css'
import Home from './pages/home';

import MainFrame from "../components/dashboard-frame/dashboard-frame.tsx";
import RootLayout from './pages/root.tsx';
import { MainErrorFallback } from '../components/errors/main.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// const Home = () => {
//     return <h1>Home</h1>
//   } 



const router = createBrowserRouter(
    // createRoutesFromElements(
    //   <Route path="/" >
    //     <Route path="dashboard" element={<MainFrame />} />
    //     <Route path="home" element={<Home />}/>
    //     {/* <Route path="register" element={<Register />} /> */}
    //   </Route>
    // )
    [
      {
      path: "/",
      element: <RootLayout />,
      errorElement: <MainErrorFallback />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        
        {
          path: "/dashboard",
          element: <MainFrame />,
        },
      ]
      },

  ]
  )

  const queryClient = new QueryClient();

function App() {
    return (
        <>
           <QueryClientProvider client={queryClient}>
              {/* <CurrencyProvider> */}
                <RouterProvider router={router}/>
              {/* </CurrencyProvider> */}
           </QueryClientProvider>
          
        </>
      );
}

export default App
