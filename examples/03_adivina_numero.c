#include <stdio.h>

int main() {
    int numeroSecreto = 777;
    int intento;

    do {
        printf("Ingresa un número: ");
        scanf("%d", &intento);

        if (intento < numeroSecreto) {
            printf("El número secreto es mayor.\n");
        } else if (intento > numeroSecreto) {
            printf("El número secreto es menor.\n");
        } else {
            printf("¡Correcto! Adivinaste el número.\n");
        }
    } while (intento != numeroSecreto);

    return 0;
}
