import React, { useEffect, useState, useRef } from "react";
import Webcam from "react-webcam";

const VideoRoc = () => {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const [audioQuestion, setAudioQuestion] = useState(
    "https://beardbarnmusicbucket.s3.amazonaws.com/The+Wild+Horse"
  );

  const [isPlay, setIsPlay] = useState(false);
  const [isRecord, setIsRecord] = useState(false);

  const playAudio = () => {
    audioElm.current.play();
    setIsPlay(true);
    handleStartCaptureClick();
  };

  const PlayNextQuestion = () => {
    // Code for get next question and set to the audioQuestion
    handleStopCaptureClick();
    // play next question
    playAudio();
  };
  const audioElm = useRef();

  useEffect(() => {
    // if (isRecord) {
    //   handleStartCaptureClick();
    // } else {
    //   handleStopCaptureClick();
    // }
  }, []);

  const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handleDownload = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  return (
    <>
      <Webcam audio={true} ref={webcamRef} width="250px" />
      {/* {capturing ? (
        <button onClick={handleStopCaptureClick}>Stop Capture</button>
      ) : (
        <button onClick={handleStartCaptureClick}>Start Capture</button>
      )}
      {recordedChunks.length > 0 && (
        <button onClick={handleDownload}>Download</button>
      )} */}
      <audio src={audioQuestion} ref={audioElm} />
      <div className="flex-grow-0 py-3 px-4 border-top">
        <div className="text-center align-items-center py-1">
          <div>
            <button
              className="btn btn-success btn-sm me-1 px-2 mx-2"
              onClick={playAudio}
            >
              <i className="feather-lg" data-feather="play"></i>{" "}
              <span className="align-middle"> Start</span>
            </button>

            <button
              className="btn btn-primary border btn-sm px-2 mx-2"
              onClick={PlayNextQuestion}
            >
              <i className="feather-lg" data-feather="pause"></i>
              <span className="align-middle"> Next</span>{" "}
            </button>
            <a className="btn btn-info border btn-sm px-2 mx-2" href="/summery">
              <i className="feather-lg" data-feather="pause"></i>
              <span className="align-middle"> Summery</span>{" "}
            </a>
            {isPlay && (
              <span>
                <i class="bx bxs-music bx-burst fs-4 ms-2 text-primary"></i>
              </span>
            )}
          </div>
          <div className="mt-3">
            <div class="mb-3">
              <label
                for="exampleFormControlTextarea1 "
                class="form-label fw-bold"
              >
                Type Your Answer here
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoRoc;
