function findPrime(...sayilar){
    let flag=0
    for (let i = 0; i < sayilar.length; i++) {
        flag=0
        if(sayilar[i]==1){
            flag=1
        }
        if(sayilar[i]<1){
            flag=1
        }
        for (let index = 2; index < sayilar[i]; index++) {
            if(sayilar[i]%index==0){
                flag=1
            }     
        }
        if(flag==0){
            console.log(sayilar[i] + " asal sayidir.")
        }else{
            console.log(sayilar[i] + " asal sayi değildir.")
        }
        
        
    }
}
function findPerfectNumbers(...numbers) {
    for (let index = 0; index < numbers.length; index++) {
        let toplam=0
        let sayi=numbers[index]
        for (let i = numbers[index]-1; i > 0; i--) {
            if(sayi%i==0){
                toplam = toplam + i
            }
            
        } 
        if(toplam == sayi){
            console.log(sayi + " mükemmel sayıdır.")
        }else{
            console.log(sayi + " mükemmel sayi değildir.")
        }
    }
}
function friendNumbers(num1,num2) {
    let toplam=0
    let toplam2=0
    for (let i = num1-1; i > 0; i--) {
        if(num1%i==0){
            toplam = toplam + i
        }
        
    }
    for (let i = num2-1; i > 0; i--) {
        if(num2%i==0){
            toplam2 = toplam2 + i
        }
        
    }
    if(toplam == num2 && toplam2 == num1){
        console.log(num1 + " ve " + num2 +" arkadaş sayılardır.")
    }else{
        console.log(num1 + " ve " + num2 +" arkadaş sayı değiller.")
    }       
}

let numbers = []
for (let index = 0; index <= 1000; index++) {
    numbers.push(index)
    
}
//findPrime(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
//findPrime(...numbers)
//findPerfectNumbers(...numbers)
friendNumbers(17296,18416 )