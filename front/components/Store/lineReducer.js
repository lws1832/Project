export const lineReducer = (state,action) => {
    const { list } = [];

    switch(action.type){
        case "line 1":
            console.log('1');
            return{
                ...state,
            }
        case "line 2":
            console.log('2');
            return{
                ...state,
            }
        case "line 3":
            console.log('3');
            return{
                ...state,
            }
        case "line 4":
            console.log('4');
            return{
                ...state,
            }
        case "line 5":
            console.log('5');
            console.log('체크중 : ', state);
            return{
                ...state,
            }
        case "line 6":
            console.log('6');
            return{
                ...state,
            }
        case "line 7":
            console.log('7');
            return{
                ...state,
            }
        case "line 8":
            console.log('8');
            console.log('체크중 : ', state);
            return{
                ...state,
            }
        case "line 9":
            console.log('9');
            return{
                ...state,
            }
        case "line 1":
            console.log('1');
            return{
                ...state,
            }
        default:
            return state;
    }
}