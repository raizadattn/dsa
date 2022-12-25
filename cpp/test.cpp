#include <iostream>
#include <string>
using namespace std;

int main()
{
    cout<< "Hello World"<<endl;
    int idx = 'C'- 'A';
    string str1= "abv";
    cout<< str1.substr(1)<<endl;
    cout<< idx<<str1<<endl;
    return 0;
}