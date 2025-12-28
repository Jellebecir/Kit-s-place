import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import './App.css'
import '@indoui/react-text-editor/styles.css';

function App() {
  return <RouterProvider router={router} />;
}

export default App
