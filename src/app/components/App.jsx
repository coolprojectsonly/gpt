import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { info } from "./createReducer";

function App() {
  const [text, setText] = useState("");
  const { status, error, data } = useSelector((state) => state.post);

  const handleGPT = () => {
    dispatch(info({ text }));
    // console.log(text);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const dispatch = useDispatch();

  console.log(data?.result);
  return (
    <div>
      <div className="container">
        <h1
          style={{
            backgroundImage: "url(/three.png)",
            backgroundSize: "contain",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          GPT <span className="app">APP</span>
        </h1>
        {status === "succeed" && (
          <div className="chats" style={{ marginBottom: "20px" }}>
            {data && (
              <motion.h3
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                style={{
                  color: "white",
                  textAlign: "center",
                  margin: "10px",
                }}
              >
                {data?.result}
              </motion.h3>
            )}
          </div>
        )}
        {status === "loading" && (
          <div className="loading">
            <video autoPlay loop muted src="/load.mp4"></video>
          </div>
        )}
        <div
          className="input-section"
          style={{ display: status === "loading" ? "none" : "block" }}
        >
          <input
            type="text"
            placeholder="Chat Here..."
            onChange={handleChange}
            style={{
              width: status === "succeed" ? "200px" : "400px",
              borderRadius: "0 20px 0 10px",
            }}
          />

          <div
            className="submit"
            style={{ right: status === "succeed" ? "15%" : "8%" }}
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              onClick={handleGPT}
              style={{ color: "red", cursor: "pointer", fontSize: "30px" }}
            ></FontAwesomeIcon>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default App;
