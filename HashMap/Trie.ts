class Tries{
    trie: Record<string, any>
    constructor(){
        this.trie  = {}
    }
    insert(word: string): void{
        let node = this.trie
        for(let char of word){
            console.log(char)
            if(!node[char]){
                node[char] = {}
            }
            node = node[char]
        }
        node.isEnd = true
    }
    search(word: string): boolean{
        let node = this.trie
        for(let char of word){
            if(!node[char]){
               return false  
            }
            node = node[char]
        }
        return node.isEnd ? true: false  // return only when the whole word is matched
    }
    startsWith(prefix: string): boolean{
        let node = this.trie
        for(let char of prefix){
            if(!node[char]){
                return false   // prefix not found
            }
            node = node[char]
        }
        return true
    }
}

const obj = new Tries()
obj.insert('apple')
console.log(obj.trie)
console.log(obj.search('apple'))
console.log(obj.startsWith('appe'))