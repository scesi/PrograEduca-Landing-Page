// Datos del evento que pueden cambiar sin tocar el diseño.

/** Formularios de Google. Pega el enlace público del formulario (termina en /viewform);
 *  la página le agrega ?embedded=true para insertarlo. */
export const FORMS = {
  /** Inscripciones generales (asistentes): se inserta en la página. */
  inscripcion: 'https://docs.google.com/forms/d/e/1FAIpQLSfShA3-pwYzT5kON5NIZsjQr6STFGUBQmOAzd4p6C9Xd-CvcA/viewform',
  /** Call for Schools: se inserta en la página. */
  colegios: 'https://docs.google.com/forms/d/e/1FAIpQLSdaTgy2ZDhr0U7f8J7sqIHrRE_7TmvGN-wT7Ls3fQKXWC6gVQ/viewform',
  /** Call for Sponsors: se inserta en la página. */
  sponsors: 'https://docs.google.com/forms/d/e/1FAIpQLSfY_0ddwEFIHdqHSpN5_TFnOrodMoaRU3xsSVVoKgPw5nbehg/viewform',
  /** Call for Speakers: tiene subida de archivos (Google exige iniciar sesión),
   *  así que no se inserta: se abre en otra pestaña. */
  speakers: 'https://docs.google.com/forms/d/1rNzFY5zuiKt0vFyi1iDR5zMr-UyMvnGIFvWmI8LGeAQ/viewform',
  /** Call for Posters: igual que speakers, pide iniciar sesión; se abre en otra pestaña. */
  posters: 'https://docs.google.com/forms/d/18TsOPY_BW50OGfL41wgs3xdsKeZxhyhRPCX-cYDE2gg/viewform',
};

export const CONTACTO = {
  email: 'contacto@scesi.org',
  telefonos: ['+591 63484622', '+591 68496657'],
};

/** Ubicación del centro MEMI (UMSS): enlace de Google Maps y mapa insertado. */
export const LUGAR_MAPA = 'https://maps.app.goo.gl/rvYBhjbpNi8Mmnku8';
export const LUGAR_MAPA_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d950!2d-66.1469758!3d-17.393255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e373fece8d6291%3A0xd42e222329aae38c!2sMEMI-UMSS!5e0!3m2!1ses!2sbo';

/** Inicio del evento (hora de Bolivia, UTC-4) para la cuenta regresiva. */
export const INICIO_EVENTO = '2026-11-27T09:20:00-04:00';

/** Speakers confirmados. La foto va en public/assets/speakers/ (cuadrada, mínimo 600×600);
 *  mientras `foto` esté vacía, la tarjeta muestra las iniciales. No publicar emails ni teléfonos. */
export type Speaker = { nombres: string[]; corto?: string; org: string; rol: string; charla: string; resumen: string; foto?: string;
  /** Para charlas de varias personas: una foto por nombre, en el mismo orden. */ fotos?: string[] };
export const SPEAKERS: Speaker[] = [
  {
    nombres: ['Adrian Rafael Camara Reque'],
    foto: '/assets/speakers/adrian.webp',
    org: 'UMSS',
    rol: 'Estudiante de Ingeniería Informática, UMSS',
    charla: 'Dos cerebros piensan mejor que uno: métodos de estudio con Obsidian e IA',
    resumen: '¿Cómo convertir apuntes dispersos en una ruta de estudio? Un prototipo que combina Obsidian, IA y revisión humana para conectar conceptos, generar prácticas y mejorar los materiales mediante comentarios, conservando las fuentes originales.',
  },
  {
    nombres: ['Tania Fernanda Ugarte Guzmán'],
    org: 'KU Leuven',
    rol: 'Doctoranda en Ciencias de la Computación, KU Leuven',
    charla: 'Amplía tu futuro académico en el exterior: cómo postular a becas en Bélgica',
    resumen: '¿Quieres estudiar un máster o un doctorado en Bélgica? Paso a paso para encontrar una beca, preparar tus documentos y postular, a partir de su experiencia como estudiante de doctorado en la KU Leuven.',
  },
  {
    nombres: ['Mairon Henry Fernandez Orellana'],
    org: 'UMSS',
    rol: 'Estudiante de Ingeniería Informática, UMSS',
    charla: 'Sistema local de recuperación inteligente de información académica mediante bases de datos relacionales',
    resumen: 'Un sistema de consulta documental para cargar PDF académicos, organizar su contenido en una base de datos relacional y hacer preguntas en lenguaje natural, sin depender de Internet, servicios de pago ni modelos de IA pesados.',
  },
  {
    nombres: ['Juan Pablo Taya F.'],
    org: 'Docente de posgrado',
    rol: 'Docente de posgrado en innovación y emprendimiento',
    charla: 'UX en educación: gamificación',
    resumen: 'Design Thinking y su uso en UX/UI: conocer los segmentos, crear necesidades a partir de la investigación y los prototipos.',
  },
  {
    nombres: ['Sara Quispe Choque', 'Nicole Geraldine Rodas Cornejo', 'Mateo Alejandro Merino Vidal', 'Israel Gonzalo Orosco Zeballos'],
    corto: 'Sara, Nicole, Mateo e Israel',
    fotos: ['/assets/speakers/sara.webp', '/assets/speakers/nicole.webp', '/assets/speakers/mateo.webp', '/assets/speakers/israel.webp'],
    org: 'UMSS · KU Leuven',
    rol: 'Estudiantes de Ingeniería Informática, UMSS',
    charla: 'De la UMSS a Bélgica: nuestro proyecto de grado con KU Leuven',
    resumen: '¿Cómo se investiga cuando tus tutores están en Bélgica? Cuatro estudiantes de la UMSS comparten los retos, aprendizajes y la nueva forma de trabajar que descubrieron haciendo su proyecto de grado junto a KU Leuven.',
  },
  {
    nombres: ['Claudia Ureña Hinojosa'],
    org: 'Docente',
    rol: 'Docente con más de 15 años de experiencia',
    charla: 'El currículo oscuro y la línea macabra',
    resumen: 'Una reflexión crítica sobre los márgenes de la enseñanza en STEM y la delgada línea que cruzan los docentes entre la exigencia institucional, el mito del «buen profesor» y los temas que solo se susurran en los pasillos.',
  },
  {
    nombres: ['Irvin Cossio Chavalier'],
    org: 'GDG Cochabamba',
    rol: 'GDG Organizer Cochabamba, 9 años en desarrollo móvil y frontend',
    charla: 'Por qué SDD no debería aplicarse a proyectos personales',
    resumen: 'Cuándo usar SDD con spec-kit y cuándo conviene usar specs de forma más ágil e iterativa, sin invertir de más en tokens.',
  },
];

/** Comunidades tecnológicas a cargo de las actividades para colegios (14:30 a 16:00, en paralelo).
 *  El logo va en public/assets/comunidades/ (circular o cuadrado). */
export type Comunidad = { nombre: string; logo: string; enfoque: string; actividad: string; tema: string };
export const COMUNIDADES: Comunidad[] = [
  {
    nombre: 'CochaAI',
    logo: '/assets/comunidades/cochaai.webp',
    enfoque: 'Desarrollo y difusión de la IA, los datos y sus aplicaciones. Su encuentro nacional de IA y Datos refleja esta orientación.',
    actividad: 'Descubre la inteligencia artificial: ¡crea tu propio asistente inteligente!',
    tema: 'Inteligencia artificial',
  },
  {
    nombre: 'PyLadies Cochabamba',
    logo: '/assets/comunidades/pyladies.webp',
    enfoque: 'Promueve el aprendizaje continuo de Python con talleres, cursos y actividades de formación, e impulsa la participación de mujeres en tecnología.',
    actividad: '¡Mi primer programa! Introducción a la programación con Python',
    tema: 'Python',
  },
  {
    nombre: 'Hub Boliviano de Inteligencia Artificial',
    logo: '/assets/comunidades/hub-ia.webp',
    enfoque: 'Investigación, enseñanza y desarrollo de soluciones de IA: machine learning, redes neuronales, procesamiento de lenguaje natural y proyectos aplicados.',
    actividad: '¡Entrena una inteligencia artificial para reconocer imágenes!',
    tema: 'Machine learning',
  },
  {
    nombre: 'AWS Student Builder Group UMSS',
    logo: '/assets/comunidades/aws-sbg-umss.svg',
    enfoque: 'Comunidad estudiantil impulsada por Amazon Web Services que promueve la computación en la nube con talleres, proyectos prácticos y experiencias colaborativas.',
    actividad: '¡Lleva tus ideas a la nube! Descubre cloud computing con AWS',
    tema: 'Cloud computing',
  },
  {
    nombre: 'CochaBlock',
    logo: '/assets/comunidades/cochablock.webp',
    enfoque: 'Blockchain, NEAR Protocol y desarrollo Web3. Promueve el aprendizaje de contratos inteligentes y tecnologías descentralizadas.',
    actividad: 'El futuro del dinero digital: descubre cómo funciona blockchain',
    tema: 'Blockchain',
  },
];
