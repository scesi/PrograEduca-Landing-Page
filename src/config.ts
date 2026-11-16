// Datos del evento que pueden cambiar sin tocar el diseño.

/** Formulario de Google que se inserta en la sección de inscripción.
 *  Por ahora es el de postulación de speakers. Para cambiarlo, pega el enlace del formulario
 *  (viewform); la página le agrega ?embedded=true. */
export const INSCRIPCION_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfHJq9y9j2kE1cWlKjG4_ymcgVxGBLH0gE9oMoKZs_32D4U4w/viewform';

/** Formulario de postulación de speakers (el del QR del PDF). */
export const SPEAKERS_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfHJq9y9j2kE1cWlKjG4_ymcgVxGBLH0gE9oMoKZs_32D4U4w/viewform';

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
