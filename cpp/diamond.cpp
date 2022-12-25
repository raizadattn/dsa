#include <iostream>
using namespace std;

int main()
{
    int n = 5;
    cout << "hi";
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if (j < n - i)
            {
                cout << " ";
            }
            else
            {
                cout << "*";
            }
        }

        cout << endl;
    }
    // for( int i=0;i<n; i++){
    //     for( int j=0; j<n; j++){
    //         if( j < n-i){
    //             cout<< "*";
    //         }else{
    //             cout<< " ";
    //         }
    //     }

    //     cout<< endl;
    // }
    cout << endl;

    cout << endl;

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n - i; j++)
        {
            cout << " ";
        }
        for (int j = 0; j < i; j++)
        {
            cout << "* ";
        }

        cout << endl;
    }
    cout << endl;

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < i; j++)
        {
            cout << " ";
        }
        for (int j = 0; j < n - i; j++)
        {
            cout << "* ";
        }

        cout << endl;
    }
    cout << endl;
    n = 6;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n - i; j++)
        {
            cout << "* ";
        }

        cout << endl;
    }
    cout << endl;
    //hollow inverted pyramid
    for (int i = 0; i < n; i++)
    {
        if (i == 0 || i== n-1 )
        {
            for (int j = 0; j < n-i; j++)
                {
                    cout << "* ";
                }

        }else{
                cout<< "*";
                for( int j=n-i-1 ; j>0 ; j--){
                    cout<< "  ";
                }
                cout<< "*";
        }

        cout << endl;
    }

        cout << endl;
        cout <<"next pattern"<< endl;
        n = 10;
        // for(int i=0; i<n/2; i++){

        // }

    return 0;
}