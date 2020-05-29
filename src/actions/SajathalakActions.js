import dispatcher from '../AppDispatcher'
import axios from "axios";
import shoppingCart from "../store/Sajathalak";

class SajathalakActions {

    insertItem(item){
        dispatcher.handleViewAction({
            commandType : 'INSERT_ITEM',
            item : item

        });
        axios({
            method: 'post',
            url: 'http://localhost:3001/catches',
            data: item,
        });
    }





}

export default new SajathalakActions();
