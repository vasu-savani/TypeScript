//before use of type_alias
let a : number = 10;
let b : string = '10';
let c : undefined = undefined;
//after use of type_alias
type varType = number | string | undefined;
let d : varType = 10;
let e : varType = '10';
let f : varType = undefined;