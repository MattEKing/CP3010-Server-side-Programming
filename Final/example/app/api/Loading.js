
export default function Loading() {
    let winningArray = [];
    for (let index = 0; index < 5; index++) {
        let randint = Math.floor(Math.random() * 15) + 1;
        winningArray.push(randint);
    }
    console.log(winningArray);
    return winningArray;
}