const heroReducer = (acc, hero) => {
    let [name, level, items] = hero.split(' / ');
    level = Number(level);
    items = items ? items.split(', ') : [];
    acc.push({name, level, items});
    return acc;
};

function createHeroicInventory(args) {
    let result = args.reduce(heroReducer, []);
    return JSON.stringify(result);
}