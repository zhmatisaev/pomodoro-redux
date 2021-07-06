// // import React, { useEffect, useState } from 'react'
// // import './Settings.css'
// // import Button from "react-bootstrap/Button";
// // import Modal from "react-bootstrap/Modal";
// // import { AiFillSetting } from "react-icons/ai";
// // import { useSelector } from 'react-redux';
// // import { useDispatch } from 'react-redux';
// // import { save_time } from '../../store/action/action';

// // function Settings() {
// //   // bootstrap
// //   const [show, setShow] = useState(false);
// //   const handleClose = () => setShow(false);
// //   const handleShow = () => setShow(true);

// //   // minute
// //   const minuteSecond = useSelector((state) => state.minuteSecond);
// //   let minutes = Math.floor(minuteSecond /60);
// //   const [minute, setMinute] = useState(minutes);
// //   // let minutes = Math.floor(minuteSecond / 60);
// //   // let seconds = minuteSecond - minutes * 60;
// //   console.log(minutes);

// //   // console.log(seconds < 10 ? ("0" + seconds).slice(-2) : seconds );
// //   // console.log(minutes < 10 ? ("0" + minutes).slice(-2) : minutes);



// //   // short break
// //   const shortBreakFromStore = useSelector((state) => state.shortBreak);
// //   const [shortBreak, setShortBreak] = useState(shortBreakFromStore);
// //   // long break
// //   const longBreakFromStore = useSelector((state) => state.longBreak);
// //   const [longBreak, setLongBreak] = useState(longBreakFromStore);
// //   // count
// //   const countFromStore = useSelector((state) => state.count);
// //   const [count, setCount] = useState(countFromStore);

// //   // dispatch
// //   const dispatch = useDispatch();
// //   // console.log(minute + "minuteSecond");
// //   let obj = {
// //     shortBreak: shortBreak,
// //     longBreak: longBreak,
// //     minuteSecond: minute,
// //   };

// //   //  let state_time = useSelector((state) => state.state)

// //   const onSave = () => {
// //     handleClose();
// //     dispatch(save_time(obj));
// //   };

// //   return (
// //     <>
// //       <Button style={{ width: 50, height: 50 }} onClick={handleShow}>
// //         <AiFillSetting />
// //       </Button>

// //       <Modal className="settings_main" show={show} onHide={handleClose}>
// //         <div className="settings__container">
// //           <h3>Settings</h3>
// //           <div>
// //             <h4>Pomodoro</h4>
// //             <input
// //               type="number"
// //               value={minute}
// //               onChange={(e) => setMinute(e.target.value)}
// //             />
// //           </div>
// //           <div>
// //             <h4>Short Break</h4>
// //             <input
// //               type="number"
// //               value={shortBreak}
// //               onChange={(e) => setShortBreak(e.target.value)}
// //             />
// //           </div>
// //           <div>
// //             <h4>Long Break</h4>
// //             <input
// //               type="number"
// //               value={longBreak}
// //               onChange={(e) => setLongBreak(e.target.value)}
// //             />
// //           </div>
// //           <div>
// //             <h4>Pomodoro Count</h4>
// //             <input
// //               type="number"
// //               value={count}
// //               onChange={(e) => setCount(e.target.value)}
// //             />
// //           </div>
// //           <div className="text">Auto Play without push notifications</div>
// //           <div>
// //             <input className="checked" type="checkbox" />
// //           </div>
// //           <Modal.Footer>
// //             <Button
// //               style={{ marginTop: 15, textAlign: "center" }}
// //               type="primary"
// //               onClick={onSave}
// //             >
// //               all ok
// //             </Button>
// //           </Modal.Footer>
// //         </div>
// //       </Modal>
// //     </>
// //   );
// // }

// // export default Settings



// import React, { useEffect, useState } from "react";
// import "./Settings.css";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import { AiFillSetting } from "react-icons/ai";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { save_time } from "../../store/action/action";
// // import longBreak from '../../store/action/action'




// function Settings(props) {
//   // bootstrap
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   // // minute
//   // const minuteSecond = useSelector((state) => state.minuteSecond);
//   // const sessionLength = useSelector((state) => state.sessionLength);
//   // let minutes = Math.floor(minuteSecond / 60);
//   // const [minute, setMinute] = useState(props.minutes);
//   // console.log(props.minutes);
//   // minute
//   // const minuteSecond = useSelector((state) => state.minuteSecond);
//   // const sessionLength = useSelector((state) => state.sessionLength);
//   // let minutes = Math.floor(props.minuteSecond / 60);
//   // const [minute, setMinute] = useState(props.minutes);
//   // // short break
//   // const shortBreakFromStore = useSelector((state) => state.shortBreak);
//   // const [shortBreak, setShortBreak] = useState(shortBreakFromStore);
//   // short break
//   // const shortBreakFromStore = useSelector((state) => state.shortBreak);
//   const [shortBreak, setShortBreak] = useState(props.shortBreakFromStore);
//   // // long break
//   // const longBreakFromStore = useSelector((state) => state.longBreak);
//   // const [longBreak, setLongBreak] = useState(longBreakFromStore);
//   // long break
//   // const longBreakFromStore = useSelector((state) => state.longBreak);
//   const [longBreak, setLongBreak] = useState(props.longBreakFromStore);
//   // count
//   // const countFromStore = useSelector((state) => state.count);
//   // const [count, setCount] = useState(countFromStore);
//   // count
//   // const countFromStore = useSelector((state) => state.count);
//   const [count, setCount] = useState(props.countFromStore);
//   // dispatch
//   const dispatch = useDispatch();
//   // console.log(minute + "minuteSecond");
//   // let obj = {
//   //   shortBreak: shortBreak,
//   //   longBreak: longBreak,
//   //   minuteSecond: minute,
//   //   sessionLength: minute,
//   // };
//   const onSave = () => {
//     handleClose();
//     // dispatch(save_time(props.obj));
//   };
//   return (
//     <>
//       <Button style={{ width: 50, height: 50 }} onClick={handleShow}>
//         <AiFillSetting />
//       </Button>
//       <Modal className="settings_main" show={show} onHide={handleClose}>
//         <div className="settings__container">
//           <h3>Settings</h3>
//           <div>
//             <h4>Pomodoro</h4>
//             <input
//               type="number"
//               value={props.minute}
//               onChange={(e) => props.setMinute(e.target.value)}
//             />
//           </div>
//           <div>
//             <h4>Short Break</h4>
//             <input
//               type="number"
//               value={shortBreak}
//               onChange={(e) => setShortBreak(e.target.value)}
//             />
//           </div>
//           <div>
//             <h4>Long Break</h4>
//             <input
//               type="number"
//               value={longBreak}
//               onChange={(e) => setLongBreak(e.target.value)}
//             />
//           </div>
//           <div>
//             <h4>Pomodoro Count</h4>
//             <input
//               type="number"
//               value={count}
//               onChange={(e) => setCount(e.target.value)}
//             />
//           </div>
//           <div className="text">Auto Play without push notifications</div>
//           <div>
//             <input className="checked" type="checkbox" />
//           </div>
//           <Modal.Footer>
//             <Button
//               style={{ marginTop: 15, textAlign: "center" }}
//               type="primary"
//               onClick={onSave}
//             >
//               all ok
//             </Button>
//           </Modal.Footer>
//         </div>
//       </Modal>
//     </>
//   );
// }
// export default Settings;

// =======================================================================

import React, { useEffect, useState } from "react";
import "./Settings.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiFillSetting } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { save_time } from "../../store/action/action";
function Settings(props) {
  // bootstrap
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [shortBreak, setShortBreak] = useState(props.shortBreak);
  const [longBreak, setLongBreak] = useState(props.longBreak);
  const [count, setCount] = useState(props.countFromStore);
  // dispatch
  const dispatch = useDispatch();
  // let obj = {
  //   shortBreak: shortBreak,
  //   longBreak: longBreak,
  //   minuteSecond: minute,
  //   sessionLength: minute,
  // };
  const onSave = () => {
    handleClose();
    dispatch(save_time(props.obj));
  };
  return (
    <>
      <Button style={{ width: 50, height: 50 }} onClick={handleShow}>
        <AiFillSetting />
      </Button>
      <Modal className="settings_main" show={show} onHide={handleClose}>
        <div className="settings__container">
          <h3>Settings</h3>
          <div>
            <h4>Pomodoro</h4>
            <input
              // type="number"
              value={props.minute}
              onChange={(e) => props.setMinute(e.target.value)}
            />
          </div>
          <div>
            <h4>Short Break</h4>
            <input
              // type="number"
              value={shortBreak}
              onChange={(e) => setShortBreak(e.target.value)}
            />
          </div>
          <div>
            <h4>Long Break</h4>
            <input
              // type="number"
              value={longBreak}
              onChange={(e) => setLongBreak(e.target.value)}
            />
          </div>
          <div>
            <h4>Pomodoro Count</h4>
            <input
              type="number"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
          </div>
          <div className="text">Auto Play without push notifications</div>
          <div>
            <input className="checked" type="checkbox" />
          </div>
          <Modal.Footer>
            <Button
              style={{ marginTop: 15, textAlign: "center" }}
              type="primary"
              onClick={onSave}
            >
              all ok
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}
export default Settings;
