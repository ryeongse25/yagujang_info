import Image from "next/image";

interface Pin {
  x: string;
  y: string;
}

export default function Pin({ x, y }: Pin) {
  return (
    <>
      <div className="pin">
        <Image src="/img/main/pin_red.png" alt="pin" width={40} height={40} />
      </div>
      <style jsx>{`
        .pin {
          position: absolute;
          left: ${x};
          top: ${y};
          cursor: pointer;
          animation: bounce 0.8s infinite;
          animation-delay: ${Number(x.slice(0, 3)) / 1000}s;
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px) scale(1.1);
          }
        }
      `}</style>
    </>
  );
}
