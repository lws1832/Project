export const lineReducer = (lineIcon,action) => {
    const { list } = [];
    console.log('체크중 : ', list);

    switch(action.type){
        case "line 1":
            console.log('1');
            return{
                ...lineIcon,
            }
        case "line 2":
            console.log('2');
            return{
                ...lineIcon,
            }
        case "line 3":
            console.log('3');
            return{
                ...lineIcon,
            }
        case "line 4":
            console.log('4');
            return{
                ...lineIcon,
            }
        case "line 5":
            console.log('5');
            return{
                ...lineIcon,
            }
        case "line 6":
            console.log('6');
            return{
                ...lineIcon,
            }
        case "line 7":
            console.log('7');
            return{
                ...lineIcon,
            }
        case "line 8":
            console.log('8');
            return{
                ...lineIcon,
            }
        case "line 9":
            console.log('9');
            return{
                ...lineIcon,
            }
        case "line 1":
            console.log('1');
            return{
                ...lineIcon,
            }
        default:
            return lineIcon;
    }
}