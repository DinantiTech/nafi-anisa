"use client";

import { MusicBG } from "@/libs/constants/others.const";
import { useMusicStore } from "@/libs/stores/music.store";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

export default function MusicBtn() {
  const { isMusic, setMusic } = useMusicStore();
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Only run this code in the browser
    const audioElement = new Audio(MusicBG);
    audioElement.loop = true;
    setAudio(audioElement);

    return () => {
      audioElement.pause();
      audioElement.currentTime = 0; // Reset audio
    };
  }, []);

  useEffect(() => {
    if (audio) {
      if (isMusic) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [isMusic, audio]);

  return (
    <button
      onClick={() => setMusic(!isMusic)}
      className={`${isMusic ? "animate-bounce" : ""} bg-white fixed right-5 xxs:right-10 bottom-16 z-50 p-2 text-xl xxs:text-3xl rounded-full shadow-md`}
    >
      {isMusic ? (
        <Icon icon="icon-park-twotone:pause-one" />
      ) : (
        <Icon icon="icon-park-twotone:play" />
      )}
    </button>
  );
}
