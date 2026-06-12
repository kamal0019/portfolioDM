import { useEffect, useRef, useState } from "react";
import { useLoading } from "../../context/LoadingProvider";
import { setProgress } from "../Loading";
import { setCharTimeline, setAllTimeline } from "../utils/GsapScroll";

const Scene = () => {
  const { setLoading } = useLoading();
  const imageRef = useRef<HTMLImageElement>(null);

  const [imgSrc, setImgSrc] = useState("/images/Hero avatar.png");

  useEffect(() => {
    let progress = setProgress((value) => setLoading(value));
    
    // Preload both images
    const img1 = new Image();
    img1.src = "/images/Hero avatar.png";
    const img2 = new Image();
    img2.src = "/images/Avatar.png";

    img1.onload = () => {
      progress.loaded().then(() => {
        // Initialization finished
      });
      if (imageRef.current) {
        setCharTimeline(imageRef.current);
      }
      setAllTimeline();
    };

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.4) {
        setImgSrc("/images/Avatar.png");
      } else {
        setImgSrc("/images/Hero avatar.png");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="character-container">
      <div className="character-model">
        <img 
          ref={imageRef}
          src={imgSrc} 
          alt="Avatar" 
          style={{ width: '100%', height: '100%', objectFit: 'contain', pointerEvents: 'none', transform: 'scale(0.7)' }} 
        />
      </div>
    </div>
  );
};

export default Scene;
