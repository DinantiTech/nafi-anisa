import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { getRandomAOSAnimation } from "../../helpers/random_animation";

export default function CustomAnimation({ children, animation }) {
  useEffect(() => {
    Aos.init({
      delay: 400,
      once: true
    })
    Aos.refresh()
  }, [])


  return (
    <div className="w-full" data-aos={animation ?? getRandomAOSAnimation()}>
      {children}
    </div>
  );
}