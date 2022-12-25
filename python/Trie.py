
class TrieNode:
        # Initialize your data structure here.
        def __init__(self):
            self.word=False
            self.children={}

children = {}
children['a'] = TrieNode() 

print(children['a'].children)

children['a'].children['b'] = TrieNode() 
children['a'].children['b'].children['h'] = TrieNode() 
children['a'].children['b'].children['h'].children['i'] = TrieNode() 

print(children['a'].children['b'].children['h'])

if 'm' not in children['a'].children['b'].children['h'].children:
    print('not avail')
else:

    print('avail',children['a'].children['b'].children['h'].children['i'])

obj ={}
obj['a']=1
obj['b']=12
obj['c']=13
obj['d']=15
obj['e']=14

# for i in [obj]:
for i in ['a','c','e','f','z']:
    if i in obj:
        print('avail')
    else:
        print('no')
    print(i)