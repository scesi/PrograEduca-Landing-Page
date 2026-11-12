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

export const LUGAR_MAPA =
  'https://www.openstreetmap.org/search?query=Facultad%20de%20Tecnolog%C3%ADa%20UMSS%20Cochabamba';

/** Inicio del evento (hora de Bolivia, UTC-4) para la cuenta regresiva. */
export const INICIO_EVENTO = '2026-11-27T09:30:00-04:00';
