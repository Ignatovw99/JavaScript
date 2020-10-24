function solve(input) {
    const listProcessorBuilder = function() {
        let list = [];

        return {
            add: text => list.push(text),
            // addNonMutatable: text => list = [...list, text],
            remove: text => { 
                let index = list.indexOf(text)
                while (index != -1) {
                    list.splice(index, 1);
                    index = list.indexOf(text);
                }
             },
            // removeNonMutatable: text => list = list.filter(x => x != text),
            print: () => console.log(list.join())
        };
    };

    let listProcessor = listProcessorBuilder();

    input
        .map(x => x.split(' '))
        .forEach(([command, argument]) => listProcessor[command](argument));
}

solve([])