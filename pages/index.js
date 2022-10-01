import { useTheme } from 'next-themes';
export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div className='dark:bg-black h-screen flex justify-center items-center'>
      <button
        className='text-3xl text-white bg-gray-500 rounded-md'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? 'dark' : 'light'}
      </button>
    </div>
  );
}
