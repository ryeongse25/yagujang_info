export default function Home() {
  return (
    <>
      <div className="main d-flex justify-content-center align-items-center">
        <img src="/img/main/map.png" width="480px" />
      </div>
      <style jsx>{`
        .main {
          height: 100vh;
          overflow-y: hidden;
          background: #50c878;
          padding-top: var(--main-header-height);
        }
      `}</style>
    </>
  );
}
