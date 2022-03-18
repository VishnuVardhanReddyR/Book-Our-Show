import Head from 'next/head';
import NavBar from '../components/Navigation/NavBar';
import LandingPage from '../components/Home/LandingPage';

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>BookOurShow</title>
        <link rel="icon" href="/our-logo.png" />
      </Head>
      <NavBar />
      <LandingPage />
    </div>
  )
}

export default Home;
