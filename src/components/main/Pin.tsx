import { useState } from "react";
import { Yagujang } from "@/utils/types";
import Image from "next/image";
import Info from "./Info";

interface Pin {
  city: string;
  x: string;
  y: string;
}

export default function Pin({ city, x, y }: Pin) {
  const [show, setShow] = useState(false);
  const [yagujang, setYagujang] = useState<string[]>([]);

  const onClick = async () => {
    const data = await (
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/yagujang?city=${city}`)
    ).json();

    const tmp: string[] = [];

    data.forEach((yagujang: Yagujang) => {
      tmp.push(yagujang.name);
      if (tmp.length === data.length) setYagujang(tmp);
    });
    setShow(true);
  };

  return (
    <>
      <div className="pin-box">
        <div>
          <div className="pin" onClick={onClick}>
            <Image
              src="/img/main/pin_red.png"
              alt="pin"
              width={40}
              height={40}
            />
          </div>
          {show && (
            <Info yagujang={yagujang} closeWindow={() => setShow(false)} />
          )}
        </div>
      </div>
      <style jsx>{`
        .pin-box {
          position: absolute;
          left: ${x};
          top: ${y};
        }
        .pin-box > div {
          position: relative;
        }
        .pin {
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
