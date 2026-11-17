// Datos del evento que pueden cambiar sin tocar el diseño.

/** Formularios de Google. Pega el enlace público del formulario (termina en /viewform);
 *  la página le agrega ?embedded=true para insertarlo. */
export const FORMS = {
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
export const INICIO_EVENTO = '2026-11-27T09:30:00-04:00';

/** Speakers confirmados. Agrega uno por objeto; la foto va en public/assets/speakers/
 *  (cuadrada, mínimo 600×600). Mientras la lista esté vacía, la página muestra un aviso. */
export const SPEAKERS: { nombre: string; charla: string; foto: string }[] = [
  // { nombre: 'Nombre Apellido', charla: 'Título de la charla', foto: '/assets/speakers/nombre.jpg' },
];
