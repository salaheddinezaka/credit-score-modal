import React from 'react'

export default function ModalButton({scoreName, scoreValue, onClick}) {
  return (
    <button className="modal__button" onClick={onClick}>
      {scoreName} <span>({scoreValue})</span>
    </button>
  );
}
