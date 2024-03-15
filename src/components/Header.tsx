export function Header() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex max-w-[720px] flex-col items-center gap-4 px-4">
        <h1 className="text-center text-5xl font-bold text-slate-900 dark:text-white">
          Organize Your Life in a Triple Way
        </h1>
        <p className="text-center text-lg font-medium text-slate-600 dark:text-slate-400">
          A Three-Dimensional Approach to Managing Tasks, Achieving Goals, and Promoting Well-Being:
          Transforming Your Life into a Harmonious, Sustainable Balance
        </p>
        <button className="max-w-fit rounded border border-button-config bg-button-config px-8 py-4 font-medium text-purple-950 backdrop-blur-[1.8px] transition-shadow duration-300 hover:shadow-md hover:shadow-indigo-500/50 dark:text-purple-200 dark:hover:shadow-indigo-900/50">
          Start for free
        </button>
      </div>
    </div>
  );
}
