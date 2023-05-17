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
        }
      `}</style>
    </>
  );
}
