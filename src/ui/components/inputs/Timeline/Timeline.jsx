import styles from "./Timeline.module.css";

export default function Timeline(props) {
    return (
        <div className={styles['timeline-container']}>
            <div 
                className={styles['timeline-line']} 
                style={{'--width': `${(props.currentTime * 100 / props.duration)}%`}} 
            />
            <input 
                type='range' 
                className={styles['timeline-slider']}
                max={props.duration} 
                onChange={props.onTimeChange} 
            />
        </div>
    );
}
