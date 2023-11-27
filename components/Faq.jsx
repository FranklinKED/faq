import React, { useState } from "react";

import arrow from "../public/icon-arrow-down.svg";
export default function Faq({ data }) {
  return data.map((el, index) => (
    <FaqItem question={el.question} answer={el.answer} key={index} />
  ));
}

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleShow() {
    setIsOpen((prevCount) => !prevCount);
  }

  return (
    <li className="list" onClick={handleShow}>
      <div className="reveal-answer">
        <p className={`question ${isOpen ? "red-title" : ""}`}>{question}</p>
        <img className={isOpen ? "arrow-rotate" : "arrow"} src={arrow} alt="" />
      </div>
      {isOpen && <p className="answer">{answer}</p>}
      <br />
      {/* <hr /> */}
    </li>
  );
}
