import { useState, useRef, useEffect } from 'react';
import styles from './AudioPlayer.module.css';
import Timeline from '../../inputs/Timeline/Timeline';

export default function AudioPlayer(props) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [canPlay, setCanPlay] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef(null);

    useEffect(() => {
        if(props.music) {
            setCurrentTime(0);
            setCanPlay(false);
        }
    }, [props.music]);

    useEffect(() => {
        if(props.music) {
            if(isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    })

    useEffect(() => {
        const interval = setInterval(() => {
            if(isPlaying) { 
                setCurrentTime(audioRef.current.currentTime); 
            }
        }, 500);
        return () => clearInterval(interval);
    }, [isPlaying]);
    
    function onCanPlay() { setCanPlay(true); }

    function onEnded() { setIsPlaying(false); }

    function handlePlay() { 
        if(props.music) { setIsPlaying(!isPlaying); } 
    }
    
    return (
        <div className={styles['player-container']}>
            <div className={styles['button-container']}>
                <button 
                    className={styles['play-button']} 
                    disabled={!canPlay} 
                    onClick={handlePlay}>
                        {isPlaying ? '\u25AE\u25AE' : '\u25B6'}
                </button>
            </div>
            <Timeline 
                currentTime={currentTime} 
                duration={props.music?.time} 
                onTimeChange={e => audioRef.current.
                currentTime = e.target.value} 
            />
            <audio 
                ref={audioRef} 
                src={props.music?.url} 
                controls 
                onCanPlay={onCanPlay} 
                onEnded={onEnded} 
                className={styles['audio']} 
            />
        </div>
    );
}
