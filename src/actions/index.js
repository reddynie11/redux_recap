export function movieslist(){
    return {
        type : 'MOVIES_LIST',
        payload : [
            {id:'1',name:'The man with golden guns'},
            {id:'2',name:'God must be crazy'},
            {id:'3',name:'Zoltan'},
            {id:'4',name:'Dude, where is my car?'}
        ]
    }
}

export function directorslist(){
    return{
        type : 'DIR_LIST',
        payload:[
            {id:'1',name:'James Bond'},
            {id:'2',name:'Nigger'},
            {id:'3',name:'NDK'},
            {id:'4',name:'Dicso'},
        ]
    }
}