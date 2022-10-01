import Script from 'next/script';
import { useTheme } from 'next-themes';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div className='dark:bg-darkGray h-screen text-lightGray snap-y snap-mandatory w-full overflow-scroll z-0'>
      <Head>
        <title>Derry&#39;s Portofolio</title>
      </Head>
      <Header />
      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>
      {/* Experience */}

      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}
    </div>
  );
}
