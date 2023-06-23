import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Moon = ({ isMobile, isShrink }) => {
    const moon = useGLTF("./moon/moon.gltf");
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const animationId = requestAnimationFrame(rotateMoon);
        return () => cancelAnimationFrame(animationId);
    }, []);

    const rotateMoon = () => {
        setRotation((prevRotation) => prevRotation + 0.005);
    };

    return (
        <mesh castShadow receiveShadow rotation-y={rotation}>
            <directionalLight
                position={[-13, -200, -321]}
                intensity={1}
                color="indigo"
                castShadow
            />
            <spotLight
                position={[20, 20, 22]}
                angle={Math.PI / 4}
                penumbra={1}
                intensity={1.2}
                castShadow
            />
            {isShrink ? (
                <primitive
                    object={moon.scene}
                    scale={isMobile ? 1.5 : 1.9}
                    position-y={isMobile ? -1 : -1.2}
                    rotation-y={0}
                />
            ) : (
                <primitive
                    object={moon.scene}
                    scale={2.5}
                    position-y={0}
                    rotation-y={0}
                />
            )}
        </mesh>
    );
};

const MoonCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isShrink, setIsShrink] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 800px)");
        const mediaQueryShrink = window.matchMedia("(max-width: 1700px)");
        setIsMobile(mediaQuery.matches);
        setIsShrink(mediaQueryShrink.matches);
        const handleMediaQueryChange = (e) => {
            setIsMobile(e.matches);
            setIsShrink(e.matches);
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
                <Moon isMobile={isMobile} isShrink={isShrink} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default MoonCanvas;
