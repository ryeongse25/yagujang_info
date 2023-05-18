export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <nav></nav>
        </div>
      </header>
      <style jsx>{`
        header {
          position: absolute;
          width: 100vw;
        }
        header nav {
          height: var(--main-header-height);
          border: 2px dashed white;
        }
      `}</style>
    </>
  );
}
