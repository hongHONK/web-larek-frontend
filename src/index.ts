import { EventEmitter } from './components/base/events';
import { CatalogModel } from './components/model/CatalogModel';
import { WebLarekApi } from './components/model/WebLarekApi';
import { CatalogCard } from './components/view/CatalogCard';
import { Page } from './components/view/Page';
import './scss/styles.scss';
import { CatalogChange } from './types/components/model/CatalogModel';
import { API_URL, cardCategorySelectors, CDN_URL, settings } from './utils/constants';
import { Product } from './types/components/model/WebLarekApi';
import { CardModal } from './components/view/CardModal';
import { BascetModel } from './components/model/BascetModel';
import { BasketChange, IBascetModel } from './types/components/model/BascetModel';
import { BascetModal } from './components/view/BascetModal';
import { BascetCard } from './components/view/BascetCard';
import { OrderModel } from './components/model/OrderModel';
import { OrderModal } from './components/view/OrderModal';
import { ContactsModal } from './components/view/ContactsModal';
import { OrderModalChange, OrderModalData } from './types/components/view/OrderModal';
import { SuccessModal } from './components/view/SuccessModal';
import { ContactsModalChange, ContactsModalData } from './types/components/view/ContactsModal';
import { SuccessModalChange } from './types/components/view/SuccessModal';
import { BascetModalChande } from './types/components/view/BascetModal';
import { BascetCardChange } from './types/components/view/BascetCard';
import { PageChange } from './types/components/view/Page';
import { CardModalChange } from './types/components/view/CardModal';
import { CatalogCardChange } from './types/components/view/CatalogCard';

const api = new WebLarekApi(API_URL, CDN_URL);
const events = new EventEmitter();
const catalogModel = new CatalogModel(api, events);
const bascetModel = new BascetModel(events);
const orderModel = new OrderModel(api, bascetModel);

const root = document.querySelector(settings.pageSelector) as HTMLElement;

const catalogCardTemplate = root.querySelector(settings.catalogCardTemplate) as HTMLTemplateElement;
const catalogCardModalTemplate = root.querySelector(settings.previewCardTemplate) as HTMLTemplateElement;
const bascetModalTemplate = root.querySelector(settings.bascetTemplate) as HTMLTemplateElement;
const bascetCardTemplate = root.querySelector(settings.bascetCardTemplate) as HTMLTemplateElement;
const orderModalTemplate = root.querySelector(settings.orderFormTemplate) as HTMLTemplateElement;
const contactsModalTemplate = root.querySelector(settings.contactsFormTemplate) as HTMLTemplateElement;
const successModalTemplate = root.querySelector(settings.successTemplate) as HTMLTemplateElement;

const page = new Page(root, {
    'catalogSelector': settings.gallerySelector,
    'catalogItemClass': settings.gallerySettings.itemClass,
    'modalContainerSelector': settings.modalContainerSelector,
    'modalCloseButtonSelector': settings.modalContainerSetting.closeButton,
    'modalContentSelector': settings.modalContainerSetting.content,
    'modalActiveClass': settings.modalContainerSetting.activeClass,
    'bascetButtonSelector': settings.headerSettings.bascetButton,
    'bascetCounterSelector': settings.headerSettings.bascetCounter
}, events);

const cardModal = new CardModal(catalogCardModalTemplate, settings.previewCardSettings, cardCategorySelectors, events);
const bascetModal = new BascetModal(bascetModalTemplate, settings.bascetSettings, events);
const orderModal = new OrderModal(orderModalTemplate, settings.orderFormSettings, events);
const contactsModal = new ContactsModal(contactsModalTemplate, settings.contactsFormSettings, events);
const successModal = new SuccessModal(successModalTemplate, settings.successSettings, events);

events.on<Pick<Product, 'id'>>(CatalogCardChange.open, data => {
    const cardData: Product = catalogModel.getProductById(data.id);
    page.modalContent = cardModal.render(cardData);
    page.modalIsActive = true;
})

events.on<Pick<Product, 'id'>>(CardModalChange.bascetAdd, data => {
    bascetModel.addProduct(catalogModel.getProductById(data.id));
})

events.on(PageChange.bascet, () => {
    page.modalContent = bascetModal.render();
    page.modalIsActive = true;
})

events.on<Pick<Product, 'id'>>(BascetCardChange.delete, data => {
    bascetModel.removeProduct(catalogModel.getProductById(data.id));
    page.modalContent = bascetModal.render();
})

events.on(BascetModalChande.confirm, () => {
    page.modalContent = orderModal.render();
})

events.on<OrderModalData>(OrderModalChange.submit, data => {
    orderModel.paymentMethod = data.method;
    orderModel.address = data.address;

    page.modalContent = contactsModal.render();
})

events.on<ContactsModalData>(ContactsModalChange.submit, data => {
    orderModel.email = data.email;
    orderModel.phone = data.phone;

    orderModel.sendOrder().then(res => {
        page.modalContent = successModal.render(res);
        orderModal.clearValue();
        contactsModal.clearValue();
        bascetModel.resetBascet();
    });
})

events.on(SuccessModalChange.confirm, () => {
    page.modalIsActive = false;
})

events.on<Product[]>(CatalogChange.catalogList, data => {
    const elements = data.map(item => {
        const element = new CatalogCard(catalogCardTemplate, settings.catalogCardSettings, cardCategorySelectors, events);
        return element.render(item);
    });
    page.catalogContent = elements;
});

events.on<IBascetModel>(BasketChange.bascetList, data => {
    page.bascetCounter = data.totalProducts;

    const elements = data.items.map((item, index) => {
        const element = new BascetCard(bascetCardTemplate, settings.bascetCardSettings, events);
        return element.render({
            ...item,
            index: (index + 1)
        });
    });

    bascetModal.items = elements;
    bascetModal.total = data.totalPrice;
})

catalogModel.loadProducts();