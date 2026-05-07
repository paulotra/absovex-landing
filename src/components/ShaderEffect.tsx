"use client";

import {
  Shader,
  FilmGrain,
  Liquify,
  MultiPointGradient,
  Paper,
  WaveDistortion,
} from "shaders/react";

export default function ShaderEffect() {
  return (
    <Shader className="absolute inset-0 z-10 opacity-100">
      <MultiPointGradient
        colorA="#0F8A8D60"
        colorB="#FFFAF300"
        colorC="#FFFAF300"
        colorD="#0F8A8D60"
        colorE="#0F8A8D60"
        positionA={{ x: 0.24, y: 0.08 }}
        positionC={{ x: 0.07, y: 0.65 }}
        positionD={{ x: 0.9, y: 0.7 }}
        positionE={{ x: 0.42, y: 1 }}
        smoothness={2.85}
      />
      <WaveDistortion
        angle={78}
        frequency={9.4}
        strength={0.05}
        waveType="triangle"
      />
      <Liquify damping={0.7} intensity={7.1} radius={1.5} stiffness={18.5} />
      <Paper displacement={1} grainScale={0.1} roughness={0.1} seed={26} />
      <FilmGrain strength={0.2} />
    </Shader>
  );
}
