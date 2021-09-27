export class Card {
    constructor(cardData, cardSelector, handlePhotoClick) {
        this._name = cardData.name
        this._link = cardData.link
        this._cardSelector = cardSelector
        this._handlePhotoClick = handlePhotoClick

    }

    getTemplate() {
        return document.querySelector(this._cardSelector).content.querySelector('.cards__item').cloneNode(true)

    }

    setListeners() {
        this._newCard.querySelector('.cards__like')
        .addEventListener('click', ()=>{this.like()})

        this._newCard.querySelector('.cards__delete')
        .addEventListener('click', ()=>{this.delete()})

        this._newCard.querySelector('.cards__photo')
        .addEventListener('click', this._handlePhotoClick)

    }

    generateCard() {
        this._newCard = this.getTemplate()
        this._newCard.querySelector('.cards__photo').src = this._link
        this._newCard.querySelector('.cards__photo').alt = this._name
        this._newCard.querySelector('.cards__place').textContent = this._name
        this.setListeners()
        return this._newCard
    }

    like() {
        this._newCard.querySelector('.cards__like').classList.toggle('cards__like_active')
    }

    delete() {
        this._newCard.remove()
    }


}