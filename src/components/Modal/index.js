"use client"
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { CSSTransition } from 'react-transition-group';

const CONTAINER_MODAL_ID = "modal"
const CONTAINER_MARGIN_Y = "py-10"

export default function Modal({
  isActive, setActive, children, wrapperClassName
}) {

  const [modalContainer, setContainer] = useState(false)

  useEffect(() => {
    setContainer(true)

    let containedDomNode = document.getElementById(CONTAINER_MODAL_ID)
    if (!containedDomNode) {
      containedDomNode = document.createElement("div")
      containedDomNode.setAttribute("id", CONTAINER_MODAL_ID)
      document.body.appendChild(containedDomNode)
    }
    return () => {
      setContainer(false)
    }
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");

    if (isActive) body.classList.toggle("overflow-y-hidden");

    return () => {
      body.classList.remove("overflow-y-hidden");
    }
  }, [isActive])

  if (modalContainer) {
    return createPortal(
      <CSSTransition
        timeout={150}
        in={isActive}
        unmountOnExit
        classNames={{
          appear: "opacity-0",
          appearActive: "opacity-0",
          appearDone: "opacity-100",
          enter: "opacity-0",
          enterActive: "opacity-0",
          enterDone: "opacity-100",
          exit: "",
          exitActive: "opacity-0",
          exitDone: "opacity-0",
        }}
      >
        <div className="transition-all fixed inset-0 bg-black/10 z-50 overflow-auto">
          <div className={["flex items-center justify-center min-h-screen", CONTAINER_MARGIN_Y].join(" ")}>
            <div className={["bg-white py-5 px-5 relative shadow-great rounded-md mx-4", wrapperClassName].join(" ")}>
              <button className='absolute right-0 top-0 w-10 h-10 text-4xl flex items-center justify-center' onClick={() => setActive(false)}>
                &times;
              </button> 
              {children}
            </div>
          </div>
        </div>
      </CSSTransition>,
      document.getElementById(CONTAINER_MODAL_ID)
    )
  }
  return null
}
