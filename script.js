function d(){
    let temp1 = document.getElementById("max_hours")
    let max_hours = temp1.value;
    let temp2 = document.getElementById("atd_hours");
    let atd_hours = temp2.value;
    let temp3 = document.getElementById("abs_hours");
    let abs_hours = temp3.value;
    if (max_hours == ''){
        alert("Enter the maximum hours")
    }
    else if (atd_hours == ''){
        alert("Enter the Attended hours")
    }
    else{
        let current=document.getElementById("curr_value");
        current.innerHTML=(Number(atd_hours)/(Number(max_hours))*100).toFixed(2)+`%`
    let after=document.getElementById("after_value");
after.innerHTML=(Number(atd_hours)/(Number(max_hours)+Number(abs_hours))*100).toFixed(2)+`%`
    }
    
   

}
