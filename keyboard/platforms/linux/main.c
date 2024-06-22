#include <stdio.h>
#include <unistd.h>
#include <termios.h>

void enableRawMode() {
    struct termios term;
    tcgetattr(STDIN_FILENO, &term);
    term.c_lflag &= ~(ICANON | ECHO);
    tcsetattr(STDIN_FILENO, TCSANOW, &term);
}

void disableRawMode() {
    struct termios term;
    tcgetattr(STDIN_FILENO, &term);
    term.c_lflag |= (ICANON | ECHO);
    tcsetattr(STDIN_FILENO, TCSANOW, &term);
}

int main() {
    char ch;
    enableRawMode();

    while (1) {
        ch = getchar();
    }

    disableRawMode();
    return ch;
}