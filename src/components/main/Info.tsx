import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

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
        <button onClick={closeWindow}>
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
      <style jsx>{`
        .info {
          top: -20px;
          left: -125px;
          width: 230px;
          z-index: 1;
          padding: 16px;
          align-items: start;
          position: absolute;
          background: #ffffff;
          border-radius: 10px;
        }
        .info p {
          cursor: pointer;
          font-weight: 600;
        }
        .info p:hover {
          color: var(--main-color);
        }
        .info button {
          color: red;
          border: none;
          background: transparent;
        }
      `}</style>
    </>
  );
}
