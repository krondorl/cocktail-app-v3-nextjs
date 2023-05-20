import Image from 'next/image';

function Header() {
  return (
    <header className="header">
      <h1 className="cocktail-h1-title">Cocktail App 3.0</h1>
      <Image src="/cocktails.png" width={128} height={128} className="cocktail-cover-img" alt="Cocktail" />
    </header>
  );
}

export default Header;