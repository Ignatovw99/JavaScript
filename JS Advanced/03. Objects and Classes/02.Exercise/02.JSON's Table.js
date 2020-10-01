function addIndentation(count) {
    return ' '.repeat(count);
}

function createHtmlRow(htmlContent, indentation) {
    return addIndentation(indentation) + htmlContent + '\n';
}

function renderTable(json) {
    let html = createHtmlRow('<table>');
    json.forEach(employeeString => {
        let employee = JSON.parse(employeeString);
        html += createHtmlRow('<tr>', 4);
        Object.values(employee)
            .forEach(propertyValue => html += createHtmlRow(`<td>${propertyValue}</td>`, 8));
        html += createHtmlRow('</tr>', 4);
    });
    html += createHtmlRow('</table>');
    console.log(html);
}

renderTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);