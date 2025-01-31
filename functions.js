const defaultCharcterer = {
    life: 1,
    maxLife: 1,
    atatack: 0,
    defense: 0
}
const creatKnigth = (name) => {
    return {
        ...defaultCharcterer,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}
const createSorcere = (name) => {
    return {
        ...defaultCharcterer,
        name,
        life: 70,
        maxLife: 70,
        attack: 8,
        defense: 10
    }
}
const createLittleMonster = () => {
    return {
        ...defaultCharcterer,
        name: 'Little Monster',
        life: 70,
        maxLife: 70,
        attack: 8,
        defense: 8
    }
}
const creatBigMonster = () => {
    return {
        ...defaultCharcterer,
        name: 'Big Monster',
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}
const stage = {
    fighter1: null,
    fighter2: null,
    fighter1Element: null,
    fighter2Element: null,

    start(fighter1, fighter2, fighter1Element, fighter2Element) {
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.fighter1Element = fighter1Element
        this.fighter2Element = fighter2Element

        this.fighter1Element.querySelector('.attack-button').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2))
        this.fighter2Element.querySelector('.attack-button').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1))

        this.update()
    },
    update() {
        //Fighter1
        this.fighter1Element.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`

        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100
        this.fighter1Element.querySelector('.bar').style.width = `${f1Pct}%`

        //Fighter2
        this.fighter2Element.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`

        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100
        this.fighter2Element.querySelector('.bar').style.width = `${f2Pct}%`

    },
    doAttack(attacking, attacked) {
        if (attacking.life <= 0 || attacked.life <= 0) {
            log.addMessage('Fim de jogo')
            return
        }

        const attackFactor = (Math.random() * 2).toFixed(2)
        const defenseFactor = (Math.random() * 2).toFixed(2)

        const damage = attacking.attack * attackFactor;
        const defense = attacked.defense * defenseFactor;

        if (damage > defense) {
            attacked.life -= damage
            attacked.life = attacked.life < 0 ? 0 : attacked.life;
            log.addMessage(`${attacking.name} causou ${damage.toFixed(2)} de dano em ${attacked.name}`)
        } else {
            log.addMessage(`${attacked.name} fez ${defense.toFixed(2)} de defesa e não sofreu danos`)
        }
        this.update()
    }
}
const log = {
    list: [],
    addMessage(msg) {
        this.list.unshift(msg)
        this.render()
    },
    render() {
            const logElement = document.querySelector('.log')
            logElement.innerHTML = '';
            for (let i in this.list) {
            logElement.innerHTML += `<li>${this.list[i]}</li>`

        }
    }
}
