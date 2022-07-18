//var é global e local
var x = 0
console.log('existe x?', x)
{
    var x = 1
}

console.log('existe x agora?', x)

//let é local
let y= 1
{
    let y=0
    console.log('existe y?', y)
}
console.log(y)

let m= 2
{
    m=3
    console.log(m)
}
console.log('também', m)

//const é local
const z = 1
{
    {
        {
            const z = 5
            console.log(z)
        }
    }
}
console.log('outro z',z)
