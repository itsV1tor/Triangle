export function App() {
  return (
    <div className='bg-[url("./assets/background.svg")] h-screen bg-slate-100 bg-no-repeat bg-cover bg-center dark:bg-slate-950'>
      <div className='bg-[url("./assets/background2.svg")] h-screen bg-no-repeat bg-cover bg-center'>
        <div className="flex justify-center items-center h-screen">
          <div className="max-w-[720px] flex flex-col items-center gap-4 px-4">
            <h1 className="text-slate-900 dark:text-white font-bold text-5xl text-center">
              Controll your life better than he is more and more
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-center text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum itaque minus laborum
              illum magni veniam, voluptate in reprehenderit, rem!
            </p>
            <button className="bg-button-config border max-w-fit border-button-config backdrop-blur-[1.8px] hover:shadow-md hover:shadow-indigo-500/50 dark:hover:shadow-indigo-900/50 transition-shadow duration-300 rounded py-4 px-8 text-purple-950 dark:text-purple-200 font-medium">
              Start for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
