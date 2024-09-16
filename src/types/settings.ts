export interface CardCategoryOptions {
    soft: string;
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
        openButton: string;
        cardCaregory: string;
        title: string;
        image: string;
        price: string;
    };

    previewCardTemplate: string;
    previewCardSettings: {
        image: string;
        cardCaregory: string;
        title: string;
        text: string;
        bascetButton: string;
        price: string; 
    };

    bascetCardTemplate: string;
    bascetCardSettings: {
        index: string;
        title: string;
        price: string;
        deleteButton: string;
    };

    bascetTemplate: string;
    bascetSettings: {
        itemContainer: string;
        confirmButton: string;
        total: string;
    };

    orderFormTemplate: string;
    orderFormSettings: {
        cardButton: string;
        cashButton: string;
        addressInput: string;
        submitButton: string;
        error: string;
    };

    contactsFormTemplate: string;
    contactsFormSettings: {
        emailInput: string;
        phoneInput: string;
        submitButton: string;
        error: string;
    };

    successTemplate: string;
    successOptions: {
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