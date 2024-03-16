let num = 16;
let i = 1;

while(i <= num){
    i++;
    if(i===2){
        console.log(`${i} sade ededdir`)
    }
    else if(i===3){
        console.log(`${i} sade ededdir`)
    }
    else if(i===5){
        console.log(`${i} sade ededdir`);
    }
    else if(i%2!==0 && i%3!==0 && i%5!==0){
        console.log(`${i} sade ededdir`);
    }
    else{
        console.log(`${i} sade eded deyil`);
    }
}