export const Plantilla = [
  {
    id: 1,
    Titulo: "PLANTA EXTERNA",
    Texto:
      "Cliente se contacta para reportar falla en su servicio de FO, se realizan pruebas a nivel externo, se validan los puertos, sin potencias y con servicio abajo, alarma de LOS, cliente confirma que esta luz está encendida en su equipo, sé válida UM con ping totalmente caído, sin ingreso a equipo, se genera escalamiento de PLANTA EXTERNA",
  },
  {
    id: 2,
    Titulo: "MANTENIMIENTO DATOS (PING UM CAIDO)",
    Texto:
      "Cliente se contacta para reportar falla en su servicio de FO, se realizan pruebas a nivel externo, se validan los puertos, potencias ok y con servicio arriba, sin alarmas que indiquen algún problema externo, sé válida UM con ping totalmente caído, sin ingreso a equipo, se genera escalamiento de MANTENIMIENTO DE DATOS para revisión del equipo a nivel interno.",
  },
  {
    id: 3,
    Titulo: "MANTENIMIENTO DATOS (PING UM OK)",
    Texto:
      "Cliente se contacta para reportar falla en su servicio de FO, se realizan pruebas a nivel externo, se validan los puertos, potencias ok y con servicio arriba, sin alarmas que indiquen algún problema externo, sé válida UM con ping normal ok, ping extendido sin perdida considerable de paquetes, se indica al cliente que reinicie el servicio para validar, pero sigue sin internet, se realizan pruebas de primer nivel, se pide conexión directa al equipo de claro, cliente indica que sigue sin servicio, ingreso al equipo, configuraciones correctas, no se evidencia problema, se genera MANTENIMIENTO DE DATOS para revisión interna del servicio.",
  },
  {
    id: 4,
    Titulo: "MASIVA (CON INC CREADO)",
    Texto:
      "Cliente se contacta para reportar falla en su servicio de FO, se realizan pruebas a nivel externo, se validan los puertos, sin potencias y con servicio abajo, se validan vecinos y la mayoría están caídos (aplica para masiva), sé válida RED DE ACCESO en Service Manager y se encuentra indícente creado, se procede a realizar proceso de asociar masiva y dar información al cliente de tiempos de solucion.",
  },
  {
    id: 5,
    Titulo: "CREACION DE MASIVA",
    Texto:
      "Cliente se contacta para reportar falla en su servicio de FO, se realizan pruebas a nivel externo, se validan los puertos, sin potencias y con servicio abajo, se validan vecinos y la mayoría están caídos (aplica para masiva), sé válida RED DE ACCESO en Service Manager no se encuentra INC creado por lo que se reporta para creación de MASIVA, se genera proceso y se le indica al cliente lo que está pasando y los tiempos de solucion.",
  },
  {
    id: 6,
    Titulo: "SOLUCION PRIMER CONTACTO",
    Texto:
      "Cliente se contacta para reportar falla en su servicio de FO, se realizan pruebas a nivel externo, se validan los puertos, potencias ok y con servicio arriba, sin alarmas que indiquen algún problema externo, sé válida UM con ping normal ok, ping extendido sin perdida considerable de paquetes, se indica al cliente que reinicie el servicio para validar el cual confirma que ya tiene internet después de realizar esta acción, se procede a generar caso y cerrar interacción."
  },
  {
    id: 7,
    Titulo: "INTERMITENCIA (VALIDADA EN PRUEBAS)",
    Texto:
    "Cliente se contacta para reportar falla en su servicio de FO, el cual indica está presentando mucha intermitencia, se realizan pruebas a nivel externo, se validan los puertos, potencias ok y con servicio arriba, sin alarmas que indiquen algún problema externo, sé válida UM con ping normal y ping extendido con perdida considerable de paquetes, se indica al cliente que el servicio cuenta con algunas perdidas considerables, por lo que se realiza el escalamiento al Back de negocios para revisión."
  },
  {
    id: 8,
    Titulo: "INTERMITENCIA (NO COMPROBADA)",
    Texto:
      "Cliente se contacta para reportar falla en su servicio de FO, el cual indica está presentando mucha intermitencia, se realizan pruebas a nivel externo, se validan los puertos, potencias ok y con servicio arriba, sin alarmas que indiquen algún problema externo, sé válida UM con ping normal ok, ping extendido sin perdida considerable de paquetes, se indica al cliente que el servicio está ok por lo que no se puede validar la intermitencia, para darle una solución se le pide que envíe las 3 pruebas al correo contactopyme.co@claro.com.co para poder ayudarlo, se crea el caso y se deja pendiente cliente."
  },
  {
    id: 9,
    Titulo: "TRANSFERENCIA",
    Texto:
      "Cliente se comunica para solicitar ayuda con temas relacionados con su servicio, los cuales no corresponden al área de soporte, se le indica al cliente que no podemos ayudarlo directamente, se realiza transferencia asistida al área encargada para que puedan ayudarle con su solicitud."
  },
  {
    id: 10,
    Titulo: "CONFIGURACIONES AVANZADAS",
    Texto:
      "Cliente se comunica para solicitar ajustes avanzados en su equipo, se solicita la información que se requiere para aplicar dicha configuración, se ingresa al equipo y se realiza ajuste, cliente confirma funcionamiento del servicio, se crea el caso y se le indica al cliente el SD el cual queda en estadao cerrado"
  },

];
