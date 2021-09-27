import { Popup } from "./Popup.js"

export class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmit) {
        super(popupSelector)
        this.formSubmit = formSubmit
    }

    _getInputValues() {
        this._inputList = this._popupSelector.querySelectorAll('.popup__input')
        this._formValues = {}
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value
        });
        return this._formValues

    }

    setListeners() {
        super.setListeners()
        this._popupSelector.querySelector('.popup__form').addEventListener('submit', (e) => {
            e.preventDefault()
            this.formSubmit(this._getInputValues())
        })
    }

    close() {
        super.close()
        this._popupSelector.querySelector('.popup__form').reset()
    }

}