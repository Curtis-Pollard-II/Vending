import { ProxyState } from "../AppState.js";
import { leavesService } from "../Services/leavesService.js";





function _drawLeaves(){
    let leaves = ProxyState.leaves
    console.log('drawing', leaves);
    let template = ''
    leaves.forEach( l => template += l.Template)
    document.getElementById('leaves').innerHTML = template
}

_drawLeaves()

export class LeavesController{
    constructor(){
        _drawLeaves
    }

    makeMoney(){
        console.log('making money');
        leavesService.makeMoney()
        document.getElementById('wallet').innerText = ProxyState.wallet
    }
    
    buyLeaves(name){
        leavesService.buyLeaves()
        document.getElementById('wallet').innerText = ProxyState.wallet
    }

    buy (name) {
        leavesService.buy(name)
    }





}