const htmlDomElementHelper = {

    createHtmlTemplate(templateId, templateData) {
        const template = Handlebars.compile(document.getElementById(templateId).innerHTML);
        return template(templateData);
    },

    createDomElementFromHtmlText(htmlText) {
        const wrapperElement = document.createElement('div');
        const domElements = new DOMParser().parseFromString(htmlText, 'text/html').body.children;
        Array.from(domElements)
            .forEach(x => wrapperElement.appendChild(x));
        return wrapperElement;
    },

    getDomFromTextTemplate(templateId, templateData) {
        return this.createDomElementFromHtmlText(this.createHtmlTemplate(templateId, templateData));
    }, 

};

const eventListenerHelper = {

    attachEventHanlderObjectTo(domElement, templateEventHandlers) {
        Object.entries(templateEventHandlers)
                .forEach(([querySelector, hanlderObj]) => 
                        domElement.querySelector(querySelector)
                                    .addEventListener(hanlderObj.type, hanlderObj.hanlder, hanlderObj.onCapture || false)
                        );
    },

    createEventListenerEntry(handler, eventType = 'click', executedOnCapturePhase = false) {
        return {
            type: eventType,
            hanlder: handler,
            onCapture: executedOnCapturePhase
        };
    }

};