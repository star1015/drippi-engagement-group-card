import { Header } from '../components/Header'
import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1 flex-row items-stretch">
        <div className="w-[320px] overflow-auto border-r-2 border-dark-neutral"></div>
        <div className="m-6 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
