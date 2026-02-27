#include <stdio.h>

double celsiusToFahrenheit(double c) {
    return (c * 9.0 / 5.0) + 32.0;
}

double fahrenheitToCelsius(double f) {
    return (f - 32.0) * 5.0 / 9.0;
}

int main() {
    int opcion;
    double valor;

    printf("1. Celsius a Fahrenheit\n2. Fahrenheit a Celsius\nElige: ");
    scanf("%d", &opcion);

    if (opcion == 1) {
        printf("Grados C: ");
        scanf("%lf", &valor);
        printf("Resultado: %.2lf F\n", celsiusToFahrenheit(valor));
    } else if (opcion == 2) {
        printf("Grados F: ");
        scanf("%lf", &valor);
        printf("Resultado: %.2lf C\n", fahrenheitToCelsius(valor));
    }

    return 0;
}
