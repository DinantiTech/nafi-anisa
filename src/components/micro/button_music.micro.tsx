import { MusicBG } from "@/constants/others.const";
import { useMusicStore } from "@/stores/music.store";
import { Icon } from "@iconify/react";
import { useEffect } from "react";

export default function MusicBtn() {
  const { isMusic, setMusic } = useMusicStore();

  useEffect(() => {
    const audio = document.getElementById('audio') as HTMLAudioElement;

    if (isMusic) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isMusic]);

  return (
    <button onClick={() => setMusic(!isMusic)} className={`${isMusic ? "animate-bounce" : ""} bg-white fixed right-5 xxs:right-10 bottom-16 z-50 p-2 text-xl xxs:text-3xl rounded-full shadow-md`}>
      <audio id="audio" src={MusicBG} loop />
      { isMusic ? (
        <Icon icon="icon-park-twotone:pause-one" />
      ) : (
        <Icon icon="icon-park-twotone:play" />
      ) }
    </button>
  );
}
