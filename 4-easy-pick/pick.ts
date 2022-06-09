//https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

// js 
/*
    
*/
function myPick(todo,keys){

    const obj = {
       
    }

    keys.forEach(key => {
        if(key in todo){
            obj[key] = todo[key]
        }
    });
    return obj
}