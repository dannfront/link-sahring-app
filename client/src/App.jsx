
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LinksContextProvider } from "./contexts/contextLinksUser"
import { AuthContextProvider } from "./contexts/contextAuthuser"
import { ContextDataUserProvider } from "./contexts/contextDataUser"
import { ClipLoader } from 'react-spinners'
import { lazy, Suspense } from 'react'

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Regsiter = lazy(() => import('./pages/Regsiter'))
const Preview = lazy(() => import('./pages/Preview'))
const Me = lazy(() => import('./pages/Me'))
const ShareLink = lazy(() => import('./pages/ShareLink'))

import Protected from "./components/Protected"

const router = createBrowserRouter([
  {
    path: '/',
    element:
      <Protected>
        <Home />
      </Protected>
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: 'register',
    element: <Regsiter />
  },
  {
    path: 'me',
    element:
      <Protected>
        <Me />
      </Protected>
  },
  {
    path: 'preview/',
    element:
      <Protected>
        <Preview />
      </Protected>
  },
  {
    path: 'preview/:id',
    element: <ShareLink />
  }
])
const override = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
function App() {

  return (

    <Suspense fallback={<ClipLoader
      color="#633CFF"
      size={100}
      cssOverride={override}
      speedMultiplier={1}
      aria-label="Loading Spinner"
      data-testid="loader"
    />}>
      <AuthContextProvider>
        <LinksContextProvider>
          <ContextDataUserProvider>
            <RouterProvider router={router} />
          </ContextDataUserProvider>
        </LinksContextProvider>
      </AuthContextProvider >
    </Suspense>
  )
}

export default App
