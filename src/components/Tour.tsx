import React, { useState } from "react";
import ReactJoyride, { type Step } from "react-joyride";

const Tour = () => {
  const [run, setRun] = useState(true); // Activa/desactiva el tour
  const [stepIndex, setStepIndex] = useState(0); // Índice del paso actual

  const steps: Step[] = [
    {
      target: "#intro", // Verifica que exista un elemento con id="intro"
      content: "Bienvenido a CNN Black Box, exploremos juntos cómo funciona.",
    },
    {
      target: "#introduccion", // Verifica que exista un elemento con id="introduccion"
      content: "Aquí puedes subir una imagen para empezar a procesarla.",
    },
    {
      target: "#paso1",
      content: "Este es el primer paso, donde aplicamos una convolución a tu imagen.",
    },
    {
      target: "#relu",
      content: "En este paso, aplicamos la función de activación ReLU.",
    },
    {
      target: "#maxpool",
      content: "Finalmente, aquí realizamos el MaxPooling.",
    },
  ];

  const handleJoyrideCallback = (data: any) => {
    const { status } = data;
    if (status === "finished" || status === "skipped") {
      setRun(false); // Detiene el tour si termina o se salta
    }
  };

  return (
    <ReactJoyride
      steps={steps}
      run={run}
      stepIndex={stepIndex}
      continuous
      showProgress
      showSkipButton
      callback={handleJoyrideCallback}
      styles={{
        options: {
          arrowColor: "#e3ffeb",
          backgroundColor: "#000",
          overlayColor: "rgba(79, 26, 0, 0.4)",
          primaryColor: "#000",
          textColor: "#fff",
          zIndex: 1000,
        },
      }}
    />
  );
};

export default Tour;
