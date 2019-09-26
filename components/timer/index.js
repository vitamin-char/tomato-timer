import { connect } from "react-redux";
import Timer from "./presnter";

function mapStateToProps(state) {
  const { isPlaying, elapsedTime, timerDuration } = state;
  return {
    isPlaying,
    elapsedTime,
    timerDuration
  };
}

export default connect(mapStateToProps)(Timer);
