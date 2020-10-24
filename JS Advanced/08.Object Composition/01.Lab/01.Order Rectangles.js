function solve(input) {
    return input.map(([width, height]) => ({ 
        width,
        height,
        area: () => width * height, // or do it with Object method notation -> area() {} it will retain the scope
        compareTo(rect) {
            return rect.area() - this.area() || rect.width - this.width;
        }
    })) //With (...) make it with an expression because {} will be the body of the arrow func
    .sort((first, second) => first.compareTo(second));
}

solve([[10, 5], [3, 20], [5, 12]]);