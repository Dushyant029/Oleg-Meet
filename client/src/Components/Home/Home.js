import React, { useContext, useEffect } from "react";
import { SocketContext } from "../../SocketContext";
import "./Home.css";
import Footer from "../Footer/Footer";
import homeIcon1 from "../../assets/logo.png";
import homeIcon2 from "../../assets/bac5.png";
import noteIcon from "../../assets/note2.png";
import ChatIcon from "@material-ui/icons/Chat";
import EventNoteIcon from "@material-ui/icons/EventNote";
import SurroundSoundIcon from "@material-ui/icons/SurroundSound";
import VoiceChatIcon from '@material-ui/icons/VoiceChat';
import { Link } from "react-router-dom";
import { message } from "antd";
import Navbar from "../Navbar/Navbar";

const Home = (props) => {
  const paramsCode = props.location.search;

  const { meetingCode, setMeetingCode, setNewMeet } = useContext(SocketContext);

  useEffect(() => {
    if (paramsCode.length) {
      if (paramsCode.substring(0, 5) === "?ref=") return; // for product hunt ref
      setMeetingCode(paramsCode.substring(1));
    }
    setNewMeet(null);
  }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="body-div">
        <div className="flex-box">
          <div className="left-div">
            <div className="contents">
              <div className="start-meet">
                <Link
                  className="home-btn"
                  to="join"
                  onClick={() => {
                    setNewMeet(true);
                  }}
                >
                  Start Meeting
                </Link>
              </div>
              <div className="join-meet">
                <input
                  type="text"
                  placeholder="Enter meeting code"
                  value={meetingCode || ""}
                  onChange={(e) => {
                    setMeetingCode(e.target.value);
                  }}
                />
                <button
                  className="home-btn"
                  onClick={() => {
                    if (!meetingCode || meetingCode.trim().length === 0) {
                      message.error("Please enter the meeting code");
                      return;
                    }
                    props.history.push("join");
                  }}
                >
                  Join Meeting
                </button>
              </div>
              <div className="features">
                <h1>Features</h1>
                <div className="grid-div">
                  <VoiceChatIcon />
                  <p>1:1 Video </p>
                </div>
                <div className="grid-div">
                  <ChatIcon />
                  <p>Real-time Chat</p>
                </div>
                <div className="grid-div">
                  <SurroundSoundIcon />
                  <p>Live Editor for Interview</p>
                </div>
                <div className="grid-div">
                  <EventNoteIcon />
                  <p>Prepare Notes</p>
                </div>
              </div>
              <img src={homeIcon1} alt="" className="chat-img" />
              <img src={noteIcon} alt="" className="note-img" />
            </div>
          </div>
          <div className="right-div">
            <img src={homeIcon2} alt="" className="bac-img" />
            {/* <video
              src={homeVideo}
              id="video"
              alt="video"
              autoPlay
              muted
              loop
            ></video> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
