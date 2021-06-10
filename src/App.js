import { useState } from "react";
function App() {
  const widthGlobo = 37.5;
  const heightGlobo = 50;
  const posicionAleatoria = () => {
    const widthViewport = window.innerWidth;
    const heightViewport = window.innerHeight;
    const widthAleatorio = Math.floor(Math.random() * widthViewport);
    const heightAleatorio = Math.floor(Math.random() * heightViewport);
    return { x: widthAleatorio, y: heightAleatorio };
  };
  const [posicionActual, setPosicionActual] = useState(posicionAleatoria());
  let [totalPuntos, setTotalPuntos] = useState("0");
  const cambiarPosicion = () => {
    setTimeout(() => setPosicionActual(posicionAleatoria), 1000);
  };
  const sumarPunto = () => {
    setTotalPuntos(`${+totalPuntos + 1}`);
  };
  return (
    <>
      <i
        className="globo fab fa-fly"
        style={{
          top: posicionActual.x,
          left: posicionActual.y,
        }}
        onMouseOver={cambiarPosicion}
        onClick={sumarPunto}
      ></i>
      <span>Marcador:{totalPuntos}</span>
    </>
  );
}

export default App;
