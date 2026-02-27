#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define MAX_ITEMS 50

typedef struct {
    int id;
    char nombre[50];
    int cantidad;
    float precio;
} Producto;

// Global variables
Producto inventario[MAX_ITEMS];
int totalProductos = 0;

// Function prototypes
void agregarProducto();
void mostrarInventario();
void venderProducto();
void mostrarMenu();
void guardarInventario();
void cargarInventario();

int main() {
    int opcion;

    cargarInventario();

    do {
        mostrarMenu();
        printf("Elige una opción: ");
        scanf("%d", &opcion);

        switch (opcion) {
            case 1:
                agregarProducto();
                break;
            case 2:
                mostrarInventario();
                break;
            case 3:
                venderProducto();
                break;
            case 4:
                guardarInventario();
                printf("Saliendo del sistema...\n");
                break;
            default:
                printf("Opcion invalida.\n");
        }
    } while(opcion != 4);

    return 0;
}

void mostrarMenu() {
    printf("\n--- MENÚ ---\n");
    printf("1. Agregar Producto\n");
    printf("2. Mostrar Inventario\n");
    printf("3. Vender Producto\n");
    printf("4. Salir\n");
}

void agregarProducto() {
    if (totalProductos >= MAX_ITEMS) {
        printf("Error: Inventario lleno.\n");
        return;
    }

    Producto nuevo;
    printf("\n-- Agregar Producto --\n");
    printf("ID: ");
    scanf("%d", &nuevo.id);
    getchar(); 
    
    printf("Nombre: ");
    scanf("%49[^\n]", nuevo.nombre);
    
    printf("Cantidad: ");
    scanf("%d", &nuevo.cantidad);
    
    printf("Precio: ");
    scanf("%f", &nuevo.precio);

    inventario[totalProductos] = nuevo;
    totalProductos++;
    printf("Producto '%s' agregado correctamente.\n", nuevo.nombre);
}

void mostrarInventario() {
    printf("\n--- INVENTARIO ACTUAL ---\n");
    if (totalProductos == 0) {
        printf("El inventario esta vacio.\n");
        return;
    }

    printf("ID\tNombre\t\t\tCantidad\tPrecio\n");
    printf("----------------------------------------------------------\n");
    for (int i = 0; i < totalProductos; i++) {
        printf("%d\t%-20s\t%d\t\t$%.2f\n", 
            inventario[i].id, inventario[i].nombre, 
            inventario[i].cantidad, inventario[i].precio);
    }
}

void venderProducto() {
    int id, cant;
    printf("\n-- Vender Producto --\n");
    printf("Ingrese ID del producto: ");
    scanf("%d", &id);

    for (int i = 0; i < totalProductos; i++) {
        if (inventario[i].id == id) {
            printf("Cantidad a vender: ");
            scanf("%d", &cant);
            if (inventario[i].cantidad >= cant) {
                inventario[i].cantidad -= cant;
                printf("Venta realizada. Total: $%.2f\n", cant * inventario[i].precio);
            } else {
                printf("Error: Stock insuficiente.\n");
            }
            return;
        }
    }
    printf("Error: Producto no encontrado.\n");
}

void guardarInventario() {
    FILE *archivo = fopen("inventario.txt", "w");
    if (archivo == NULL) {
        printf("Error al abrir el archivo para guardar.\n");
        return;
    }
    for (int i = 0; i < totalProductos; i++) {
        fprintf(archivo, "%d\n%s\n%d\n%.2f\n", 
            inventario[i].id, inventario[i].nombre, 
            inventario[i].cantidad, inventario[i].precio);
    }
    fclose(archivo);
}

void cargarInventario() {
    FILE *archivo = fopen("inventario.txt", "r");
    if (archivo == NULL) return;

    while (totalProductos < MAX_ITEMS && fscanf(archivo, "%d\n", &inventario[totalProductos].id) == 1) {
        fgets(inventario[totalProductos].nombre, 50, archivo);
        inventario[totalProductos].nombre[strcspn(inventario[totalProductos].nombre, "\n")] = 0;
        fscanf(archivo, "%d\n%f\n", &inventario[totalProductos].cantidad, &inventario[totalProductos].precio);
        totalProductos++;
    }
    fclose(archivo);
}
