function Header({ title }) {
  return (
    <header className="fixed-top navigation w-full">
      <nav id="navigation" className="px-3 py-2">
        <a href="/">
          <img className="logo w-10 h-10" src="/assets/logo.svg" alt={title} />
        </a>
      </nav>
    </header>
  );
}

export default Header;
