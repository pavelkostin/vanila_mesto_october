import { Popup } from "./Popup.js";

export class PopupGallery extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
    }

    open(data) {
        super.open()
        this._popupSelector.querySelector('.popup__image').src = data.link
        this._popupSelector.querySelector('.popup__image').alt = data.name
        this._popupSelector.querySelector('.popup__caption').textContent = data.name
    }


}