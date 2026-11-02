"use client";

import React, { forwardRef, useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Color, Mesh, ShaderMaterial } from "three";

interface SilkUniforms {
  [uniform: string]: { value: any };
  uTime: { value: number };
  uSpeed: { value: number };
  uScale: { value: number };
  uColor: { value: Color };
  uRotation: { value: number };
  uNoiseIntensity: { value: number };
  uResolution: { value: [number, number] };
}

export interface SilkProps {
  /** Controls the animation speed of the silk effect. */
  speed?: number;
  /** Controls the scale of the silk pattern. */
  scale?: number;
  /** Hex color code for the silk pattern. */
  color?: string;
  /** Controls the intensity of the noise effect. */
  noiseIntensity?: number;
  /** Controls the rotation of the silk pattern (in radians). */
  rotation?: number;
  /** Additional class name for the outer wrapper. */
  className?: string;
}

const hexToNormalizedRGB = (hex: string): [number, number, number] => {
  let clean = hex.replace("#", "");
  if (clean.length === 3) {
    clean = clean
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const r = parseInt(clean.slice(0, 2) || "0", 16) / 255;
  const g = parseInt(clean.slice(2, 4) || "0", 16) / 255;
  const b = parseInt(clean.slice(4, 6) || "0", 16) / 255;
  return [isNaN(r) ? 0 : r, isNaN(g) ? 0 : g, isNaN(b) ? 0 : b];
};

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;
uniform vec2  uResolution;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2  r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

void main() {
  vec2 uv = vUv * uScale;
  uv.x   *= uResolution.x / uResolution.y;

  // Rotate the sampling coordinates around the pattern center.
  vec2  center = vec2(uScale * 0.5 * (uResolution.x / uResolution.y), uScale * 0.5);
  float c = cos(uRotation);
  float s = sin(uRotation);
  vec2  cuv = uv - center;
  uv = vec2(cuv.x * c - cuv.y * s, cuv.x * s + cuv.y * c) + center;

  float t      = uTime * uSpeed;
  float tex_x  = uv.x;
  float tex_y  = uv.y + 0.03 * sin(8.0 * tex_x - t);

  float pattern = 0.6 + 0.4 * sin(
    5.0 * (tex_x + tex_y + cos(3.0 * tex_x + 5.0 * tex_y) + 0.02 * t) +
    sin(20.0 * (tex_x + tex_y - 0.1 * t))
  );

  vec3 col = uColor * pattern;

  // Same noise treatment as the Vortex shader: subtract straight from the
  // finished color channels rather than folding it into the pattern first.
  float rnd = noise(gl_FragCoord.xy);
  col -= rnd / 15.0 * uNoiseIntensity;

  gl_FragColor = vec4(col, 1.0);
}
`;

interface SilkPlaneProps {
  uniforms: SilkUniforms;
}

const SilkPlane = forwardRef<Mesh, SilkPlaneProps>(function SilkPlane({ uniforms }, ref) {
  const { viewport, size } = useThree();

  useEffect(() => {
    const mesh = ref && typeof ref === "object" && "current" in ref ? ref.current : null;
    if (mesh) {
      mesh.scale.set(viewport.width, viewport.height, 1);
      const material = mesh.material as ShaderMaterial;
      if (material && material.uniforms && material.uniforms.uResolution) {
        material.uniforms.uResolution.value = [size.width, size.height];
      }
    }
  }, [ref, viewport, size]);

  useFrame((_, delta) => {
    const mesh = ref && typeof ref === "object" && "current" in ref ? ref.current : null;
    if (mesh) {
      (mesh.material as ShaderMaterial).uniforms.uTime.value += delta;
    }
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial uniforms={uniforms} vertexShader={vertexShader} fragmentShader={fragmentShader} />
    </mesh>
  );
});
SilkPlane.displayName = "SilkPlane";

const Silk: React.FC<SilkProps> = ({
  speed = 5,
  scale = 1,
  color = "#432DD7",
  noiseIntensity = 1.5,
  rotation = 0,
  className = "",
}) => {
  const [mounted, setMounted] = useState(false);
  const meshRef = useRef<Mesh>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const uniforms = useMemo<SilkUniforms>(
    () => ({
      uTime: { value: 0 },
      uSpeed: { value: speed * 0.05 },
      uScale: { value: scale * 2 },
      uColor: { value: new Color(...hexToNormalizedRGB(color)) },
      uRotation: { value: rotation },
      uNoiseIntensity: { value: noiseIntensity },
      uResolution: { value: [1, 1] },
    }),
    [speed, scale, color, rotation, noiseIntensity]
  );

  const cleanClassName = className && className !== "undefined" ? className : "";
  const classes = `relative w-full h-full overflow-hidden bg-[#06040e] ${cleanClassName}`;

  if (!mounted) {
    return <div className={classes} />;
  }

  return (
    <div className={classes}>
      <Canvas
        dpr={[1, 2]}
        frameloop="always"
        className="w-full h-full"
        onCreated={({ gl }) => {
          if (gl.domElement.parentElement) {
            gl.setSize(
              gl.domElement.parentElement.clientWidth,
              gl.domElement.parentElement.clientHeight
            );
          }
        }}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        <SilkPlane ref={meshRef} uniforms={uniforms} />
      </Canvas>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-transparent to-black/70 pointer-events-none" />
    </div>
  );
};

export default Silk;

