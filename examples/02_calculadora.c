#include <stdio.h>

int main() {
    double n1, n2;

    printf("Ingresa el primer número: ");
    scanf("%lf", &n1);
    printf("Ingresa el segundo número: ");
    scanf("%lf", &n2);

    printf("Suma: %f\n", n1 + n2);
    printf("Resta: %f\n", n1 - n2);
    printf("Multiplicación: %f\n", n1 * n2);
    
    if (n2 != 0) {
        printf("División: %f\n", n1 / n2);
    } else {
        printf("División: Error (división por cero)\n");
    }

    return 0;
}
