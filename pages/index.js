import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <Link href="/login">
        <a>Login</a>
      </Link>
    </div>
  )
}

export default Home;
