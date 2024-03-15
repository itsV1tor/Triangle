import { Nav } from './Nav';
import { Home } from './Home';

export function Main() {
  return (
    <div className="flex h-screen flex-col gap-8 bg-slate-100 p-8 dark:bg-slate-950">
      <div>
        <h2 className="font font-bold text-slate-900 dark:text-slate-200 ">
          Dashboard
        </h2>

        <span className="font text-slate-600 font-medium dark:text-slate-400">
            Home
        </span>
      </div>
      <div className="flex h-full w-full gap-8">
        <Nav />
        <Home />
      </div>
    </div>
  );
}
