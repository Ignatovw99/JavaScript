export async function loadPartials(context) {

    const [headerPartial, footerPartial, offerPartial] = await Promise.all([
        context.load('/templates/partials/header.hbs'),
        context.load('/templates/partials/footer.hbs'),
        context.load('/templates/partials/offer.hbs')
    ]);
    context.partials = {
        header: headerPartial,
        footer: footerPartial,
        offer: offerPartial
    };
}

export function errorHandler(err) {
    console.error(err);
}