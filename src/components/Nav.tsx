import { FaHome, FaChartBar, FaBookmark, FaUser } from 'react-icons/fa';
import { CgMenuLeft } from 'react-icons/cg';

export function Nav() {
  return (
    <nav className='flex flex-col justify-between h-full'>
      <div className='flex flex-col gap-8'>
        <CgMenuLeft className='text-slate-600 dark:text-slate-400' size={32}/>
        <FaHome className='fill-slate-600 dark:text-slate-400' size={32}/>
        <FaChartBar className='fill-slate-600 dark:text-slate-400' size={32}/>
        <FaBookmark className='fill-slate-600 dark:text-slate-400' size={32}/>
      </div>
      <FaUser className='fill-slate-600' size={32}/>
    </nav>
  );
}
