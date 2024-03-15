import { Header } from './components/Header';
import { Main } from './components/Main';

export function App() {
  return (
    <div>
      <div className='h-screen bg-slate-100 bg-[url("./assets/background.svg")] bg-cover bg-center bg-no-repeat dark:bg-slate-950'>
        <div className='h-screen bg-[url("./assets/background2.svg")] bg-cover bg-center bg-no-repeat'>
          <Header />
        </div>
      </div>
      <Main />
    </div>
  );
}
