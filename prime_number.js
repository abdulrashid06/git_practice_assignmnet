    let factor=0;

    for (let i=1; i<=num; i++){
         if (num%i==2){
            factor++;
         }
    }if (factor==0){
        console.log("Yes");
    }else{
        console.log("No");
    }