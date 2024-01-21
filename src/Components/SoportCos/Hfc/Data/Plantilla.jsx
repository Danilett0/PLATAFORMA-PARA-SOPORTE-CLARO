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
    id: 11,
    Titulo: "VISITA (Fallas TV)",
    Texto:
      "Cliente se comunica para reportar fallas en su servicio de television, se realiza validación: aprovisionamiento ok, soporte primer nivel, reinicio de decodificador, restablecimiento pero aun asi sigue sin funcionar el servicio, se genera visita.",
  },
  {
    id: 12,
    Titulo: "VISITA (Fallas Telefonia)",
    Texto:
      "Cliente se comunica para reportar fallas en su servicio de telefonia, se realiza validación: diagnosticador niveles ok, aprovisionamiento ok, se actualiza y repara servicio, soporte primer nivel realizado, sigue sin funcionar por lo que se genera visita.",
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
      "Bienvenido a soporte de Claro empresas y negocios. Soy Jefferson, tu asesor y estoy aquí para resolver tu solicitud de soporte técnico. Te pido un momento mientras reviso tu caso y te brindo la mejor solución posible. ¡Muchas gracias!",
  },
  {
    id: 3,
    Titulo: "Informar Tiempos",
    Texto:
      "Por favor permanece en línea. Recuerda que si no hay una respuesta de tu parte en menos de 4 minutos, el chat se cerrará automáticamente, por lo que necesito una respuesta para saber que sigues conmigo en línea y así evitamos que se nos caiga el chat.",
  },
  {
    id: 4,
    Titulo: "Pedir tiempo al cliente",
    Texto:
    "Por favor, dame unos minutos mientras valido el caso y realizo el proceso correspondiente. Confírmame con un mensaje a continuación para mantener el chat activo."
  },
  {
    id: 5,
    Titulo: "Generar Radicado",
    Texto:
      "Acabo de generar un radicado para tu caso, este es un número que identifica tu solicitud y te permite hacer seguimiento al estado de la misma. Es importante que guardes el radicado, ya que lo necesitarás para consultar avances, hacer alguna reclamación o sugerencia al respecto.",
  },
  {
    id: 6,
    Titulo: "Invitar a Encuesta",
    Texto:
      "Espero tengas un exelente dia!, ya para finalizar te invito a participar en una breve encuesta para calificar el servicio que has recibido de mi parte. Solo tienes que hacer clic en el enlace que te enviaré a continuación: https://yoiz.me/tw5of",
  },
];

export const PlantillaWhatsapp2 = [
  {
    id: 20,
    Titulo: "Fallo Por Masiva",
    Texto:
      "He validado tu problema y he encontrado que está relacionado a un incidente en la zona que afecta el servicio. Te pido disculpas por las molestias que esto te pueda ocasionar. Los técnicos están trabajando en el incidente en este momento por lo que solo es cuestion de esperar que ellos terminen su trabajo. Mientras tanto, voy a realizar una asociación de los datos de tu cuenta a la masiva, para que puedas tener una mejor experiencia de servicio cuando el incidente se resuelva.",
  },
  {
    id: 21,
    Titulo: "( Tiempos ) Fallo Por Masiva",
    Texto:
      "Según el caso y la complejidad del incidente, lo más probable es que se solucione hoy mismo. Sin embargo, no puedo darte una hora exacta, ya que depende de varios factores que escapan a nuestro control. Te pido que tengas un poco de paciencia mientras se restablece el servicio.",
  },
  {
    id: 22,
    Titulo: "Generar Visita Problemas Con Señal",
    Texto:
      "He visto que hay un problema con el servicio asociado a la señal del módem que requiere asistencia técnica de forma presencial. Si estas de acuerdo voy a generar una visita técnica para que un especialista pueda revisar tu módem y te de una solución al problema.",
  },
  {
    id: 23,
    Titulo: "Generar Visita Problemas Con Modem",
    Texto:
      "He notado algunos problemas con el módem que me impiden darte soporte remoto por temas de configuración o compatibilidad. Por eso, es necesario que un técnico vaya a tu domicilio para revisar el módem y darte una solución al problema. Si estás de acuerdo, voy a generar una visita técnica para que un especialista pueda atenderte.",
  },
  {
    id: 24,
    Titulo: "Transferir a Linea de atencion",
    Texto:
      "Lamentablemente por este medio no podemos realizar estas solicitudes, pero para poder ayudarte, te pido que te comuniques a la línea gratuita nacional: 01 8000 341 818 o marcando desde tu línea claro *611, una vez allí marcas al área que deseas comunicarte y te ayudaran con tu solicitud sin problema.",
  },
];
