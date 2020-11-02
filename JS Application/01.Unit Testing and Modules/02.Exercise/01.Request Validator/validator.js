function validateRequest(request) {

    const methods = [ 'GET', 'POST', 'DELETE', 'CONNECT' ];
    const uriPattern = /^[A-Za-z0-9.]+$|^\*$/g;
    const versions = [ 'HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0' ];
    const messagePattern = /^[^<>\\&'"]*$/g;

    if (!request.method || !methods.includes(request.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }
    if (!request.uri || !request.uri.match(uriPattern)) {
        throw new Error('Invalid request header: Invalid URI');
    }
    if (!request.version || !versions.includes(request.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }
    if (request.message === undefined || !request.message.match(messagePattern)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return request;
}

validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});