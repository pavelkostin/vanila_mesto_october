import { Card } from './components/Card.js';
import { PopupGallery } from './components/GalleryPopup.js';
import { Popup } from './components/Popup.js';
import { PopupWithForm } from './components/PopupWithForm.js';
import { Section } from './components/Section.js';
import { UserInfo } from './components/UserInfo.js';
import './pages/index.css';
import { initialCards } from './utils/constants.js';


const cardsListSection = document.querySelector('.cards__list')
const editProfileBtn = document.querySelector('.profile__edit')
const editProfilePopup = document.querySelector('.popup_edit-profile')
const addCardPopup = document.querySelector('.popup_add-card')
const addCardBtn = document.querySelector('.profile__add')
const galleryPopup = document.querySelector('.popup_gallery')

const profileName = document.querySelector('.profile__name')
const profileJob = document.querySelector('.profile__job')
const popupName = document.querySelector('.popup__input_name')
const popupJob = document.querySelector('.popup__input_job')

const popupPlace = document.querySelector('.popup__input_place')
const popupLink = document.querySelector('.popup__input_link')


// class

const newPopupGallery = new PopupGallery(galleryPopup)
newPopupGallery.setListeners()

const newUserInfo = new UserInfo(profileName, profileJob)

const newPopupEditProfile = new PopupWithForm(
    editProfilePopup,
    () => {
        newUserInfo.setUserInfo(popupName.value, popupJob.value)
        newPopupEditProfile.close()
    }
)

newPopupEditProfile.setListeners()

const newPopupAddCard = new PopupWithForm(
    addCardPopup,
    () => {
        CardsList.prependItem(createCard({name: popupPlace.value, link: popupLink.value}))
        newPopupAddCard.close()
    }
)

newPopupAddCard.setListeners()


// functions

function createCard(card) {
    const newCard = new Card(
        card,
        '.template',
        () => {
            newPopupGallery.open(card)
        }
    )
    return newCard.generateCard()
}

// render cards
const CardsList = new Section({
    items: initialCards,
    renderer: (card) => {
        CardsList.appendItem(createCard(card))
    }

}, cardsListSection)

CardsList.renderItems()

// listeners

editProfileBtn.addEventListener('click', () => {
    newPopupEditProfile.open()
    const userData = newUserInfo.getUserInfo()
    popupName.value = userData.a
    popupJob.value = userData.b

})


addCardBtn.addEventListener('click', ()=>{
    newPopupAddCard.open()
})








