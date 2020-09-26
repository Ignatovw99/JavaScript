function generateTableAsHTML(json) {
    let jsObj = JSON.parse(json);
    let tableHeaders = Object.keys(jsObj[0]);

    let html = '<table>' + '\n';
    html += `${' '.repeat(4)}<tr>${tableHeaders.reduce((th, current) => {
        th += `<th>${current}</th>`;
        return th;
    }, '')}</tr>` + '\n';
    jsObj.forEach(obj => {
        html += `${' '.repeat(4)}<tr>`;
        Object.values(obj).forEach(value => html += `<td>${value}</td>`);
        html += '</tr>' + '\n';
    });
    html += '</table>';
    return html;
}

console.log(generateTableAsHTML('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'));
