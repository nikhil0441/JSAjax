async function getEmoji() {
    let pr=new Promise(function(resolve,reject){
        setTimeout(()=>{
            let randNum=Math.round(Math.random());
            if(randNum===1){
                resolve("<br>success<br>😊😊");
            }
            else{
                reject("<br>failur<br>😢😢");
            }
        },3000);
    });
    return pr;
}
async function doTask() {
    let resSpan=document.querySelector("#result");
    try{
        let result=await getEmoji();
        resSpan.innerHTML=result;
    }
    catch(error){
        resSpan.innerHTML=error;
    }
    
}