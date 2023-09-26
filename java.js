let selected = prompt("Select formula 1) v=s/t 2) w=mg 3) f=ma");
if(selected==1){
    let v=prompt("What you want to find 1) v 2) s 3) t");
    if(v==1){
        s = prompt("Enter the distance");
        t = prompt("Enter the time");
        v=s/t;
        document.write("The velocity is equal to=",v);
    }
    else if(v==2){
        v = prompt("Enter the velocity");
        t = prompt("Enter the time");
        s=v*t;
        document.write("The distance is equal=",s)
    }
    else{}
}
else{}