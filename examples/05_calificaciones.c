#include <stdio.h>
#include <string.h>

#define MAX_ESTUDIANTES 3

int main() {
    char nombre[50], mejor_estudiante[50];
    float nota, suma = 0, max_nota = -1.0;

    for (int i = 1; i <= MAX_ESTUDIANTES; i++) {
        printf("Nombre %d: ", i);
        scanf("%s", nombre);
        printf("Nota %d: ", i);
        scanf("%f", &nota);

        suma += nota;
        if (nota > max_nota) {
            max_nota = nota;
            strcpy(mejor_estudiante, nombre);
        }
    }

    printf("\nPromedio: %.1f\n", suma / MAX_ESTUDIANTES);
    printf("Nota más alta: %.g (%s)\n", max_nota, mejor_estudiante);

    return 0;
}
