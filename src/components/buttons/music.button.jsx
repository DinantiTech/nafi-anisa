import { Icon } from "@iconify/react";
import { BG_GRADIENT, COLOR_PRIMARY, MUSIC_BG } from "../../contants/common.const";
import { useMusic } from "../../providers/music.provider";
import { useEffect } from "react";

export default function MusicBtn() {
    const { isMusic, handleIsPlay } = useMusic();

    useEffect(() => {
        const audio = document.getElementById('audio');
        
        if (isMusic) {
          audio.play();
        } else {
          audio.pause();
        }
      }, [isMusic]);

    return (
        <button onClick={handleIsPlay} className={`text-${COLOR_PRIMARY} ${BG_GRADIENT} fixed right-10 bottom-16 z-50 p-2 text-3xl rounded-full shadow-${COLOR_PRIMARY} shadow-md animate-bounce`}>
            <audio id="audio" src={MUSIC_BG} loop />
            { isMusic ? (
                <Icon icon="icon-park-twotone:pause-one" />
            ) : (
                <Icon icon="icon-park-twotone:play" />
            ) }
        </button>
    )
}