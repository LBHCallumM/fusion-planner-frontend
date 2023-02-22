

let lastCardId: number = 10;
let lastColumnId: number = 10;

export const getNextCardId = () => {
    return (lastCardId++).toString()
}

export const getNextBoardId = () => {
    return (lastColumnId++).toString()
}