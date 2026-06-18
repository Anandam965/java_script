getImage1=async ()=>{
    let display=document.getElementById("display");
    try{
        const res=await fetch("https://pokeapi.co/api/v2/pokemon?limit=151%27");
        const data=await res.json();
        display.src=data.url;
    } catch (error) {
        console.error("Error fetching dog image:", error);  
    }
}


getImage=async ()=>{
    let display=document.getElementById("display");
    try{
        const res=await fetch("https://dog.ceo/api/breeds/image/random");

        const data=await res.json();
        console.log(data);
        display.src=data.results.message;
    } catch (error) {
        console.error("Error fetching dog image:", error);  
    }
}