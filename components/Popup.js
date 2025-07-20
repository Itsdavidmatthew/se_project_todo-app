class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._addTodoCloseBtn = this._popupElement.querySelector(".popup__close");
  }

  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      console.log("esape was pressed");
      this.close();
    }
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keyup", (evt) => {
      this._handleEscapeClose(evt);
    });
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    document.removeEventListener("keyup", (evt) => {
      this._handleEscapeClose(evt);
    });
  }

  setEventListeners() {
    // this._addTodoCloseBtn.addEventListener("click", (evt) => {
    //   this.close();
    // });

    this._popupElement.addEventListener("mousedown", (evt) => {
      if (
        evt.target.classList.contains("popup__close") ||
        evt.target.classList.contains("popup")
      ) {
        this.close();
      }
    });
  }
}

export default Popup;
