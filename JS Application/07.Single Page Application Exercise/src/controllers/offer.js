import { extendContext } from '../util';

export function createOfferView(context) {
    extendContext(context)
        .then(function() {
            this.partial('/templates/offer-create.hbs');
        });
}

export function createOfferHandler(context) {
    const { name, price, imageUrl, description, brand } = context.params;

    if (name === '' || price === '' || imageUrl === '' || description === '' || brand === '') {
        return;
    }

    offerService.create(name, price, imageUrl, description, brand, authService.getData().email)
        .then(() => this.redirect('/home'));
}

export function detailsHandler(context) {
    const id = context.params['id'];

    offerService.getById(id)
        .then(res => context.offer = ({id, ...res}))
        .then(() => {
            
            extendContext(context)
                .then(function() {
                    this.partial('/templates/offer-details.hbs');
                });
        });
}