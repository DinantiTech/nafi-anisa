import { Icon } from "@iconify/react";
import { BG_GRADIENT, COLOR_PRIMARY } from "../../contants/common.const";
import { useMusic } from "../../providers/music.provider";
import { useEffect } from "react";

export default function MusicBtn() {
    const { isMusic, handleIsPlay, music } = useMusic();

    useEffect(() => {
        const audio = document.getElementById('audio');
        
        if (isMusic) {
          audio.play();
        } else {
          audio.pause();
        }
      }, [isMusic]);

    return (
        <button onClick={handleIsPlay} className={`text-${COLOR_PRIMARY} ${BG_GRADIENT} ${isMusic ? "animate-bounce" : ""} fixed right-10 bottom-16 z-50 p-2 text-3xl rounded-full shadow-${COLOR_PRIMARY} shadow-md`}>
            <audio id="audio" src={music} loop />
            { isMusic ? (
                <Icon icon="icon-park-twotone:pause-one" />
            ) : (
                <Icon icon="icon-park-twotone:play" />
            ) }
        </button>
    )
}