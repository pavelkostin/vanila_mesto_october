export class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector
    }

    open() {
        this._popupSelector.classList.add('popup_visible')
        document.addEventListener('keydown', this._handleEscClose.bind(this))
    }

    close() {
        this._popupSelector.classList.remove('popup_visible')
        document.removeEventListener('keydown', this._handleEscClose.bind(this))

    }

    _handleEscClose(e) {
        if(e.key === 'Escape') {
            this.close()
        }
    }

    handleCloseByClick(e) {
        if(e.target === e.currentTarget || e.target.classList.contains('popup__close')) {
            this.close()
        }
    }

    setListeners() {
        this._popupSelector.addEventListener('click', this.handleCloseByClick.bind(this))
    }

}