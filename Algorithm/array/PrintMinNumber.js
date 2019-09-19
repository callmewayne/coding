function PrintMinNumber(numbers){
    if(!numbers || numbers.length ===0){
        return ''
    }

    return numbers.sort(compare).join('')
}


function compare(a,b){
    let front = '' + a+ b
    let behind = '' + b + a
    return front - behind
}