#include <stdin.h>
#include <conio.h>

int main() {
    char ch;

    while(1) {
        if (_kbhit()) {
            ch = _getch();
       }
    }

    return ch;
}