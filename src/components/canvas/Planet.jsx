import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF,SpotLight } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = ({ isMobile }) => {
    const earth = useGLTF("./moon/moon.gltf");
    return (
        <mesh>
            <hemisphereLight intensity={0.9} groundColor="indigo" />
            <pointLight intensity={9} />
            <SpotLight
                position={[2, 4.2, 1]}
                angle={1}
                // penumbra={1}
                // intensity={1}
                // castShadow
                // shadow-mapSize={-2024}
            />
            <primitive
                object={earth.scene}
                scale={2.5}
                position-y={0}
                rotation-y={0}
            />
        </mesh>
    );
};

const EarthCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches);
        const handleMediaQueryChange = (e) => {
            setIsMobile(e.matches);
        };
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);
    return (
        <Canvas
            frameloop="demand"
            shadows
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};
export default EarthCanvas;
