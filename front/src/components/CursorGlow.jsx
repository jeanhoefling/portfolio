import { useEffect, useState } from 'react'

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
style={{
  background: `
    radial-gradient(
      900px circle at ${position.x}px ${position.y}px,
      rgba(139, 92, 246, 0.010),
      transparent 65%
    ),
    radial-gradient(
      700px circle at ${position.x}px ${position.y}px,
      rgba(139, 92, 246, 0.015),
      transparent 65%
    ),
    radial-gradient(
      450px circle at ${position.x}px ${position.y}px,
      rgba(108, 130, 245, 0.020),
      transparent 65%
    ),
    radial-gradient(
      250px circle at ${position.x}px ${position.y}px,
      rgba(45, 212, 191, 0.025),
      transparent 65%
    )
  `,
}}
    />
  )
}