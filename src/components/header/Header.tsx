export default function Header() {
  return (
    <>
      <header>
        <div className="container"></div>
      </header>
      <style jsx>{`
        header {
          position: absolute;
          width: 100vw;
          height: var(--main-header-height);
          border: 2px dashed white;
        }
      `}</style>
    </>
  );
}
