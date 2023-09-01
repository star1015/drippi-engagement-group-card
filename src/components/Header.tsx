import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="flex h-[38px] w-full items-center gap-12 border-b-2 border-dark-neutral">
      <Link to="/">
        <h1 className="text-3xl font-bold hover:text-neutral-300">
          Card Component Preview (Typescript + React + Radix + Tailwind)
        </h1>
      </Link>
    </header>
  )
}
