

let lastCardId: number = 10;

export const getNextId = () => {
    return (lastCardId++).toString()
}