function Dictionay(){
    this.items = {}
   
}
Dictionay.prototype.set = function(key,value){
    this.items[key] = value
}

Dictionay.prototype.has = function(key){
    return this.items.hasOwnProperty(key)
}

Dictionay.prototype.remove = function(key){
    if(!this.has(key)) return false

    delete this.items[key]
    return true
}

Dictionay.prototype.get = function(key){
    return this.has(key)? this.items[key] : undefined
}

Dictionay.prototype.keys = function(){
    return Object.keys(this.items)
}

Dictionay.prototype.values = function(){
    return Object.values(this.items)
}

Dictionay.prototype.clear = function(){
 this.items = {}
}