const heroXP = 5001
const heroName = 'Gustavo'
let heroLevel = ''

const xpLevels = [
    { threshold: 1000, level: 'Ferro' },
    { threshold: 2000, level: 'Bronze' },
    { threshold: 5000, level: 'Prata' },
    { threshold: 7000, level: 'Ouro' },
    { threshold: 8000, level: 'Platina' },
    { threshold: 9000, level: 'Ascendente' },
    { threshold: 10000, level: 'Imortal' },
]

for (const xpLevel of xpLevels) {
    if (heroXP <= xpLevel.threshold) {
        heroLevel = xpLevel.level
        break
    }
}

if (!heroLevel) heroLevel = 'Radiante'

console.log(`O Herói de nome ${heroName} está no nível de ${heroLevel}`)
