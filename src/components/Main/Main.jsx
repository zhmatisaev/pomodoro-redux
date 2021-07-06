// // import React from 'react'
// // import './Main.css'
// // import TimerLayout from '../TimerLayout/TimerLayout'
// // import Settings from '../Settings/Settings'
// // import Info from '../Info/Info'
// // import { useDispatch } from 'react-redux'
// // import { useSelector } from 'react-redux'
// // import { decrease_time, start_time, switchBreak, switchSession } from '../../store/action/action'
// // import { useEffect } from 'react'
// // // music
// // import sound from "../../ride.wav"
// // import StartStop from '../StartStop/StartStop'

// // function Main() {
 
// //     const interval = useSelector(state => state.interval);
// //     const timerRunning = useSelector(state => state.timerRunning);
// //     const minuteSecond = useSelector(state => state.minuteSecond);
// //     const longBreak = useSelector(state => state.longBreak);
// //     // console.log(longBreak + "LongBreak");
// //     const state = useSelector(state => state);
// //     const dispatch = useDispatch()
// //     const audio = new Audio(sound);

// //     useEffect(() => {
// //         let count = null;
// //         if (timerRunning && minuteSecond > 0) {
// //             count = setTimeout(() => {
// //                 dispatch(decrease_time())
// //         }, 100)
// //         } else if ( minuteSecond === 0) {
// //             count = setTimeout(() => {
// //                 dispatch(decrease_time())
// //         }, 100)
// //             audio.play()
// //             // dispatch(decrease_time())
// //          if (interval === 'Session') {
// //                 dispatch(switchBreak())
// //         }
// //         else if (interval === "Break") {
// //             dispatch(switchSession())
// //             }
// //         }
// //         else {
// //            clearInterval(count)
// //         }
// //         return () => clearInterval(count)

// //     },[timerRunning, minuteSecond, state, interval, switchSession, decrease_time, switchBreak, audio])
    
    


// //     return (
// //         <div className="container">
// //             <div className="header">
// //                 <div>
// //                     <span><Info/> </span>
// //                     <span><Settings/></span>
// //                 </div>
// //             </div>
// //             <div>
// //                 <TimerLayout/>
// //             </div>
// //             {!timerRunning ? (
// //             <button className="button" onClick={() => {
// //                 dispatch(start_time())
// //                 }}>start</button>) : (
// //                     <StartStop/>
// //             )}
// //             </div>
// //     )
// // }

// // export default Main



// import React, {useState} from 'react'
// import './Main.css'
// import TimerLayout from '../TimerLayout/TimerLayout'
// import Settings from '../Settings/Settings'
// import Info from '../Info/Info'
// import { useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux'
// import { decrease_time, start_time, short_Break, switchSession, long_Break  } from '../../store/action/action'
// import { useEffect } from 'react'
// // music
// import sound from "../../ride.wav"
// import StartStop from '../StartStop/StartStop'
// function Main() {
//     const interval = useSelector(state => state.interval);
//     const timerRunning = useSelector(state => state.timerRunning);
//     const minuteSecond = useSelector(state => state.minuteSecond);
//     const longBreakFromStore = useSelector(state => state.longBreak);
//     const shortBreakFromStore = useSelector(state => state.shortBreak);
//     const sessionLength = useSelector(state => state.sessionLength);

//     const minutes = Math.floor(minuteSecond / 60);
//     console.log(minutes);
//     const [minute, setMinute] = useState(minutes);
//     const dispatch = useDispatch()
//     const audio = new Audio(sound);
//     useEffect(() => {
//         let count = null;
//         if (timerRunning && minuteSecond > 0) {
//             count = setInterval(() => {
//                 dispatch(decrease_time())
//         }, 100)
//         } else if (timerRunning && minuteSecond === 0) {
//             audio.play()
//             count = setInterval(() => {
//                 dispatch(decrease_time())
//         }, 100)
//         if (interval === 'Session') {
//              dispatch(short_Break());
             
//         }
//         else if (interval === "Break") {
//              dispatch(switchSession());
//             }
//         // else if (interval === 'Session') {
//         //      dispatch(long_Break());
//         // }
//         //     else if (interval === "LongBreak") {
//         //      dispatch(switchSession());
//         //      }
         
//         }
//         else {
//            clearInterval(count)
//         }
//         return () => clearInterval(count)
//     },[audio, timerRunning, minuteSecond, interval, switchSession, decrease_time, short_Break,])
// //    const sessionLength = useSelector((state) => state.sessionLength);
//     // shortBreak
// //    const shortBreakFromStore = useSelector((state) => state.shortBreak);
//     // longBreak 
//     // const longBreakFromStore = useSelector((state) => state.longBreak);
//     // 
//    const countFromStore = useSelector((state) => state.count); 
// //    let minutes = Math.floor(minuteSecond / 60);
// //    const [minute, setMinute] = useState(minutes);
// let obj = {
//     shortBreakFromStore: shortBreakFromStore,
//     longBreakFromStore: longBreakFromStore,
//     minuteSecond: minute,
//     sessionLength: minute,
//     countFromStore: countFromStore,
//   };
//     return (
//         <div className="container">
//             <div className="header">
//                 <div>
//                     <span><Info/> </span>
//                     <span><Settings
//                         minuteSecond={minuteSecond}
//                         shortBreakFromStore={shortBreakFromStore}
//                         longBreakFromStore={longBreakFromStore}
//                         countFromStore={countFromStore}
//                         minute={minute}
//                         minutes={minutes}
//                         setMinute={setMinute}
//                         obj={obj}
//                     /></span>
//                 </div>
//             </div>
//             <div>
//                 <TimerLayout minuteSecond={minuteSecond}/>
//             </div>
//             {/* {!timerRunning ? ( */}
//             <button className="button" onClick={() => {
//                 dispatch(start_time())
//             }}>start</button>
//             {/* //  ) : (  */}
//             <StartStop obj={obj}/>
//             {/* //  )}  */}
//             </div>
//     )
// }
// export default Main

// ===========================================================================================


import React, {useState} from 'react'
import './Main.css'
import TimerLayout from '../TimerLayout/TimerLayout'
import Settings from '../Settings/Settings'
import Info from '../Info/Info'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { decrease_time, start_time, short_Break, switchSession, long_Break } from '../../store/action/action'
import { useEffect } from 'react'
// import AudioPlayer from 'react-audio-element';
// import { Alert } from 'antd';

import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';

// import { Result, Button } from 'antd';

// music
import sound from "../../../src/components/Audio/finished.mp3"
import StartStop from '../StartStop/StartStop'
// import pianino from '../../audio/pianino.mp3'
// import two from '../../audio/two.mp3'




function Main() {
    // state
    const button = useSelector(state => state.button);
    const interval = useSelector(state => state.interval);
    const timerRunning = useSelector(state => state.timerRunning);
    const minuteSecond = useSelector(state => state.minuteSecond);
    const longBreak = useSelector(state => state.longBreak);
    const shortBreak = useSelector(state => state.shortBreak);
    const sessionLength = useSelector(state => state.sessionLength);
    const countFromStore = useSelector((state) => state.count); 
    const [count1, setCount1] = useState(countFromStore)
    console.log("count " + count1);
    const minutes = Math.floor(minuteSecond / 60);
    const [minute, setMinute] = useState(minutes);
    const [shortBreak1, setShortBreak1] = useState(shortBreak);
    const [longBreak1, setLongBreak1] = useState(longBreak);
    console.log(" longBreak " + longBreak1);
    console.log(" shortBreak " + shortBreak1);
    console.log(" minute " + minute);
    const dispatch = useDispatch()
    const audio = new Audio(sound);


    const ses = () => {
        // <Alert  >time to work </Alert>
        alert('time to work')

        // <Result
        // title="Your operation has been executed"
        // extra={
        //   <Button type="primary" key="console">
        //     x
        //   </Button>

    // <Alert
    //     action={ <Button color="inherit" size="small"> X </Button>  }>
    //     time to work
    //   </Alert>

   audio.play() 
    }


    const res = () => {
    //     <Alert
    //     action={ <Button color="inherit" size="small"> X </Button>  }>
    //     time to rest
    //   </Alert>

        // <Alert variant="outlined" severity="success">time to rest </Alert>
        alert('time to break')

    }

    useEffect(() => {
        let count = null;
        if (timerRunning && minuteSecond > 0) {
            count = setInterval(() => {
                dispatch(decrease_time())
        }, 50)
        } else if (timerRunning && minuteSecond === 0) {
            audio.play();

        if (interval === 'Session') {
            dispatch(short_Break());
            setTimeout(() => {
             res();
            },50)
        }

        else if (interval === "Break" && minuteSecond === 0) {
            setShortBreak1(shortBreak1 - 1)
            setCount1(count1 - 1)
            dispatch(switchSession());
            setTimeout(() => {
                ses();
            }, 50)
           
            if (shortBreak1 === 1) {
            setCount1(count1 - 1)
            }
            else if (count1 === 0) {
            dispatch(long_Break())
          } 
        }
        // else 
            
        //     if (interval === 'Session') {
        //     dispatch(long_Break());
        //     res(); 
        }
        else {
           clearInterval(count)
        }
        return ()=> clearInterval(count)
    },[audio, timerRunning, minuteSecond, interval, count1,  switchSession, decrease_time, short_Break, long_Break, setCount1])


let obj = {
    shortBreak: shortBreak1,
    longBreak: longBreak1,
    minuteSecond: minute,
    sessionLength: minute,
    countFromStore: countFromStore,
  };
    return (
        <>
            <div>

                {/* <AudioPlayer src={pianino}
                    classNames={
                        {
                            controlButton: "custom-control",
                            playPause: "custom-play-pause",
                            timeText: "custom-time-text",
                            sliderTrack: "custom-slider-track"
                        }
                    } overrideStyles={true} 
             /> */}
          </div>
        
        <div className="container">
            <div className="header">
                <div>
                    <span><Info/> </span>
                    <span><Settings
                        minuteSecond={minuteSecond}
                        longBreak={longBreak1}
                        setLongBreak1={setLongBreak1}
                        shortBreak={shortBreak1}
                        setShortBreak1={setShortBreak1}
                        minute={minute}
                        minutes={minutes}
                        setMinute={setMinute}
                        obj={obj}
                        setCount1={setCount1}
                            count1={count1}
                            
                            
                    /></span>
                </div>
            </div>
            <div>
                <TimerLayout minuteSecond={minuteSecond}/>
            </div>
            {!button ? (
            <button className="button" onClick={() => {
                dispatch(start_time())
            }}>start</button>
             ) : ( 
            <StartStop obj={obj}/>
              )} 
        </div>
        </>
    )
}
export default Main