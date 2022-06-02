import { useState } from "react";

const musicList = [
    {
        id: 1,
        name: 'Clap and Yell',
        artist: '123',
        time: 176,
        url: 'musics/clapandyell.mp3'
    },
    {
        id: 2,
        name: 'Evolution',
        artist: '456',
        time: 165,
        url: 'musics/evolution.mp3'
    },
    {
        id: 3,
        name: 'Ukulele',
        artist: '789',
        time: 146,
        url: 'musics/ukulele.mp3'
    }
];

export function useApp() {
    const [selectedMusic, setSelectedMusic] = useState();
    const [time, setTime] = useState(0);

    function selectMusic(music) {
        setTime(0);
        setSelectedMusic(music);
    }
    
    return {
        selectedMusic,
        time,
        setTime,
        selectMusic,
        musicList,
    }
}

