//Love B implementation
const ALPHABET_SIZE = 26
class TrieNode
{
    constructor(data)
    {
        // this.isEndOfWord = false;
        this.data = data
        this.isTerminal = false;
        this.children = new Array(ALPHABET_SIZE);
        for (let i = 0; i < ALPHABET_SIZE; i++)
            this.children[i] = null;
    }

}

class Trie{
    constructor(data){
        this.root = new TrieNode(data);
    }
    insertHelper( root, word ){
        // console.log('inserting',root,'word--->', word)
        // console.log('**************************************8')
        if( word.length === 0 ){
            root.isTerminal = true
            return;
        }
        let char = word[0]
        let index = char.charCodeAt(0) - 'a'.charCodeAt(0) 
        let child;
        if( root.children[index] !== null){
             child = root.children[index]
        }else{
             child = new TrieNode(char)
            //  console.log('root.children',root.children,'>>>>>',root.data)
             root.children[index] = child
            //  console.log('child',child)
        }
        this.insertHelper(child, word.slice(1))
    }
    insert(word){
        this.insertHelper(this.root,word)
    }
    search(word){
        let ans = this.searchHelper(this.root,word)
        console.log('Search->', word , ans?' found':' not found')
    }
    searchHelper(root,word){
        // console.log('serach helper', root.data, word,word.length, root.children)
        if(word.length === 0 ){
            if( root.isTerminal ){
                return true
            }else{
                return false
            }            
        }
        let char = word[0]
        let index = char.charCodeAt(0) - 'a'.charCodeAt(0)
        let child;
        if( root.children[index] ){
            // console.log('at ',root.children[index])
            child = root.children[index]
            return this.searchHelper(child, word.slice(1))
        }else{
            return false
        }
    }
    remove(word){
        let lastNode = this.removeHelper(this.root, word)
        if(lastNode){
            lastNode.isTerminal = false    
            console.log('Delete--->',word + ' word removed')
        }else{
            console.log('Delete--->',word+ ' word not found')
        }
        
        // console.log(ans?'found':'not found')
    }
    removeHelper(root,word){
        if(word.length === 0 ){
            if( root.isTerminal ){
                return root
            }else{
                return false
            }            
        }
        let char = word[0]
        let index = char.charCodeAt(0) - 'a'.charCodeAt(0)
        let child;
        if( root.children[index] ){
            child = root.children[index]
            return this.removeHelper(child, word.slice(1))
        }else{
            return false
        }
    }
}

let trie = new Trie('\0')


// trie.insert('g')
// trie.insert('e')
// trie.insert('e')
// trie.insert('k')
trie.insert('geek')
trie.insert('geeks')
trie.insert('geeksfor')
trie.insert('geeksforgeeks')

// console.log('chlidere',trie.root.children)
trie.search('geeks')
trie.remove('geeks')
trie.search('geeks')
trie.insert('geeksforgeeks')
trie.search('geeksforgeeks')
trie.search('geeksforgeeks')
trie.search('geeksforgeeks')
trie.search('geek')
trie.remove('geeksforgeeks')
trie.remove('geeksforgeeks')

// console.log('___________________________',trie)