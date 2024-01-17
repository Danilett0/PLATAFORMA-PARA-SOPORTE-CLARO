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

export const PlantillaWhatsapp1 = [
  {
    id: 1,
    Titulo: "Saludo Inicial",
    Texto:
      "Bienvenido a soporte de Claro empresas y negocios. Soy Jefferson, tu asesor. Gracias por comunicarte con nosotros. Estoy aquí para resolver tu solicitud de soporte técnico. Te pido un momento mientras reviso tu caso y te brindo la mejor solución posible. ¡Muchas gracias!",
  },
  {
    id: 2,
    Titulo: "Saludo Inicial Con Respuesta Tardia",
    Texto:
      "Bienvenido a soporte de Claro empresas y negocios. Soy Jefferson, tu asesor. Te pido disculpas por el tiempo de respuesta. ¿Aún te encuentras en línea para revisar tu solicitud? ",
  },
  {
    id: 3,
    Titulo: "Informar Tiempos",
    Texto:
      "Estoy validando tu caso, por favor permanece en línea. Recuerda que si no me respondes en 4 minutos, el chat se cerrará automáticamente. Te agradezco tu paciencia y comprensión.",
  },
  {
    id: 4,
    Titulo: "Confirmar si aun esta en linea",
    Texto:
      "Estoy trabajando en tu consulta, pero ha pasado un tiempo y no he recibido respuesta, ¿Aún estás en linea?",
  },
  {
    id: 5,
    Titulo: "Generar Radicado",
    Texto:
      "Te informo que he generado un radicado para tu caso, este es un número que identifica tu solicitud y te permite hacer seguimiento al estado de la misma. Es importante que guardes el radicado, ya que lo necesitarás para consultar el avance de tu caso o para hacer alguna reclamación o sugerencia.",
  },
  {
    id: 6,
    Titulo: "Invitar a Encuesta",
    Texto:
      "Te invito a participar en una breve encuesta para calificar el servicio que has recibido de mi parte. Solo tienes que hacer clic en el enlace que te enviaré a continuación: https://yoiz.me/tw5of",
  },
];

export const PlantillaWhatsapp2 = [
  {
    id: 20,
    Titulo: "Fallo Por Masiva",
    Texto:
      "Ya he validado tu problema y he encontrado que está relacionado a un incidente en la zona que afecta el servicio. Te pido disculpas por las molestias que esto te pueda ocasionar. Te informo que nuestros técnicos ya están trabajando en el incidente para solucionarlo lo antes posible. Mientras tanto, voy a realizar una asociación de los datos de tu cuenta a la masiva, para que puedas tener una mejor experiencia de servicio cuando el incidente se resuelva",
  },
  {
    id: 21,
    Titulo: "( Tiempos ) Fallo Por Masiva",
    Texto:
      "Entiendo tu preocupación por el tiempo de solución del incidente. Te informo que estamos trabajando con la mayor diligencia y prioridad para resolverlo lo antes posible. Según el caso y la complejidad del incidente, lo más probable es que se solucione hoy mismo. Sin embargo, no puedo darte una hora exacta, ya que depende de varios factores que escapan a nuestro control. Te pido que tengas un poco de paciencia mientras se restablece el servicio",
  },
  {
    id: 22,
    Titulo: "Generar Visita Problemas Con Señal",
    Texto:
      "He visto que hay un problema con el servicio asociado a la señal del módem que requiere asistencia técnica de forma presencial. Si esta de acuerdo voy a generar una visita técnica para que un especialista pueda revisar tu módem y darte una solución al problema",
  },
  {
    id: 23,
    Titulo: "Generar Visita Problemas Con Modem",
    Texto:
      "He notado algunos problemas con el módem que me impiden darte soporte remoto por temas de configuración o compatibilidad. Por eso, es necesario que un técnico vaya a tu domicilio para revisar el módem y darte una solución al problema. Si estás de acuerdo, voy a generar una visita técnica para que un especialista pueda atenderte.",
  },
];
