export const Plantilla = [
  {
    id: 1,
    Titulo: "VISITA (Niveles Desfasados)",
    Texto:
      "Cliente se comunica para reportar fallas en su servicio, se realiza validación: aprovisionamiento ok, diagnosticador arroja niveles desfasados en la señal del equipo, se genera visita para revisión técnica.",
  },
  {
    id: 2,
    Titulo: "VISITA (Modem Desenganchado)",
    Texto:
      "Cliente se comunica para reportar fallas en su servicio, se realiza validación: aprovisionamiento ok, el diagnosticador muestra equipo sin señal, se realiza soporte primer nivel, reinicio manual, pero el servicio no sube, se genera visita para revisión técnica.",
  },
  {
    id: 3,
    Titulo: "VISITA (Niveles Ok)",
    Texto:
      "Cliente se comunica para reportar fallas en su servicio, se realiza validación: aprovisionamiento ok, diagnosticador muestra niveles ok, Cliente manifiesta que se le han venido presentando fallos en los últimos días y que sigue sin servicio en el momento, se realiza validación adicional sobre el equipo, pero parece tener las configuraciones correctas por lo que se genera visita para revisión técnica.",
  },
  {
    id: 4,
    Titulo: "CONFIRMACION VISITA (Incumplimiento)",
    Texto:
      "El cliente se comunica para reportar que su visita no llegó a la hora indicada. Se revisa el número de la visita en la plataforma de agendamiento y se confirma que la hora ya pasó efectivamente del horario fijado para cumplimiento. Se procede a realizar un escalamiento por visita incumplida al CGO. Finalmente, se informa al cliente sobre la situación y se le ofrece disculpa indicándole que ya van a revisar el incumplimiento de esta.",
  },
  {
    id: 5,
    Titulo: "CREACION DE MASIVA",
    Texto:
      "Cliente se comunica para reportar fallas en su servicio, se realiza validación: aprovisionamiento ok, diagnosticador: se realiza validación de las cuentas vecinas, las cuales se encuentran con la misma afectacion, se realiza proceso para creación de incidente en máximo y asociación de cuenta del cliente a esta.",
  },
  {
    id: 6,
    Titulo: "MASIVA (Con Incidente en Maximo)",
    Texto:
      "Cliente se comunica para reportar fallas en su servicio, se realiza validación: aprovisionamiento ok, diagnosticador: se evidencia alerta de red externa, sé válida en máximo y se asocia la cuenta del cliente al incidente, se le brinda información y tiempos estimados.",
  },
  {
    id: 7,
    Titulo: "AVANCE DE MASIVA",
    Texto:
      "Cliente se comunica para solicitar avances sobre una falla masiva que actualmente tiene en progreso, se realiza validación sobre el incidente en máximo, se le brinda información sobre notas de este y posibles tiempos de solución basado en los últimos seguimientos realizados en el incidente.",
  },
  {
    id: 8,
    Titulo: "CONFIGURACIONES AVANZADAS",
    Texto:
      "Cliente se comunica para solicitar ajustes avanzados en su equipo, se solicita la información que se requiere para aplicar dicha configuración, se ingresa al equipo y se realiza ajuste, cliente confirma funcionamiento del servicio.",
  },
  {
    id: 9,
    Titulo: "TRANSFERENCIA",
    Texto:
      "Cliente se comunica para solicitar ayuda con temas relacionados con su servicio, los cuales no corresponden al área de soporte, se le indica al cliente que no podemos ayudarlo directamente, se realiza transferencia asistida al área encargada para que puedan ayudarle con su solicitud.",
  },
  {
    id: 10,
    Titulo: "SOLUCION PRIMER CONTACTO",
    Texto:
      "Cliente se comunica para solicitar soporte con sus servicios, ya que no están funcionando correctamente, se realiza soporte de primer nivel y se logra dar solución al cliente, el cual confirma operatividad del servicio.",
  },
];
