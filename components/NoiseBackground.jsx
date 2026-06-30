import { useEffect, useRef } from "react";

export default function NoiseBackground() {
  const divRef = useRef(null);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 200;
    canvas.height = 200;
    const ctx = canvas.getContext("2d");
    const imageData = ctx.createImageData(200, 200);
    for (let i = 0; i < imageData.data.length; i += 4) {
      const v = Math.pow(Math.random(), 0.4) * 255;
      imageData.data[i] = v;
      imageData.data[i + 1] = v;
      imageData.data[i + 2] = v;
      imageData.data[i + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
    divRef.current.style.backgroundImage = `url(${canvas.toDataURL()})`;
  }, []);

  return (
    <div
      ref={divRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none mix-blend-overlay"
      style={{
        zIndex: 9999,
        opacity: 0.07,
        backgroundSize: "100px 100px",
        backgroundRepeat: "repeat",
      }}
    />
  );
}
