export interface Slide {
  title: string;
  content: string[];
  code?: string;
  terminal?: string;
  reference?: string;
  note?: string;
  solutionUrl?: string;
  table?: {
    headers: string[];
    rows: string[][];
  };
  cards?: {
    title: string;
    description: string;
    icon: string;
    link?: string;
  }[];
}

export const slidesData: Record<number, Slide[]> = {
  1: [
    {
      title: "¿Qué es C?",
      content: [
        "C es un lenguaje de programación de propósito general, procedimental e imperativo.",
        "Fue creado por Dennis Ritchie en 1972 en los Laboratorios Bell para desarrollar el sistema operativo UNIX.",
        "Es considerado el 'abuelo' de muchos lenguajes modernos como C++, C#, Java y Python."
      ]
    },
    {
      title: "Características Principales",
      content: [
        "• Compilado: El código fuente se traduce a lenguaje máquina antes de ejecutarse, lo que lo hace muy rápido.",
        "• Tipado estático: Las variables deben declararse con su tipo de dato antes de usarse.",
        "• Acceso a bajo nivel: Permite manipular directamente la memoria a través de punteros."
      ]
    },
    {
      title: "Casos de Uso de C",
      content: [
        "Debido a su alto rendimiento y control sobre el hardware, C se utiliza en áreas críticas:",
        "• Sistemas Operativos: Windows, Linux y macOS tienen partes fundamentales escritas en C.",
        "• Sistemas Embebidos: Microcontroladores, electrodomésticos, automóviles.",
        "• Motores de Bases de Datos: PostgreSQL, MySQL, SQLite.",
        "• Compiladores e Intérpretes: El intérprete original de Python (CPython) está escrito en C."
      ]
    }
  ],
  2: [
    {
      title: "Entorno de Desarrollo",
      content: [
        "Para programar en C necesitas dos herramientas principales:",
        "1. Un editor de texto o IDE (Entorno de Desarrollo Integrado).",
        "2. Un compilador que traduzca tu código a un programa ejecutable (ej. GCC para Linux/Windows, Clang para macOS)."
      ]
    },
    {
      title: "Editores Recomendados",
      content: [
        "Existen múltiples opciones para escribir código en C. Aquí tienes algunas de las más populares:"
      ],
      cards: [
        {
          title: "Visual Studio Code",
          description: "Editor ligero y muy extensible. Requiere instalar extensiones para C/C++.",
          icon: "Code2",
          link: "https://code.visualstudio.com/"
        },
        {
          title: "CLion",
          description: "IDE potente de JetBrains, ideal para proyectos grandes. De pago (gratis para estudiantes).",
          icon: "TerminalSquare",
          link: "https://www.jetbrains.com/clion/"
        },
        {
          title: "Code::Blocks",
          description: "IDE clásico, ligero y fácil de instalar en Windows (suele incluir el compilador MinGW).",
          icon: "Blocks",
          link: "https://www.codeblocks.org/"
        }
      ]
    },
    {
      title: "Opciones para usar Linux",
      content: [
        "C fue creado junto con UNIX, por lo que programar C en entornos basados en Linux suele ser más natural y directo."
      ],
      cards: [
        {
          title: "WSL (Windows)",
          description: "Windows Subsystem for Linux. Permite ejecutar un entorno Linux directamente en Windows sin máquinas virtuales pesadas.",
          icon: "Monitor",
          link: "https://learn.microsoft.com/en-us/windows/wsl/install"
        },
        {
          title: "Máquina Virtual",
          description: "Usar VirtualBox o VMware para instalar un sistema operativo Linux completo (ej. Ubuntu) de forma aislada.",
          icon: "Box",
          link: "https://www.virtualbox.org/"
        },
        {
          title: "Dual Boot",
          description: "Instalar Linux junto a Windows en tu disco duro. Ofrece el mejor rendimiento pero requiere particionar el disco.",
          icon: "HardDrive"
        }
      ]
    },
    {
      title: "Comandos Básicos de Terminal",
      content: [
        "Si utilizas Linux o WSL, interactuarás mucho con la terminal. Aquí tienes los comandos esenciales:"
      ],
      table: {
        headers: ["Comando", "Descripción", "Ejemplo"],
        rows: [
          ["pwd", "Muestra la ruta del directorio actual", "pwd"],
          ["ls", "Lista los archivos y carpetas", "ls -l"],
          ["cd", "Cambia de directorio", "cd Documentos/"],
          ["mkdir", "Crea una nueva carpeta", "mkdir mi_proyecto"],
          ["touch", "Crea un archivo vacío", "touch main.c"],
          ["code .", "Abre VS Code en la carpeta actual", "code ."]
        ]
      }
    },
    {
      title: "El Proceso de Compilación",
      content: [
        "El código en C pasa por 4 etapas antes de ejecutarse:",
        "1. Preprocesador: Resuelve las directivas como #include.",
        "2. Compilador: Traduce el código a lenguaje ensamblador.",
        "3. Ensamblador: Convierte el ensamblador a código objeto (binario).",
        "4. Enlazador (Linker): Une tu código con las librerías externas para crear el ejecutable."
      ]
    }
  ],
  3: [
    {
      title: "Tu Primer Programa",
      content: [
        "Todo programa en C debe tener una función llamada 'main'. Esta es el punto de entrada donde comienza la ejecución.",
        "Para imprimir texto en la pantalla, usamos la función 'printf', que está incluida en la librería estándar de entrada/salida (stdio.h)."
      ],
      code: `#include <stdio.h>\n\nint main() {\n    printf("¡Hola, Mundo!\\n");\n    return 0;\n}`
    },
    {
      title: "Compilar y Ejecutar",
      content: [
        "Una vez escrito el código en un archivo (ej. hola.c), debes compilarlo desde la terminal.",
        "Usando GCC, el comando sería el siguiente:",
        "Luego, para ejecutar el programa compilado, llamas al archivo generado."
      ],
      terminal: `$ gcc hola.c -o hola\n$ ./hola\n¡Hola, Mundo!`
    }
  ],
  4: [
    {
      title: "Proyecto: Presentación Personal",
      content: [
        "¡Es hora de poner en práctica lo aprendido!",
        "Objetivo: Crea un programa en C que imprima tu información personal en la terminal utilizando múltiples llamadas a 'printf'.",
        "Requisitos:",
        "1. Imprime tu nombre, edad y a qué te dedicas.",
        "2. Usa saltos de línea '\\n' para separar la información.",
        "3. ¡Extra! Intenta imprimir un pequeño arte ASCII (como una carita feliz) usando caracteres."
      ],
      terminal: `$ ./presentacion\n====================\nNombre: Alex\nEdad: 20\nOcupación: Estudiante\n====================\n  \\(^_^)/  `,
      solutionUrl: "https://github.com/alfosua/ucab-cursos-intro-c/blob/main/examples/01_carta_presentacion.c"
    }
  ],
  5: [
    {
      title: "Variables",
      content: [
        "Una variable es un espacio reservado en la memoria de la computadora para almacenar un dato que puede cambiar durante la ejecución del programa.",
        "En C, las variables deben ser declaradas con un tipo específico antes de poder ser utilizadas."
      ],
      code: `// Declaración\nint edad;\n\n// Inicialización\nedad = 25;\n\n// Declaración e inicialización en una línea\nint puntuacion = 100;`
    },
    {
      title: "Tipos de Datos Básicos",
      content: [
        "C ofrece varios tipos de datos fundamentales para representar diferentes clases de información:",
        "• int: Para números enteros (sin decimales).",
        "• float: Para números reales (con decimales) de precisión simple.",
        "• double: Para números reales de doble precisión.",
        "• char: Para almacenar un único carácter."
      ],
      code: `int cantidad = 50;\nfloat precio = 19.99;\ndouble pi = 3.14159265359;\nchar letra = 'A';`
    },
    {
      title: "Detalles de los Tipos de Datos",
      content: [
        "El tamaño exacto depende de la arquitectura (32 o 64 bits), pero estos son los valores típicos:"
      ],
      table: {
        headers: ["Tipo", "Bytes", "Rango Típico (Con signo)", "Rango (Sin signo / unsigned)"],
        rows: [
          ["char", "1 byte", "-128 a 127", "0 a 255"],
          ["short", "2 bytes", "-32,768 a 32,767", "0 a 65,535"],
          ["int", "4 bytes", "-2,147,483,648 a 2,147,483,647", "0 a 4,294,967,295"],
          ["float", "4 bytes", "1.2E-38 a 3.4E+38 (6 decimales)", "N/A"],
          ["double", "8 bytes", "2.3E-308 a 1.7E+308 (15 decimales)", "N/A"]
        ]
      }
    },
    {
      title: "Modificadores de Tipo",
      content: [
        "C permite modificar los tipos de datos básicos para ajustar su tamaño o su signo:",
        "• signed / unsigned: Indica si la variable puede tener valores negativos o solo positivos.",
        "• short / long: Reduce o amplía el tamaño en memoria de la variable."
      ],
      code: `unsigned int edad = 25; // Solo valores positivos\nlong int poblacion = 7800000000;\nshort int pequeno = 10;`
    },
    {
      title: "El Código ASCII",
      content: [
        "En C, los caracteres (char) se almacenan internamente como números enteros según la tabla ASCII.",
        "Esto significa que puedes realizar operaciones matemáticas con letras."
      ],
      code: `char letra = 'A'; // En ASCII, 'A' es 65\n\nprintf("Letra: %c\\n", letra);\nprintf("Valor numérico: %d\\n", letra);\n\n// Podemos sumar para obtener la siguiente letra\nchar siguiente = letra + 1;\nprintf("Siguiente: %c\\n", siguiente); // Imprime 'B'`
    },
    {
      title: "El Operador sizeof",
      content: [
        "El operador 'sizeof' se utiliza para determinar el tamaño en bytes que ocupa un tipo de dato o una variable en la memoria.",
        "Es muy útil porque el tamaño de los tipos puede variar entre diferentes computadoras."
      ],
      code: `int a = 10;\n\nprintf("Tamaño de int: %lu bytes\\n", sizeof(int));\nprintf("Tamaño de la variable a: %lu bytes\\n", sizeof(a));\nprintf("Tamaño de double: %lu bytes\\n", sizeof(double));`,
      note: "sizeof devuelve un valor de tipo 'size_t', por lo que se suele imprimir usando el especificador '%lu' (long unsigned)."
    }
  ],
  6: [
    {
      title: "Operadores Aritméticos",
      content: [
        "Permiten realizar operaciones matemáticas básicas entre variables y valores."
      ],
      table: {
        headers: ["Operador", "Descripción", "Ejemplo"],
        rows: [
          ["+", "Suma", "a + b"],
          ["-", "Resta", "a - b"],
          ["*", "Multiplicación", "a * b"],
          ["/", "División", "a / b"],
          ["%", "Módulo (Resto)", "a % b"]
        ]
      }
    },
    {
      title: "Ejemplos: Aritméticos",
      content: [
        "Veamos cómo se utilizan los operadores aritméticos en el código:"
      ],
      code: `int a = 10;\nint b = 3;\n\nint suma = a + b;       // 13\nint resta = a - b;      // 7\nint mult = a * b;       // 30\nint div = a / b;        // 3 (división entera, se trunca el decimal)\nint resto = a % b;      // 1 (el resto de dividir 10 entre 3)`
    },
    {
      title: "Operadores Relacionales",
      content: [
        "Se utilizan para comparar dos valores. En C, no existe un tipo booleano nativo (hasta C99 con stdbool.h).",
        "Las comparaciones devuelven 1 si son verdaderas y 0 si son falsas."
      ],
      table: {
        headers: ["Operador", "Descripción", "Ejemplo"],
        rows: [
          ["==", "Igual a", "a == b"],
          ["!=", "Diferente de", "a != b"],
          [">", "Mayor que", "a > b"],
          ["<", "Menor que", "a < b"],
          [">=", "Mayor o igual que", "a >= b"],
          ["<=", "Menor o igual que", "a <= b"]
        ]
      }
    },
    {
      title: "Ejemplos: Relacionales",
      content: [
        "Al evaluar una expresión relacional, el resultado es un número entero (0 o 1)."
      ],
      code: `int x = 5;\nint y = 10;\n\nint es_igual = (x == y);     // 0 (Falso)\nint es_menor = (x < y);      // 1 (Verdadero)\nint es_mayor_o_igual = (x >= 5); // 1 (Verdadero)\n\nprintf("¿x es menor que y? %d\\n", es_menor);`
    },
    {
      title: "Operadores Lógicos",
      content: [
        "Permiten combinar múltiples condiciones relacionales."
      ],
      table: {
        headers: ["Operador", "Descripción", "Ejemplo"],
        rows: [
          ["&&", "AND lógico (Y)", "(a > 5) && (b < 10)"],
          ["||", "OR lógico (O)", "(a == 0) || (b == 0)"],
          ["!", "NOT lógico (NO)", "!(a == b)"]
        ]
      }
    },
    {
      title: "Ejemplos: Lógicos",
      content: [
        "Los operadores lógicos también devuelven 0 o 1."
      ],
      code: `int edad = 25;\nint tiene_licencia = 1; // 1 representa verdadero\n\n// AND: Ambas deben ser verdaderas\nint puede_conducir = (edad >= 18) && tiene_licencia;\n\n// OR: Al menos una debe ser verdadera\nint descuento = (edad < 12) || (edad > 65);\n\n// NOT: Invierte el valor\nint no_tiene_licencia = !tiene_licencia;`
    }
  ],
  7: [
    {
      title: "Salida de Datos (printf)",
      content: [
        "La función printf se utiliza para imprimir texto y variables en la consola.",
        "Para imprimir variables, debes usar 'especificadores de formato' dentro del texto, indicando el tipo de dato que se va a mostrar."
      ],
      code: `int edad = 20;\nprintf("Tengo %d años.\\n", edad);`
    },
    {
      title: "Entrada de Datos (scanf)",
      content: [
        "La función scanf permite leer datos ingresados por el usuario desde el teclado.",
        "Al igual que printf, utiliza especificadores de formato."
      ],
      code: `int edad;\nprintf("Ingresa tu edad: ");\nscanf("%d", &edad);`,
      note: "scanf requiere el operador '&' (dirección de memoria) antes de la variable para poder modificar su valor directamente en memoria."
    },
    {
      title: "Especificadores de Formato",
      content: [
        "Los especificadores le dicen a printf y scanf qué tipo de dato esperar."
      ],
      table: {
        headers: ["Especificador", "Tipo de Dato"],
        rows: [
          ["%d o %i", "int (entero)"],
          ["%u", "unsigned int (entero sin signo)"],
          ["%f", "float (decimal)"],
          ["%lf", "double (decimal largo)"],
          ["%c", "char (carácter)"],
          ["%s", "string (cadena de caracteres)"]
        ]
      }
    },
    {
      title: "Formatos Especiales",
      content: [
        "Puedes modificar cómo se imprimen los datos añadiendo números entre el '%' y la letra del especificador."
      ],
      code: `float pi = 3.14159;\n// Limitar a 2 decimales: imprime "3.14"\nprintf("%.2f\\n", pi);\n\nint numero = 5;\n// Rellenar con ceros a la izquierda hasta 4 dígitos: imprime "0005"\nprintf("%04d\\n", numero);\n\n// Alinear a la derecha ocupando 8 espacios: imprime "       5"\nprintf("%8d\\n", numero);`
    }
  ],
  8: [
    {
      title: "Proyecto: Calculadora Básica",
      content: [
        "¡Aplica tus conocimientos de variables, operadores y entrada/salida!",
        "Objetivo: Crea un programa que pida dos números enteros al usuario y muestre el resultado de sumarlos, restarlos, multiplicarlos y dividirlos.",
        "Requisitos:",
        "1. Declara variables para los números y los resultados.",
        "2. Usa 'scanf' para leer los números.",
        "3. Usa 'printf' para mostrar los resultados de forma clara."
      ],
      terminal: `$ ./calculadora\nIngresa el primer número: 10\nIngresa el segundo número: 2\nSuma: 12\nResta: 8\nMultiplicación: 20\nDivisión: 5`,
      solutionUrl: "https://github.com/alfosua/ucab-cursos-intro-c/blob/main/examples/02_calculadora.c"
    }
  ],
  9: [
    {
      title: "El Flujo de Ejecución",
      content: [
        "Por defecto, un programa en C se ejecuta de manera secuencial: línea por línea, de arriba hacia abajo.",
        "Las estructuras de control de flujo nos permiten alterar este camino. Las condicionales nos permiten tomar decisiones y ejecutar bloques de código solo si se cumple una condición específica."
      ]
    },
    {
      title: "Condicional if",
      content: [
        "La estructura 'if' evalúa una condición. Si el resultado es verdadero (distinto de cero), se ejecuta el bloque de código interno."
      ],
      code: `int edad = 18;\n\nif (edad >= 18) {\n    printf("Eres mayor de edad.\\n");\n}`
    },
    {
      title: "Condicional if-else",
      content: [
        "Puedes añadir un bloque 'else' que se ejecutará únicamente si la condición del 'if' resulta ser falsa."
      ],
      code: `int edad = 16;\n\nif (edad >= 18) {\n    printf("Eres mayor de edad.\\n");\n} else {\n    printf("Eres menor de edad.\\n");\n}`
    },
    {
      title: "Condicional else if",
      content: [
        "Para evaluar múltiples condiciones en cadena, se utiliza 'else if'. Tan pronto como una condición sea verdadera, se ejecuta su bloque y se ignoran las demás."
      ],
      code: `int nota = 85;\n\nif (nota >= 90) {\n    printf("Excelente");\n} else if (nota >= 60) {\n    printf("Aprobado");\n} else {\n    printf("Reprobado");\n}`
    },
    {
      title: "Condicional switch",
      content: [
        "Cuando tienes múltiples casos basados en el valor exacto de una variable entera o carácter, 'switch' es más limpio y eficiente que usar muchos 'if/else'."
      ],
      code: `char opcion = 'A';\n\nswitch(opcion) {\n    case 'A':\n        printf("Opción A");\n        break;\n    case 'B':\n        printf("Opción B");\n        break;\n    default:\n        printf("Opción inválida");\n}`
    }
  ],
  10: [
    {
      title: "El Principio DRY",
      content: [
        "DRY significa 'Don't Repeat Yourself' (No te repitas). Es un principio fundamental en programación.",
        "Si necesitas hacer algo 100 veces, no escribes 100 líneas de código. Usas un bucle (loop) para decirle a la computadora que repita una acción mientras se cumpla una condición."
      ]
    },
    {
      title: "Bucle for",
      content: [
        "El bucle 'for' es ideal cuando sabes exactamente cuántas veces quieres repetir un bloque de código.",
        "Tiene 3 partes: inicialización, condición y actualización."
      ],
      code: `// Imprime los números del 1 al 5\nfor (int i = 1; i <= 5; i++) {\n    printf("%d\\n", i);\n}`
    },
    {
      title: "Bucle while",
      content: [
        "El bucle 'while' repite un bloque de código mientras una condición sea verdadera.",
        "Es muy común usarlo con 'banderas' (flags) para mantener un programa ejecutándose hasta que ocurra un evento."
      ],
      code: `int ejecutando = 1;\nint comando;\n\nwhile (ejecutando) {\n    printf("Ingresa 0 para detener: ");\n    scanf("%d", &comando);\n    \n    if (comando == 0) {\n        ejecutando = 0; // Cambiamos la bandera para salir\n    }\n}`
    },
    {
      title: "Bucle do-while",
      content: [
        "Es similar al 'while', pero la condición se evalúa al final del bucle.",
        "Esto garantiza que el bloque de código se ejecutará al menos una vez, independientemente de la condición."
      ],
      code: `int opcion;\ndo {\n    printf("Ingresa 1 para salir: ");\n    scanf("%d", &opcion);\n} while (opcion != 1);`
    }
  ],
  11: [
    {
      title: "Proyecto: Adivina el Número",
      content: [
        "¡Combina condicionales y bucles en un juego interactivo!",
        "Objetivo: Crea un programa donde el usuario deba adivinar un número secreto (ej. 42).",
        "Requisitos:",
        "1. Usa un bucle 'while' que se repita hasta que el usuario adivine el número.",
        "2. Pide al usuario que ingrese un número.",
        "3. Usa 'if/else if' para decirle si el número secreto es mayor o menor al que ingresó.",
        "4. Felicítalo cuando acierte y termina el bucle."
      ],
      terminal: `$ ./adivina\nIngresa un número: 50\nEl número secreto es menor.\nIngresa un número: 25\nEl número secreto es mayor.\nIngresa un número: 42\n¡Correcto! Adivinaste el número.`,
      solutionUrl: "https://github.com/alfosua/ucab-cursos-intro-c/blob/main/examples/03_adivina_numero.c"
    }
  ],
  12: [
    {
      title: "¿Qué es una Función?",
      content: [
        "Una función es un bloque de código reutilizable diseñado para realizar una tarea específica.",
        "Imagina una función como una 'caja negra': le entregas datos (inputs), realiza un trabajo interno, y te devuelve un resultado (output).",
        "Ayudan a organizar el código, hacerlo más legible y evitar la repetición."
      ]
    },
    {
      title: "Anatomía de una Función",
      content: [
        "Toda función en C se compone de 4 partes principales:",
        "1. Tipo de retorno: El tipo de dato que devolverá (int, float, void si no devuelve nada).",
        "2. Nombre: Un identificador único (ej. 'sumar').",
        "3. Parámetros: Las variables que recibe como input (opcionales).",
        "4. Cuerpo: El bloque de código entre llaves {}."
      ],
      code: `// tipo_retorno nombre(parametros) {\n//     cuerpo\n// }\n\nint sumar(int a, int b) {\n    int resultado = a + b;\n    return resultado;\n}`
    },
    {
      title: "Llamando a una Función",
      content: [
        "Para usar una función, simplemente escribes su nombre seguido de paréntesis y los argumentos que requiere.",
        "Si la función devuelve un valor, puedes guardarlo en una variable o usarlo directamente."
      ],
      code: `void saludar() {\n    printf("¡Hola!\\n");\n}\n\nint main() {\n    saludar(); // Llamada a función sin retorno ni parámetros\n    \n    int total = sumar(10, 5); // Guardar el retorno en una variable\n    return 0;\n}`
    },
    {
      title: "Declaración vs Definición",
      content: [
        "En C, el compilador lee el código de arriba hacia abajo. Si llamas a una función antes de definirla, dará error.",
        "Para evitar esto, usamos 'Prototipos' (Declaraciones) al inicio del archivo, y la 'Definición' más abajo."
      ],
      code: `#include <stdio.h>\n\n// Prototipo (Declaración)\nint multiplicar(int x, int y);\n\nint main() {\n    printf("%d", multiplicar(5, 4));\n    return 0;\n}\n\n// Definición\nint multiplicar(int x, int y) {\n    return x * y;\n}`
    }
  ],
  13: [
    {
      title: "¿Qué son los Parámetros?",
      content: [
        "Los parámetros son variables locales a la función que reciben los valores (argumentos) que le pasamos al llamarla.",
        "Existen dos formas principales de pasar estos datos a una función en C: por valor y por referencia."
      ]
    },
    {
      title: "Uso Básico de Parámetros",
      content: [
        "Los parámetros nos permiten enviar datos a la función para que trabaje con ellos.",
        "Por ejemplo, una función que suma dos números necesita recibir esos dos números como parámetros."
      ],
      code: `int sumar(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    int resultado = sumar(10, 5);\n    printf("La suma es: %d\\n", resultado);\n    return 0;\n}`
    },
    {
      title: "Paso por Valor",
      content: [
        "En C, por defecto, los parámetros se pasan 'por valor'.",
        "Esto significa que la función recibe una COPIA de la variable original. Cualquier modificación que hagas dentro de la función NO afectará a la variable original fuera de ella."
      ]
    },
    {
      title: "Ejemplo: Paso por Valor",
      content: [
        "Observa cómo la variable 'num' en 'main' no cambia, aunque la modifiquemos dentro de la función."
      ],
      code: `void intentarCambiar(int x) {\n    x = 100; // Solo cambia la copia local 'x'\n}\n\nint main() {\n    int num = 5;\n    intentarCambiar(num);\n    \n    printf("num sigue siendo: %d\\n", num); // Imprime 5\n    return 0;\n}`
    },
    {
      title: "Paso por Referencia",
      content: [
        "Si realmente necesitas que una función modifique una variable original, debes pasarle la DIRECCIÓN de memoria de esa variable.",
        "A esto se le llama paso por referencia (simulado en C a través de punteros)."
      ]
    },
    {
      title: "Ejemplo: Paso por Referencia",
      content: [
        "Usamos el operador '&' para enviar la dirección, y '*' en la función para recibirla y modificar el valor."
      ],
      code: `void cambiarReal(int *x) {\n    *x = 100; // Va a la dirección y cambia el valor original\n}\n\nint main() {\n    int num = 5;\n    cambiarReal(&num); // Pasamos la dirección de 'num'\n    \n    printf("num ahora es: %d\\n", num); // Imprime 100\n    return 0;\n}`
    }
  ],
  14: [
    {
      title: "La Directiva #include",
      content: [
        "En C, la directiva '#include' le dice al preprocesador que inserte el contenido de otro archivo en tu programa antes de compilarlo.",
        "Se usa principalmente para incluir 'archivos de cabecera' (headers) que terminan en '.h'."
      ],
      code: `#include <stdio.h>  // Librería estándar (entre < >)\n#include "mi_math.h" // Archivo local (entre " ")`
    },
    {
      title: "¿Qué son los Archivos de Cabecera?",
      content: [
        "Los archivos '.h' (headers) contienen las DECLARACIONES (prototipos) de las funciones, macros y tipos de datos.",
        "No contienen el código real de las funciones (eso está precompilado en las librerías), solo le dicen a tu programa qué funciones existen y cómo usarlas."
      ]
    },
    {
      title: "Librerías Estándar Populares",
      content: [
        "C viene con una rica biblioteca estándar. Algunas de las más usadas son:"
      ],
      table: {
        headers: ["Librería", "Propósito principal"],
        rows: [
          ["<stdio.h>", "Entrada y salida (printf, scanf, archivos)"],
          ["<stdlib.h>", "Memoria dinámica (malloc, free), conversiones, números aleatorios"],
          ["<string.h>", "Manipulación de cadenas de texto (strlen, strcpy)"],
          ["<math.h>", "Funciones matemáticas (sin, cos, sqrt, pow)"],
          ["<stdbool.h>", "Añade el tipo 'bool' y los valores 'true' y 'false'"]
        ]
      }
    }
  ],
  15: [
    {
      title: "Proyecto: Conversor de Unidades",
      content: [
        "¡Modulariza tu código usando funciones!",
        "Objetivo: Crea un programa que convierta temperaturas de Celsius a Fahrenheit y viceversa.",
        "Requisitos:",
        "1. Crea una función `float celsiusAFahrenheit(float c)`.",
        "2. Crea una función `float fahrenheitACelsius(float f)`.",
        "3. En el `main`, crea un menú simple usando un bucle y un `switch` para que el usuario elija qué conversión hacer.",
        "4. Llama a la función correspondiente e imprime el resultado."
      ],
      terminal: `$ ./conversor\n1. Celsius a Fahrenheit\n2. Fahrenheit a Celsius\nElige: 1\nGrados C: 25\nResultado: 77.00 F`,
      solutionUrl: "https://github.com/alfosua/ucab-cursos-intro-c/blob/main/examples/04_conversor.c"
    }
  ],
  16: [
    {
      title: "¿Qué es un Arreglo?",
      content: [
        "Un arreglo (array) es una colección de variables del mismo tipo almacenadas en posiciones de memoria contiguas.",
        "Permiten agrupar muchos datos bajo un solo nombre, accediendo a ellos mediante un índice numérico."
      ]
    },
    {
      title: "Declaración e Inicialización",
      content: [
        "El tamaño del arreglo debe ser fijo y conocido en tiempo de compilación (a menos que uses memoria dinámica)."
      ],
      code: `// Declaración sin inicializar (tamaño 5)\nint edades[5];\n\n// Declaración e inicialización\nint numeros[5] = {10, 20, 30, 40, 50};\n\n// El compilador deduce el tamaño (3)\nfloat precios[] = {1.5, 2.5, 3.5};`
    },
    {
      title: "Acceso y Modificación",
      content: [
        "Para acceder a un elemento, usamos corchetes [].",
        "¡Importante! Los índices en C siempre comienzan en 0. El último elemento está en el índice (tamaño - 1)."
      ],
      code: `int numeros[5] = {10, 20, 30, 40, 50};\n\n// Acceder al primer elemento (índice 0)\nprintf("Primero: %d\\n", numeros[0]); // Imprime 10\n\n// Modificar el tercer elemento (índice 2)\nnumeros[2] = 99;\nprintf("Tercero modificado: %d\\n", numeros[2]); // Imprime 99`
    },
    {
      title: "Iterar sobre un Arreglo",
      content: [
        "La forma más común de recorrer todos los elementos de un arreglo es utilizando un bucle 'for'."
      ],
      code: `int notas[4] = {85, 90, 78, 92};\n\nfor (int i = 0; i < 4; i++) {\n    printf("Nota %d: %d\\n", i, notas[i]);\n}`
    }
  ],
  17: [
    {
      title: "¿Qué es una Cadena?",
      content: [
        "C no tiene un tipo de dato 'string' nativo como otros lenguajes.",
        "Las cadenas son simplemente arreglos de caracteres (char).",
        "Para que C sepa dónde termina la cadena, siempre se añade un carácter nulo especial '\\0' al final."
      ]
    },
    {
      title: "Declaración e Inicialización",
      content: [
        "Puedes inicializar una cadena de varias formas. El compilador añade el '\\0' automáticamente si usas comillas dobles."
      ],
      code: `// Ambas declaraciones son equivalentes\nchar saludo1[] = "Hola";\n// Manualmente (requiere añadir el '\\0')\nchar saludo2[] = {'H', 'o', 'l', 'a', '\\0'};\n\nprintf("%s\\n", saludo1);`
    },
    {
      title: "Leer Cadenas con scanf",
      content: [
        "Para leer una cadena desde el teclado, usamos 'scanf' con el especificador '%s'.",
        "¡Importante! A diferencia de otros tipos de datos, al leer una cadena NO se usa el operador '&' antes del nombre de la variable, ya que el nombre del arreglo ya es una dirección de memoria.",
        "Nota: '%s' solo lee hasta encontrar un espacio en blanco. Para leer una línea completa con espacios, se suele usar 'fgets'."
      ],
      code: `char nombre[50];\nprintf("Ingresa tu nombre: ");\n\n// No usamos &nombre, solo nombre\nscanf("%s", nombre);\n\nprintf("Hola, %s\\n", nombre);`
    },
    {
      title: "La librería <string.h>",
      content: [
        "Como las cadenas son arreglos, no puedes usar operadores como '=' o '==' directamente con ellas.",
        "Para manipularlas, C provee la librería <string.h> que contiene funciones especializadas."
      ]
    },
    {
      title: "Longitud: strlen()",
      content: [
        "strlen (String Length) devuelve la cantidad de caracteres de la cadena, sin contar el carácter nulo '\\0'."
      ],
      code: `#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char texto[] = "Programacion";\n    int longitud = strlen(texto);\n    \n    printf("La longitud es: %d\\n", longitud); // 12\n    return 0;\n}`
    },
    {
      title: "Copiar: strcpy()",
      content: [
        "strcpy (String Copy) copia el contenido de una cadena en otra.",
        "Asegúrate de que la cadena destino tenga suficiente espacio."
      ],
      code: `#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char origen[] = "Hola Mundo";\n    char destino[20]; // Espacio suficiente\n    \n    strcpy(destino, origen);\n    printf("Destino: %s\\n", destino);\n    return 0;\n}`
    },
    {
      title: "Comparar: strcmp()",
      content: [
        "strcmp (String Compare) compara dos cadenas alfabéticamente.",
        "Devuelve 0 si son exactamente iguales."
      ],
      code: `#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str1[] = "Manzana";\n    char str2[] = "Manzana";\n    \n    if (strcmp(str1, str2) == 0) {\n        printf("Las cadenas son iguales.\\n");\n    }\n    return 0;\n}`
    },
    {
      title: "Concatenar: strcat()",
      content: [
        "strcat (String Concatenate) une una cadena al final de otra.",
        "La cadena destino debe tener espacio suficiente para albergar ambas."
      ],
      code: `#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char saludo[30] = "Hola, ";\n    char nombre[] = "Mundo";\n    \n    strcat(saludo, nombre);\n    printf("%s\\n", saludo); // Imprime "Hola, Mundo"\n    return 0;\n}`
    }
  ],
  18: [
    {
      title: "Proyecto: Gestor de Calificaciones",
      content: [
        "¡Domina los arreglos procesando múltiples datos!",
        "Objetivo: Crea un programa que procese los nombres y notas de 5 estudiantes.",
        "Requisitos:",
        "1. Declara un arreglo de 5 flotantes para las notas y un arreglo bidimensional de caracteres (o múltiples arreglos) para los nombres.",
        "2. Usa un bucle `for` para pedir al usuario que ingrese el nombre y la nota de cada estudiante.",
        "3. Usa otro bucle para calcular el promedio de las notas.",
        "4. Encuentra e imprime cuál fue la nota más alta y a qué estudiante pertenece."
      ],
      terminal: `$ ./notas\nNombre 1: Ana\nNota 1: 15\nNombre 2: Luis\nNota 2: 18\n...\n\nPromedio: 16.2\nNota más alta: 18 (Luis)`,
      solutionUrl: "https://github.com/alfosua/ucab-cursos-intro-c/blob/main/examples/05_calificaciones.c"
    }
  ],
  19: [
    {
      title: "La Memoria RAM",
      content: [
        "Imagina la memoria RAM de tu computadora como un gigantesco casillero de correos.",
        "Cada 'casilla' puede guardar un byte de información, y cada casilla tiene un número único que la identifica: su Dirección de Memoria."
      ]
    },
    {
      title: "¿Qué es un Puntero?",
      content: [
        "Un puntero es simplemente una variable. Pero en lugar de guardar un número o una letra, guarda una DIRECCIÓN DE MEMORIA.",
        "Son la característica más poderosa (y temida) de C, ya que te dan control total sobre el hardware."
      ]
    },
    {
      title: "El operador & (Dirección)",
      content: [
        "Para saber en qué 'casilla' está guardada una variable normal, usamos el operador '&' (ampersand) antes de su nombre."
      ],
      code: `int edad = 25;\n\n// Imprime la dirección de memoria (ej. 0x7ffeeb4b)\nprintf("Dirección de edad: %p\\n", &edad);`
    },
    {
      title: "El operador * (Desreferencia)",
      content: [
        "Una vez que tenemos un puntero apuntando a una dirección, usamos el operador '*' para 'viajar' a esa dirección y ver o modificar el valor que hay allí."
      ],
      code: `int edad = 25;\nint *ptr = &edad; // ptr guarda la dirección de edad\n\n// Usamos *ptr para acceder al valor 25\nprintf("Valor: %d\\n", *ptr); \n\n// Cambiamos el valor en esa dirección\n*ptr = 30; \n// Ahora 'edad' vale 30`
    },
    {
      title: "Ejemplo Completo",
      content: [
        "Veamos cómo interactúan las variables normales y los punteros:"
      ],
      code: `int saldo = 1000;\nint *p_saldo = &saldo;\n\nprintf("Saldo original: %d\\n", saldo);\n\n// Modificamos a través del puntero\n*p_saldo = 500;\n\nprintf("Nuevo saldo: %d\\n", saldo); // Imprime 500`
    }
  ],
  20: [
    {
      title: "Punteros y Arreglos",
      content: [
        "En C, los arreglos y los punteros están íntimamente relacionados.",
        "De hecho, el nombre de un arreglo actúa como un puntero constante que apunta al primer elemento del arreglo."
      ],
      code: `int numeros[3] = {10, 20, 30};\n\n// 'numeros' es equivalente a '&numeros[0]'\nint *ptr = numeros;\n\nprintf("Primer elemento: %d\\n", *ptr); // Imprime 10`
    },
    {
      title: "Aritmética de Punteros",
      content: [
        "Puedes sumar o restar valores a un puntero. Lo mágico es que C automáticamente ajusta el 'salto' según el tamaño del tipo de dato.",
        "Si sumas 1 a un puntero a int, no avanza 1 byte, avanza 4 bytes (el tamaño de un int), llevándote al siguiente elemento."
      ],
      code: `int arr[3] = {10, 20, 30};\nint *p = arr; // Apunta a arr[0] (10)\n\np++; // Avanza al siguiente entero\nprintf("%d\\n", *p); // Imprime 20\n\np++; // Avanza de nuevo\nprintf("%d\\n", *p); // Imprime 30`
    },
    {
      title: "Recorrer con Punteros",
      content: [
        "Podemos usar la aritmética de punteros para recorrer un arreglo sin usar los corchetes []."
      ],
      code: `int valores[4] = {5, 10, 15, 20};\nint *ptr = valores;\n\nfor(int i = 0; i < 4; i++) {\n    // *(ptr + i) es exactamente igual a valores[i]\n    printf("%d\\n", *(ptr + i));\n}`
    }
  ],
  21: [
    {
      title: "Proyecto: Intercambio Seguro",
      content: [
        "¡Usa punteros para modificar variables externas!",
        "Objetivo: Crea una función que intercambie (swap) los valores de dos variables declaradas en el `main`.",
        "Requisitos:",
        "1. Crea una función `void swap(int *a, int *b)`.",
        "2. Dentro de la función, usa una variable temporal para intercambiar los valores apuntados por `a` y `b`.",
        "3. En el `main`, declara dos variables, imprímelas, llama a `swap` pasándole las direcciones, y vuelve a imprimirlas para verificar el cambio."
      ],
      terminal: `$ ./swap\nAntes: x = 10, y = 20\nDespués: x = 20, y = 10`,
      solutionUrl: "https://github.com/alfosua/ucab-cursos-intro-c/blob/main/examples/06_intercambio.c"
    }
  ],
  22: [
    {
      title: "¿Qué es un Struct?",
      content: [
        "Los arreglos agrupan datos del mismo tipo. Las estructuras ('structs') permiten agrupar datos de DIFERENTES tipos bajo un solo nombre.",
        "Son útiles para representar objetos complejos o entidades del mundo real."
      ]
    },
    {
      title: "Declaración y Uso",
      content: [
        "Se utiliza la palabra clave 'struct'. Para acceder a sus miembros, se usa el operador punto ('.')."
      ],
      code: `struct Estudiante {\n    char nombre[50];\n    int edad;\n    float promedio;\n};\n\nint main() {\n    struct Estudiante e1;\n    e1.edad = 20;\n    e1.promedio = 18.5;\n    strcpy(e1.nombre, "Ana");\n    \n    printf("%s tiene %d años.", e1.nombre, e1.edad);\n    return 0;\n}`
    },
    {
      title: "Punteros a Structs",
      content: [
        "Cuando tienes un puntero que apunta a una estructura, no puedes usar el operador punto ('.') directamente.",
        "En su lugar, se utiliza el operador flecha ('->') para desreferenciar y acceder al miembro en un solo paso."
      ],
      code: `struct Punto {\n    int x;\n    int y;\n};\n\nint main() {\n    struct Punto p1 = {10, 20};\n    struct Punto *ptr = &p1;\n    \n    // Acceso normal\n    printf("X: %d\\n", p1.x);\n    \n    // Acceso a través del puntero usando flecha\n    printf("Y: %d\\n", ptr->y);\n    \n    // Modificar usando el puntero\n    ptr->x = 50;\n    return 0;\n}`
    }
  ],
  23: [
    {
      title: "¿Por qué usar Memoria Dinámica?",
      content: [
        "Hasta ahora, el tamaño de los arreglos debía conocerse al compilar el programa.",
        "La memoria dinámica permite solicitar memoria al sistema operativo (en el Heap) mientras el programa se está ejecutando, adaptándose a las necesidades reales."
      ]
    },
    {
      title: "Asignar memoria: malloc()",
      content: [
        "malloc (Memory Allocation) reserva un bloque de memoria del tamaño especificado en bytes.",
        "Devuelve un puntero al inicio del bloque. Requiere incluir <stdlib.h>."
      ],
      code: `#include <stdlib.h>\n\n// Pedir memoria para 5 enteros\n// sizeof(int) asegura que pedimos los bytes correctos\nint *arr = (int*) malloc(5 * sizeof(int));\n\nif (arr == NULL) {\n    printf("Error: No hay memoria disponible.\\n");\n}\n\narr[0] = 10; // Usar la memoria`
    },
    {
      title: "Liberar memoria: free()",
      content: [
        "¡REGLA DE ORO! Toda memoria pedida con malloc DEBE ser liberada con 'free' cuando ya no se necesite.",
        "Si no lo haces, el programa consumirá cada vez más memoria (memory leak)."
      ],
      code: `#include <stdlib.h>\n\nint *arr = (int*) malloc(100 * sizeof(int));\n\n// ... usar el arreglo ...\n\n// Liberar la memoria al terminar\nfree(arr);\n\n// Es buena práctica anular el puntero después\narr = NULL;`
    }
  ],
  24: [
    {
      title: "Manejo de Archivos",
      content: [
        "Para guardar datos permanentemente y que no se pierdan al cerrar el programa, C permite leer y escribir archivos en el disco duro.",
        "Se utiliza un puntero especial de tipo FILE."
      ]
    },
    {
      title: "Abrir y Cerrar Archivos",
      content: [
        "Usamos 'fopen' para abrir un archivo y 'fclose' para cerrarlo.",
        "Modos comunes: 'r' (leer), 'w' (escribir, sobrescribe), 'a' (añadir al final, append)."
      ],
      code: `FILE *archivo = fopen("datos.txt", "w");\n\nif (archivo == NULL) {\n    printf("Error al abrir el archivo.\\n");\n    return 1;\n}\n\n// ... operaciones ...\n\nfclose(archivo); // ¡Siempre cerrar!`
    },
    {
      title: "Escribir en Archivos",
      content: [
        "La función 'fprintf' funciona exactamente igual que 'printf', pero recibe como primer parámetro el puntero al archivo."
      ],
      code: `FILE *archivo = fopen("registro.txt", "w");\n\nif (archivo != NULL) {\n    int edad = 25;\n    fprintf(archivo, "Usuario registrado.\\n");\n    fprintf(archivo, "Edad: %d\\n", edad);\n    \n    fclose(archivo);\n}`
    },
    {
      title: "Leer de Archivos",
      content: [
        "La función 'fscanf' funciona como 'scanf', leyendo datos del archivo según un formato.",
        "También existe 'fgets' para leer líneas completas de texto."
      ],
      code: `FILE *archivo = fopen("datos.txt", "r");\nint numero;\n\nif (archivo != NULL) {\n    // Leer un entero del archivo\n    fscanf(archivo, "%d", &numero);\n    printf("Leído: %d\\n", numero);\n    \n    fclose(archivo);\n}`
    }
  ],
  25: [
    {
      title: "Proyecto Final: Sistema de Inventario",
      content: [
        "¡Felicidades por llegar hasta aquí! Es hora de tu prueba final integrando todo lo aprendido.",
        "Objetivo: Crea un programa de consola para gestionar el inventario de una tienda.",
        "Requisitos:",
        "1. Define un `struct Producto` con id, nombre, precio y cantidad.",
        "2. Usa un arreglo (o memoria dinámica) para almacenar múltiples productos.",
        "3. Crea funciones separadas para: Agregar producto, Mostrar inventario y Vender producto (reduce cantidad).",
        "4. Usa un bucle `while` y un `switch` para el menú principal.",
        "5. ¡Extra! Al salir del programa, guarda el inventario en un archivo `inventario.txt`. Al iniciar, lee el archivo para cargar los datos."
      ],
      terminal: `$ ./inventario\n--- MENÚ ---\n1. Agregar Producto\n2. Mostrar Inventario\n3. Vender Producto\n4. Salir\nElige una opción: `,
      solutionUrl: "https://github.com/alfosua/ucab-cursos-intro-c/blob/main/examples/07_inventario.c"
    }
  ]
};
