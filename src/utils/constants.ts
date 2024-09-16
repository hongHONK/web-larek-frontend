import { CardCategoryOptions, Settings } from "../types/settings";

export const API_URL = `${process.env.API_ORIGIN}/api/weblarek`;
export const CDN_URL = `${process.env.API_ORIGIN}/content/weblarek`;

export const cardCategorySelectors: CardCategoryOptions = {
    soft: '.card__category_soft'
}

export const settings: Settings = {
    pageSelector: '.page',

    headerSelector: '.header',
    headerSettings: {
        logo: '.header__logo-image',
        bascetButton: '.header__basket',
        bascetCounter: '.header__basket-counter'
    },
    
    gallerySelector: '.gallery',
    gallerySettings: {
        itemClass: '.gallery__item'
    },

    catalogCardTemplate: '#card-catalog',
    catalogCardSettings: {
        openButton: '.card',
        cardCaregory: '.card__category',
        title: '.card__title',
        image: '.card__image',
        price: '.card__price'
    },

    previewCardTemplate: '#card-preview',
    previewCardSettings: {
        image: '.card__image',
        cardCaregory: '.card__category',
        title: '.card__title',
        text: '.card__text',
        bascetButton: '.card__button',
        price: '.card__price' 
    },

    bascetCardTemplate: '#card-basket',
    bascetCardSettings: {
        index: '.basket__item-index',
        title: '.card__title',
        price: '.card__price',
        deleteButton: '.basket__item-delete'
    },

    bascetTemplate: '#basket',
    bascetSettings: {
        itemContainer: '.basket__list',
        confirmButton: '.basket__button',
        total: '.basket__price'
    },

    orderFormTemplate: '#order',
    orderFormSettings: {
        cardButton: 'button[name="card"]',
        cashButton: 'button[name="cash"]',
        addressInput: 'input[name="address"]',
        submitButton: 'button[type="submit"]',
        error: '.form__errors'
    },

    contactsFormTemplate: 'contacts',
    contactsFormSettings: {
        emailInput: 'input[name="email"]',
        phoneInput: 'input[name="phone"]',
        submitButton: 'button[type="submit"]',
        error: '.form__errors'
    },

    successTemplate: '#success',
    successOptions: {
        description: '.order-success__description',
        confirmButton: '.order-success__close'
    },

    modalContainerSelector: '#modal-container',
    modalContainerSetting: {
        content: '.modal__content',
        closeButton: '.modal__close',
        activeClass: '.modal_active'
    }
};

// input[name="pwd"] - selector by name
