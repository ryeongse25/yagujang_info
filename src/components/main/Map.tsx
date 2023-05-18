import Pin from "./Pin";

export default function Map() {
  const coords = [
    {
      city: "seoul",
      x: "140px",
      y: "100px",
    },
    {
      city: "incheon",
      x: "110px",
      y: "110px",
    },
    {
      city: "suwon",
      x: "145px",
      y: "140px",
    },
    {
      city: "daejeon",
      x: "180px",
      y: "250px",
    },
    {
      city: "daegu",
      x: "290px",
      y: "320px",
    },
    {
      city: "gwangju",
      x: "110px",
      y: "390px",
    },
    {
      city: "busan",
      x: "340px",
      y: "390px",
    },
    {
      city: "changwon",
      x: "290px",
      y: "400px",
    },
  ];

  return (
    <>
      <div className="main d-flex justify-content-center align-items-center">
        <div>
          <img src="/img/main/map.png" width="480px" />
          {coords.map((coord) => (
            <Pin key={coord.city} city={coord.city} x={coord.x} y={coord.y} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .main {
          height: 100vh;
          overflow-y: hidden;
          background: #50c878;
          padding-top: var(--main-header-height);
        }
        .main > div {
          position: relative;
        }
      `}</style>
    </>
  );
}
