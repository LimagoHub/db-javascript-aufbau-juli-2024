import {name, hello} from "./modules/demo.mjs"

export default function init(){
    console.log(name);
    console.log(hello());
}