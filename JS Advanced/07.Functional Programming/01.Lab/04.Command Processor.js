function solution() {
    let str = '';
    return {
        append: (s) => str += s,
        removeStart: (n) => str = str.substring(n),
        removeEnd: (n) => str = str.substring(0, str.length - n),
        print: () => console.log(str)
    }
}

let processor = solution();
processor.append('asd');
processor.append('gt');
processor.print();
processor.removeEnd(3);
processor.print();