const endDate = "7 September 2024 17:10 ";

document.getElementById("end-date").innerText = endDate;

const input = document.querySelectorAll("input");

const clock=()=>
{
    const end = new Date(endDate);
    const now = new Date();
    // console.log(end);
    // console.log(now);

    const diff=(end-now)/1000 ;
    //console.log(diff);
    //convert into days
    //1 days = 24 hrs
    // 1 hour = 60 min
    //1min = 60 sec
    if(diff<0)
    {
        document.getElementById("wel-come").innerText =" Wel Come...."
        return; 
    }

   input[0].value=(Math.floor(diff/24/3600)); // days
   input[1].value=(Math.floor((diff/3600)%24)); // hours
   input[2].value=(Math.floor((diff/60)%60)); // min
   input[3].value=(Math.floor((diff)%60)); // min 
}

setInterval( 
()=>
{
    clock();
},
1000)
