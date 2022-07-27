export class Leaf {
    constructor(name, price, vitamins, emoji) {
        this.name = name,
        this.price = price,
        this.vitamins = vitamins
        this.emoji =  emoji
    }


get Template(){
    return `
    <div onclick="app.leavesController.buyLeaves()" class="col-6 border-white  text-center border border-2 p-1">
        <h1>${this.emoji}</h1>
        <p class="fs-3 font-weight-bold">${this.name}</p>
        <p class="fs-4"> Price : $ ${this.price}</p> 
        <p class="fs-5 font-weight-light"> Vitamins : ${this.vitamins}</p>
    </div>
    `
}
}