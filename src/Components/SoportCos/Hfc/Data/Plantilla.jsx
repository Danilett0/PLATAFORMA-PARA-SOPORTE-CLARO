export const Plantilla = [
  {
    id: 1,
    Titulo: "VISITA (Niveles Desfasados)",
    Texto:
      "Cliente se comunica para reportar fallas en su servicio, se realiza validación: aprovisionamiento ok, diagnosticador arroja niveles desfasados en el equipo, se genera visita",
  },
  {
    id: 2,
    Titulo: "VISITA (Modem Desenganchado)",
    Texto:
      "Cliente se comunica para reportar fallas en su servicio, se realiza validación: aprovisionamiento ok, diagnosticador muestra equipo sin señal, se realiza soporte primer nivel, reinicio manual, pero el servicio no sube, se genera visita.",
  },
  {
    id: 3,
    Titulo: "VISITA (Niveles Ok)",
    Texto:
      "Cliente se comunica para reportar fallas en su servicio, se realiza validación: aprovisionamiento ok, diagnosticador muestra niveles ok, Cliente manifiesta que se le han venido presentando fallos, se valida historial, algunas caídas, señales de ruido y perdidas de paquetes, se genera visita.",
  },
  {
    id: 4,
    Titulo: "MASIVA",
    Texto:
      "Cliente se comunica para reportar fallas en su servicio, se realiza validación: aprovisionamiento ok, diagnosticador: se evidencia alerta de red externa, se procede a generar proceso para creación de masiva sobre el nodo del Cliente.",
  },
  {
    id: 5,
    Titulo: "AVANCE MASIVA",
    Texto:
      "Cliente se comunica para solicitar avances sobre una falla masiva que actualmente tiene en progreso, se realiza validación sobre el incidente, se le brinda información sobre notas de este y posibles tiempos de solución basado en las últimas notas adjuntas en el incidente.",
  },
  {
    id: 6,
    Titulo: "CONFIGURACIONES AVANZADAS",
    Texto:
      "Cliente se comunica para solicitar ajustes avanzados en su equipo, se solicita la información que se requiere para aplicar dicha configuración, se ingresa al equipo y se realiza ajuste, cliente confirma funcionamiento del servicio.",
  },
  {
    id: 7,
    Titulo: "TRANSFERENCIA",
    Texto:
      "Cliente se comunica para solicitar ayuda con servicio, el cual se le indica que no podemos ayudarlo directamente, por lo que se realiza transferencia asistida al área encargada para que puedan ayudarle con su solicitud.",
  },
  {
    id: 8,
    Titulo: "SOLUCION PRIMER CONTACTO",
    Texto:
      "Cliente se comunica para solicitar soporte con sus servicios, ya que le están presentando fallas, se realiza soporte de primer nivel y se logra dar solución al cliente, este confirma operatividad del servicio.",
  },
];
