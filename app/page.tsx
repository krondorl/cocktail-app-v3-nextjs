import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="app app-intro">
        <h1 className="welcome-title">Welcome to Cocktail App v3</h1>
        <div>
          <Image src="/cocktails.png" width={128} height={128} alt="Cocktail" />
        </div>
        <div>
          <Link href="/cocktail" className="enter">Enter webpage</Link>
        </div>
      </div>
    </main>
  )
}
