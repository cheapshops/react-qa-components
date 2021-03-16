import React, { useState, useEffect } from "react";
import { Button } from "antd";

function AnswerContent(props) {
  const { answer } = props;
  let [answerToShow, setAnswerToShow] = useState("");
  let [showMoreButton, setShowMoreButton] = useState(false);

  useEffect(() => {
    if (answer.length > 200) {
      setAnswerToShow("Short anwser");
      setShowMoreButton(true);
    } else {
      setAnswerToShow(answer);
    }
  }, [answer]);

  return (
    <>
      <p>{answerToShow}</p>
      {showMoreButton ? (
        <Button
          onClick={() => {
            setShowMoreButton(false);
            setAnswerToShow(answer);
          }}
          type="link"
        >
          show more...
        </Button>
      ) : null}
    </>
  );
}

export default AnswerContent;
