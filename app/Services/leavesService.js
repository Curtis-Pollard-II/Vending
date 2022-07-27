import {ProxyState} from "../AppState.js";


class LeavesService{
    makeMoney(){
        ProxyState.wallet += .25
        console.log('making money in the service', ProxyState.wallet);
    }

    buyLeaves(name){
        // TODO Get name of leaf clicked on to console log here
        // TODO use name to FIND that single leaf from collection of leaves
        // TODO subtract price of single leaf from wallet

        console.log('buyingLeaves', name,'from the service');
    }

}

export const leavesService = new LeavesService()

