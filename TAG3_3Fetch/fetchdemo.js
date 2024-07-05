(async function(){
    const url = "https://jsonplaceholder.typicode.com/users/1";

    /*
    try {
        const response = await fetch(url);
        if(! response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);

    } catch(error) {
        console.error(error.message);
    }
        */
       /*
       fetch(url) 
       .then((response)=>{return response.json()})
       .then(data=>{console.log(data)})
       .catch(()=>{
        console.log("Ein Fehler ist aufgetreten")
    
       })
   */
       try {
        const response = await fetch(url, {
            method: "GET",
            body: JSON.stringify({ id: 1, name: "example" }),
            headers: {
                "Content-Type": "application/json",
              }
        });
        if(! response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);

    } catch(error) {
        console.error(error.message);
    }
})();