const endDate="24 July 2025  12:00 PM"

document.getElementById("end-date").innerText= endDate;

const inputs = document.querySelectorAll("input");

// console.log(endDate)


const clock=()=>{

    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;

    // console.log(diff);

    if(diff<0){
        return;
    }

    inputs[0].value = Math.floor(diff/3600/24);    // days

    inputs[1].value=Math.floor(diff/3600)%24;     //hours

    inputs[2].value=Math.floor(diff/60)%60;       //minutes

    inputs[3].value=Math.floor(diff)%60;           //seconds


    // console.log(end);
    // console.log(now)

}

clock();


setInterval(()=>{
    clock();
},1000)



