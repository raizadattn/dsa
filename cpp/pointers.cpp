#include <iostream>
using namespace std;

class TrieNode {
    public:
        char data;
        bool isTerminal;
        TrieNode* children[26];

        TrieNode(char d) {
            this->data = d;

            isTerminal = false;

            for(int i=0; i<26; i++) {
                children[i] = NULL;
            } 
        }
};

void func( int *p ){
    *p = *p + 1  ;
}

int main()
{
    cout<< "Hello World"<<endl;
    int a = 21;
    int *p = &a; 
    cout<< a<<  endl;
    cout<< p<<  endl;
    cout<< &a<<  endl;
    cout<< *p<<  endl;
    cout<< sizeof(p)<<  endl;
    cout<< "before "<<p<<  endl;
    cout<< "before "<<*p<<  endl;
    func(p);
    cout<< "after "<<p<<  endl;
    cout<< "after "<<*p<<  endl;
    TrieNode* child;
    child = new TrieNode('a');
    cout<< endl;
    cout<<"child "<<child<< " "<<&child<<" "<<" "<<endl;
    return 0;
}