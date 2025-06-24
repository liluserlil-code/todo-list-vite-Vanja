import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'

//TODO main.tsx rename index.tsx in src/.
createRoot(document.getElementById('root')!).render(
  <App />,
)
