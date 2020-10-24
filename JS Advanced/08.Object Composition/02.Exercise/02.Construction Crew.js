function solve(object) {
    let { weight, experience, levelOfHydrated, dizziness } = object;

    if (dizziness) {
        levelOfHydrated += 0.1 * weight * experience;
        dizziness = false;
    }

    return { weight, experience, levelOfHydrated, dizziness };
}

console.log(solve({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}));

console.log(solve({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}));