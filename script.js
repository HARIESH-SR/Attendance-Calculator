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
    else if (Number(max_hours)<=0){
        alert("Maximum Hours should be greater than 0")
    }
    else if (Number(max_hours) != Math.floor(Number(max_hours))){
        alert("Maximum Hours should be a whole number.")
    }
    else if (atd_hours == ''){
        alert("Enter the Attended hours")
    }
    else if (Number(atd_hours)<0){
        alert("Attended Hours should be greater than or equal to 0")
    }
    else if (Number(atd_hours) != Math.floor(Number(atd_hours))){
        alert("Attended Hours should be a whole number.")
    }
    else if(Number(max_hours)<Number(atd_hours)){
        alert("Attended Hours should be lesser than or equal to Maximum hours.")
    }
    else if (Number(abs_hours)<0){
        alert("Hours going to be absent should be greater than or equal to 0")
    }
    else if (Number(abs_hours) != Math.floor(Number(abs_hours))){
        alert("Hours going to be absent should be a whole number.")
    }
    else{
        let current=document.getElementById("curr_value");
        current.innerHTML=(Number(atd_hours)/(Number(max_hours))*100).toFixed(2)+`%`
    let after=document.getElementById("after_value");
after.innerHTML=(Number(atd_hours)/(Number(max_hours)+Number(abs_hours))*100).toFixed(2)+`%`
        if (abs_hours==''){
            abs_hours=0
            max_hours=Number(max_hours)
        }
        else{
            max_hours=Number(max_hours)
            max_hours+=Number(abs_hours)
        }
        let temp4 = document.getElementById("hours_value")
        
        let v = (Number(atd_hours)/max_hours)*100
        if (v<75){
            let i=0
            while(true){
                i+=1
                let j = ((Number(atd_hours)+i)/(max_hours+i))*100
                if (j>=75){
                    break;
                }
            }
            temp4.innerHTML= String(i)   
        }
        else{
            temp4.innerHTML = "N/A"
        }
        
    }
    temp2.scrollIntoView()
   

}
