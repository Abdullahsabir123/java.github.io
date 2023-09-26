let selected = prompt("Select formula 1)v=s/t 2)w=mg 3)f=ma");
if(selected==1){
    let v=prompt("What you want to find 1)v 2)s 3)t");
    if(v==1){
        s = prompt("Enter the distance");
        t = prompt("Enter the time");
        v=s/t;
        document.write("The velocity is=",v,"m/s");
    }
    else if(v==2){
        v = prompt("Enter the velocity");
        t = prompt("Enter the time");
        s=v*t;
        document.write("The distance is=",s,"m");
    }
    else if(v==3){
        v = prompt("Enter velocity");
        s = prompt("Enter distance");
        t=v*s;
        document.write("The time is=",t,"s")
    }
    else{
        document.write("Please select valid number");
    }
}
else if(selected==2){
    let w=prompt("What you want to find 1)w 2)m 3)g");
    if(w==1){
        m=prompt("Enter the mass");
        g=prompt("Gravity g is constant",9.8);
        w=m*g;
        document.write("The weigth is=",w,"kg");
    }
    else if(w==2){
        w=prompt("Enter the weight");
        g=prompt("Gravity g is constant",9.8);
        m=w/g;
        document.write("The mass is=",m,"kg");
    }
    else if(w==3){
        document.write("Gravity g is constant 9.8 m/s");
    }
    else{
        document.write("Please select valid number");
    }
}
else if(selected==3){
    f=prompt("What you want to find 1)f 2)m 3)a");
    if(f==1){
        m=prompt("Enter the mass");
        a=prompt("Enter the acceleration");
        f=m*a
        document.write("The force is=",f),"n"
    }
    else if(f==2){
        f=prompt("Enter the force");
        a=prompt("Enter the acceleration");
        m=f/a;
        document.write("The mass is=",m,"kg");
    }
    else if(f==3){
        f=prompt("Enter the force");
        m=prompt("Enter the mass");
        a=f/m;
        document.write("The acceleration is=",a,"m/s");
    }
}
else{
    document.write("Please enter valid number");
}