import { lazy, Suspense, useState } from 'react'
import Cover from './components/Cover.jsx'
import './App.css'

const loadInvitation = () => import('./components/Invitation.jsx')
const Invitation = lazy(loadInvitation)

export default function App() {
  const [opened, setOpened] = useState(false)
  const [opening, setOpening] = useState(false)

  const openInvitation = () => {
    if (opening) return
    setOpening(true)
    loadInvitation()
    window.setTimeout(() => {
      setOpened(true)
      window.scrollTo(0, 0)
    }, 1100)
  }

  return (
    <main className="stage">
      {!opened && <Cover open={openInvitation} opening={opening} />}
      {opened && (
        <Suspense fallback={null}>
          <Invitation />
        </Suspense>
      )}
    </main>
  )
}
