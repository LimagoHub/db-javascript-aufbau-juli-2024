async function MyFunc(myParam) {
    await sleep(myParam);
    return 10;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function init() {
    let total = 0;
    const start = Date.now();
   
    const promises = [];

    for(let i = 0; i < 10; i++) {
        promises.push(MyFunc(100));
    }
    for (const p  of promises) {
        total += await p;
    }
   
  
    console.log(total)
    const end = Date.now();

    console.log(`Execution time: ${end - start} ms`);
}

init();
