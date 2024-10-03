export interface CardCategoryOptions {
    soft: string;
    hard: string;
    other: string;
    extra: string;
    button: string;
}

export interface AltButtonOptions {
    button: string;
    altButton: string;
    altButtonActive: string;
}

export interface Settings {
    pageSelector: string;
    
    headerSelector: string;
    headerSettings: {
        logo: string;
        bascetButton: string;
        bascetCounter: string;
    }
    
    gallerySelector: string;
    gallerySettings: {
        itemClass: string;
    };

    catalogCardTemplate: string;
    catalogCardSettings: {
        element: string;
        openButton: string;
        category: string;
        title: string;
        image: string;
        price: string;
    };

    previewCardTemplate: string;
    previewCardSettings: {
        element: string;
        image: string;
        category: string;
        title: string;
        text: string;
        bascetButton: string;
        price: string; 
    };

    bascetCardTemplate: string;
    bascetCardSettings: {
        element: string;
        index: string;
        title: string;
        price: string;
        deleteButton: string;
    };

    bascetTemplate: string;
    bascetSettings: {
        element: string;
        itemContainer: string;
        confirmButton: string;
        total: string;
    };

    orderFormTemplate: string;
    orderFormSettings: {
        element: string;
        cardButton: string;
        cashButton: string;
        addressInput: string;
        submitButton: string;
        error: string;
        altButtonOptions: AltButtonOptions;
    };

    contactsFormTemplate: string;
    contactsFormSettings: {
        element: string;
        emailInput: string;
        phoneInput: string;
        submitButton: string;
        error: string;
    };

    successTemplate: string;
    successSettings: {
        element: string;
        description: string;
        confirmButton: string;
    };

    modalContainerSelector: string;
    modalContainerSetting: {
        content: string;
        closeButton: string;
        activeClass: string;
    };
}

// modal_active - активированная модалка