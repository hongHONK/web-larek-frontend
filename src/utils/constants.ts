import { CardCategoryOptions, Settings } from "../types/settings";

export const API_URL = `${process.env.API_ORIGIN}/api/weblarek`;
export const CDN_URL = `${process.env.API_ORIGIN}/content/weblarek`;

export const cardCategorySelectors: CardCategoryOptions = {
    soft: 'card__category_soft',
    hard: 'card__category_hard',
    other: 'card__category_other',
    extra: 'card__category_additional',
    button: 'card__category_button'
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
        element: '.card',
        openButton: '.card',
        category: '.card__category',
        title: '.card__title',
        image: '.card__image',
        price: '.card__price'
    },

    previewCardTemplate: '#card-preview',
    previewCardSettings: {
        element: '.card_full',
        image: '.card__image',
        category: '.card__category',
        title: '.card__title',
        text: '.card__text',
        bascetButton: '.card__button',
        price: '.card__price' 
    },

    bascetCardTemplate: '#card-basket',
    bascetCardSettings: {
        element: '.basket__item',
        index: '.basket__item-index',
        title: '.card__title',
        price: '.card__price',
        deleteButton: '.basket__item-delete'
    },

    bascetTemplate: '#basket',
    bascetSettings: {
        element: '.basket',
        itemContainer: '.basket__list',
        confirmButton: '.basket__button',
        total: '.basket__price'
    },

    orderFormTemplate: '#order',
    orderFormSettings: {
        element: 'form[name="order"]',
        cardButton: 'button[name="card"]',
        cashButton: 'button[name="cash"]',
        addressInput: 'input[name="address"]',
        submitButton: 'button[type="submit"]',
        error: '.form__errors',
        altButtonOptions: {
            button: 'button',
            altButton: 'button_alt',
            altButtonActive: 'button_alt-active'
        } 
    },

    contactsFormTemplate: '#contacts',
    contactsFormSettings: {
        element: 'form[name="contacts"]',
        emailInput: 'input[name="email"]',
        phoneInput: 'input[name="phone"]',
        submitButton: 'button[type="submit"]',
        error: '.form__errors'
    },

    successTemplate: '#success',
    successSettings: {
        element: '.order-success',
        description: '.order-success__description',
        confirmButton: '.order-success__close'
    },

    modalContainerSelector: '#modal-container',
    modalContainerSetting: {
        content: '.modal__content',
        closeButton: '.modal__close',
        activeClass: 'modal_active'
    }
};

// input[name="pwd"] - selector by name
