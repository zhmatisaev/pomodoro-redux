import {
  SAVE_TIME,
  START_TIME,
  DECREASE_TIME,
  SWITCH_SESSION,
  STOP_TIME,
  RESET_TIME,
  SHORT_BREAK,
  LONG_BREAK
} from "../action/action";

// const local = JSON.parse(localStorage.getItem("time"));
localStorage.removeItem("time")

const initialState = {
  shortBreak: 2,
  // length25 : 1,
  longBreak: 10,
  count: 3,
  minuteSecond: 1500,
  timerRunning: false,
  interval: "Session",
  button: false
};

// session: state.session === 3600 ? state.session : state.userSetSession + 60,
// userSetSession: state.userSetSession === 3600 ? state.userSetSession : state.userSetSession + 60

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TIME:
      // console.log(shortBreak);
      return {
        ...state,
        shortBreak: action.obj.shortBreak,
        longBreak: action.obj.longBreak,
        minuteSecond: action.obj.minuteSecond * 60,

        // interval: 'Session'
        //  count: state.count,
      };
    case START_TIME:
      return {
        ...state,
        button: true,
        timerRunning: true,
        interval: "Session"
      };
    case DECREASE_TIME:
      console.log("decrease");
      return {
        ...state,
        minuteSecond: state.minuteSecond - 1,
      };
    case STOP_TIME:
      return {
        ...state,
        timerRunning: false,
      };

    case RESET_TIME:
      return {
        ...state,
        shortBreak: 5,
                length25: 1,
                interval: 'Session',
                minuteSecond: 25 * 60,
                timerRunning: false,
                button: false,

        // ...state,
        // minuteSecond: state.minuteSecond,
        // timerRunning: false,
      };

    case SWITCH_SESSION:
      return {
        ...state,
        interval: "Session",
        minuteSecond: state.minuteSecond * 60,
      };
    
    case SHORT_BREAK:
      return {
        ...state,
        interval: "Break",
        minuteSecond: state.shortBreak * 60,
      };

      case LONG_BREAK:
        return {
          ...state,
          interval: "Break",
          minuteSecond: state.longBreak * 60,
        }
    default:
      return state;
  }
}