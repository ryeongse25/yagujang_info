interface Info {
  yagujang: string[];
  closeWindow: () => void;
}

export default function Info({ yagujang, closeWindow }: Info) {
  return (
    <>
      <div className="info d-flex justify-content-between">
        <div>
          {yagujang.map((name) => (
            <p key={name}>{name}</p>
          ))}
        </div>
        <button onClick={closeWindow}>x</button>
      </div>
      <style jsx>{`
        .info {
          z-index: 1;
          width: 300px;
          position: absolute;
          background: #ffffff;
          padding: 16px;
        }
        .info button {
          border: none;
          background: transparent;
        }
      `}</style>
    </>
  );
}
