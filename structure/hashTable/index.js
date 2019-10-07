
class ValuePair{
    constructor(key,value){
        this.key = key
        this.value = value
    }

    toString(){
        return `[#${this.key}:${this.value}]`
    }
}

class HashTable{
    constructor(toStrFn = defaultToString){
      this.toStrFn = toStrFn
      this.table= {}
    }
    //散列函数
    loseloseHashCode(key){
        if(typeof key === 'number'){
            return key
        }
        const tableKey = this.toStrFn(key)
        let hash = 0
        for(let  i = 0;i<tableKey.length;i++){
            hash +=tableKey.charCodeAt(i)
        }
        return hash % 37
    }

    hashCode(key){
        return this.loseloseHashCode(key)
    }

    //将键和值加入散列表
    put(key,value){
        if(key !=null && value!=null){
            const position = this.hashCode(key)
            this.table[position] = new ValuePair(key,value)
            return true
        }
        return false
    }

    get(key){
        const valuePair = this.table[this.hashCode(key)]
        return  valuePair==null?undefined: valuePair.value
    }

    remove(key){
        const hash = this.hashCode(key)

        const valuePair = this.table[hash]
        if(valuePair!=null){
            delete this.table[hash]
            return true
        }
        return false
    }
}

function defaultToString(item){
    if(item===null){
        return 'NULL'
    }else if(item===undefined){
        return 'UNDEFINED'
    }else if(typeof item==='string' || item instanceof String){
         return `${item}`
    }
    return item.toString()
}

const hash = new HashTable()
hash.put('wayne','wayne@qq.com')
hash.put('binbin','binbin@qq.com')
console.log(hash.get('binbin'))
console.log(hash.remove('binbin'))
console.log(hash.get('binbin'))
console.log(hash.hashCode('wayne') + ' - wayne')
