function solve() {

    const canFight = (state) => ({
        fight: () => {
            console.log(`${state.name} slashes at the foe!`);
            state.stamina--;
        }
    })

    const canCast = (state) => ({
        cast: (spell) => {
            console.log(`${state.name} cast ${spell}`);
            state.mana--;
        }
    })

    const fighter = name => {
        let state = {
            name,
            health: 100,
            stamina: 100
        };
        return Object.assign(state, canFight(state));
    }
    
    const mage = name => {
        let state = {
            name,
            health: 100,
            mana: 100
        };
        return Object.assign(state, canCast(state)); // Create mage with state and return new Obj with state and result from the function canCast(state) -> this is the function cast -> so this function is part of mage
    }

    return {mage, fighter};  //Create Object with two arrow function for creating fighter and mage
}

let heroCreator = solve();
const scorcher = heroCreator.mage('Scorcher');
scorcher.cast('fireball');
scorcher.cast('light');

let fighter = heroCreator.fighter('Scorcher 2');
fighter.fight();
