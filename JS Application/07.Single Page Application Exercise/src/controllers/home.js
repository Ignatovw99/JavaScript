import { loadPartials, errorHandler } from '/src/util.js';
import { offerService, authService } from '/src/service.js';

function extraxtOffersFromResponse(response) {
    return Object.entries(response)
            .map(([id, offer]) => ({id, ...offer}));
}

export function homeHandler(context) {

    offerService.getAll()
        .then(res => context.offers = extraxtOffersFromResponse(res))
        .then(() => {
            Object.assign(context, authService.getData());
            loadPartials(context).then(() => context.partial('/templates/home.hbs'));
        })
        .catch(errorHandler);
};