import { motion } from "framer-motion";
import React from "react";
import CloseIcon from "./CloseIcon";
import ModalButton from "./ModalButton";

export default function CreditScoreModal({
  selectValue,
  closeHandler,
  show = false,
}) {
  return (
    <>
      <div
        className="scores__modal--background"
        style={{ display: `${show ? "block" : "none"}` }}
      ></div>
      <motion.div
        className="scores__modal"
        animate={show ? "open" : "close"}
        variants={{
          open: { display: "block", top: 50, opacity: 1 },
          close: { display: "none", top: 0, opacity: 0 },
        }}
      >
        <CloseIcon onClick={closeHandler} />
        <div className="modal__info">
          <div className="modal__header">
            <div className="modal__title">What is your credit score?</div>
            <div>
              <img
                src="https://cdn.zeplin.io/5fb6b6e30914549574b7eeee/assets/C9A3EE51-8117-4B8C-886B-7D285BF3F34B.png"
                alt="credit score"
              />
            </div>
          </div>
          <div className="modal__buttons">
            <ModalButton
              scoreName="Excellent"
              scoreValue="720-850"
              onClick={() => selectValue("excellent")}
            />
            <ModalButton
              scoreName="Fair"
              scoreValue="630-689"
              onClick={() => selectValue("fair")}
            />
            <ModalButton
              scoreName="Good"
              scoreValue="690-719"
              onClick={() => selectValue("good")}
            />
            <ModalButton
              scoreName="Poor"
              scoreValue="350-629"
              onClick={() => selectValue("poor")}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}
