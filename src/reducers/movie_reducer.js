
// // action return an object
// const action = {
//     type : 'MOVIES_LIST',
//     payload : [
//         {id:'1',name:'The man with golden guns'},
//         {id:'2',name:'God must be crazy'},
//         {id:'3',name:'Zoltan'},
//         {id:'4',name:'Dude, where is my car?'},
//     ]
// }

//reducer finds a match

export default function(state={},action){
    switch(action.type){
        case 'MOVIES_LIST':
            return {...state,movies:action.payload}
        default:
            return state;
    }
}
