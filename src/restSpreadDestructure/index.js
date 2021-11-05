//ödevdeki konu
let student = {id:10, name:"yavuz"}
function save(puan=10,ogrenci) {
    console.log(ogrenci.name + " : " + puan)
    
}
save(undefined,student)

//rest
//rest = ...products
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products)
    //console.log(products[0])
}

//console.log(typeof showProducts)
//showProducts(10,"elma","armut","karpuz")

//spread
//spread operatoru = ...
//elimizdeki bir arrayı ayrıştırıyoruz
let points =[1,2,3,4,50,4,60,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")



//Destructuring
//react da cok kullanılıyor
//elimzdeki arrayin değerlerini değişkenlere atama

let populations = [10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh,maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)


function someFunction([small1],number) {
    console.log(small1)
}

someFunction(populations)


let category = {id:1,name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name}=category
console.log(id)
console.log(name)
