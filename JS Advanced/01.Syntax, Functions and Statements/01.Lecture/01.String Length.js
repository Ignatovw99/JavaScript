function findStringLength(first, second, third) {
    let totalLength = first.length + second.length + third.length;
    let averageLength = Math.floor(totalLength / 3);

    console.log(totalLength);
    console.log(averageLength);
}

findStringLength('chocolate', 'ice cream', 'cake');