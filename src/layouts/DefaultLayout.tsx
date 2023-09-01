import { Header } from '../components/Header'
import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className='flex-1 flex flex-row items-stretch'>
        <div className='w-[320px] border-r-2 border-dark-neutral overflow-auto'></div>
        <div className='m-6 overflow-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
