async function MyFunc(myParam) {
    await sleep(3000);
    return new Promise((resolve,reject)=>{
        if(myParam === "ok")
            resolve("Hallo");
        else 
            reject("Upps");
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function doIt() {

    let result = MyFunc("aaa");
    console.log(result);
    console.log("Ende")
    result
    .then(erg=>console.log(erg))
    .catch(error=>{console.log(error)})
    .finally(()=>console.log("habe fertisch"));
}

doIt();
