import { Outlet } from 'react-router-dom'
import FloatingWhatsApp from './components/FloatingWhatsApp'

// vite-react-ssg ya envuelve toda la app en su propio <HelmetProvider>
// durante el renderizado (cliente y SSG) — envolver aquí de nuevo crea un
// segundo contexto y el <Helmet> de Seo.tsx deja de inyectarse en el head.
export default function App() {
  return (
    <>
      <Outlet />
      <FloatingWhatsApp />
    </>
  )
}
