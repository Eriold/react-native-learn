/**
 * api/fakeMetacritic.js
 *
 * Módulo de datos falsos (mock) para React Native.
 * Proporciona las funciones getLatestGames() y getGameDetails(slug)
 * con datos estáticos simulando la respuesta original de Metacritic.
 *
 * Cada “juego” tiene:
 *   - description: breve sinopsis
 *   - releaseDate: fecha de lanzamiento (string)
 *   - score: número (metascore)
 *   - slug: identificador único (string)
 *   - title: título del juego (string)
 *   - image: URL a una imagen de tamaño uniforme (300×400) usando picsum.photos
 *
 * getLatestGames() devuelve un array de 6 juegos de ejemplo.
 * getGameDetails(slug) busca el juego por slug y devuelve un objeto con:
 *   - img: misma URL que “image” de la lista
 *   - title, slug, description, score
 *   - reviews: array de reseñas falsas
 */

///////////////////////////////////////////////
// 1. Array de juegos falsos (fake data)
///////////////////////////////////////////////

const FAKE_GAMES = [
  {
    description:
      "En 'Phantom Horizon', te adentras en un mundo postapocalíptico mientras exploras ciudades abandonadas y descifras antiguos misterios.",
    releaseDate: "2021-11-15",
    score: 92,
    slug: "phantom-horizon",
    title: "Phantom Horizon",
    // Usamos picsum.photos para imágenes 300×400:
    image: "https://picsum.photos/id/237/300/400",
  },
  {
    description:
      "Sumérgete en 'Cybernaut: Dawn' donde la inteligencia artificial gobierna las megaciudades y debes sobrevivir a redes de hackers sin piedad.",
    releaseDate: "2022-06-02",
    score: 88,
    slug: "cybernaut-dawn",
    title: "Cybernaut: Dawn",
    image: "https://picsum.photos/id/238/300/400",
  },
  {
    description:
      "Vive la fantasía de 'Dragonfire Saga', un RPG épico donde dominas dragones y viajas a reinos en guerra por salvar tu aldea ancestral.",
    releaseDate: "2020-09-10",
    score: 85,
    slug: "dragonfire-saga",
    title: "Dragonfire Saga",
    image: "https://picsum.photos/id/239/300/400",
  },
  {
    description:
      "Conviértete en piloto de combate en 'Stellar Vanguard', un shooter espacial frenético lleno de naves alienígenas y batallas estelares.",
    releaseDate: "2023-03-28",
    score: 91,
    slug: "stellar-vanguard",
    title: "Stellar Vanguard",
    image: "https://picsum.photos/id/240/300/400",
  },
  {
    description:
      "Descubre 'Mystic Woods', un puzzle-platformer donde la magia y la naturaleza se unen: resuelve acertijos y desbloquea secretos del bosque.",
    releaseDate: "2019-12-05",
    score: 80,
    slug: "mystic-woods",
    title: "Mystic Woods",
    image: "https://picsum.photos/id/241/300/400",
  },
  {
    description:
      "En 'Neon Runner', corre a toda velocidad por las calles iluminadas de neón, esquivando obstáculos y batiendo récords en un mundo cyberpunk.",
    releaseDate: "2021-07-22",
    score: 87,
    slug: "neon-runner",
    title: "Neon Runner",
    image: "https://picsum.photos/id/242/300/400",
  },
];

///////////////////////////////////////////
// 2. Pool de reseñas falsas (fake reviews)
///////////////////////////////////////////

const FAKE_REVIEWS_POOL = [
  {
    quote:
      "Una experiencia inolvidable: gráficos alucinantes y jugabilidad impecable.",
    score: 94,
    date: "Dec 10, 2021",
    publicationName: "GameRadar",
    author: "Alex Turner",
  },
  {
    quote:
      "El combate es divertido, pero la historia peca de predecible en ciertos momentos.",
    score: 85,
    date: "Jan 5, 2022",
    publicationName: "IGN",
    author: "Harper Lee",
  },
  {
    quote:
      "La banda sonora se roba el espectáculo: cada nivel es un deleite auditivo.",
    score: 90,
    date: "Feb 20, 2022",
    publicationName: "Kotaku",
    author: "Jordan Smith",
  },
  {
    quote:
      "Algunas misiones secundarias se sienten repetitivas, pero el mundo abierto es impresionante.",
    score: 88,
    date: "Mar 15, 2022",
    publicationName: "Eurogamer",
    author: "Morgan Blake",
  },
  {
    quote:
      "Una dirección artística espectacular y un lore que te atrapa de principio a fin.",
    score: 92,
    date: "Apr 2, 2022",
    publicationName: "Polygon",
    author: "Casey Nguyen",
  },
  {
    quote:
      "Mejoraría la IA enemiga, a veces actúan de forma errática en combate.",
    score: 79,
    date: "May 30, 2022",
    publicationName: "GameSpot",
    author: "Samira Khan",
  },
  {
    quote:
      "El sistema de progresión es adictivo y el modo multijugador añade muchísimo valor.",
    score: 87,
    date: "Jun 12, 2022",
    publicationName: "Rock, Paper, Shotgun",
    author: "Elliot Raymond",
  },
  {
    quote:
      "La dificultad es algo desequilibrada, pero sale a flote gracias a su narrativa.",
    score: 81,
    date: "Jul 8, 2022",
    publicationName: "Destructoid",
    author: "Riley Morgan",
  },
];

///////////////////////////////////////////
// 3. Función auxiliar para obtener reseñas
///////////////////////////////////////////

/**
 * Devuelve un array de N reseñas aleatorias (sin repetir) tomadas de FAKE_REVIEWS_POOL.
 * @param {number} count - Cantidad de reseñas que queremos para un juego.
 * @returns {Array<{quote:string,score:number,date:string,publicationName:string,author:string}>}
 */
function getRandomReviews(count) {
  const pool = [...FAKE_REVIEWS_POOL];
  const reviews = [];

  // Seleccionar “count” reseñas distintas de forma aleatoria
  for (let i = 0; i < count && pool.length > 0; i++) {
    const randomIndex = Math.floor(Math.random() * pool.length);
    reviews.push(pool.splice(randomIndex, 1)[0]);
  }
  return reviews;
}

////////////////////////////////////////////////////////////
// 4. getLatestGames(): devuelve la lista simulada de juegos
////////////////////////////////////////////////////////////

export async function getLatestGames() {
  // Simulamos un pequeño retardo para asemejar a un fetch real (opcionales 200ms)
  await new Promise((resolve) => setTimeout(resolve, 200));

  // Devolvemos el array completo de FAKE_GAMES
  return FAKE_GAMES.map((game) => ({
    description: game.description,
    releaseDate: game.releaseDate,
    score: game.score,
    slug: game.slug,
    title: game.title,
    image: game.image,
  }));
}

////////////////////////////////////////////////////////////
// 5. getGameDetails(slug): devuelve datos detallados simulados
////////////////////////////////////////////////////////////

export async function getGameDetails(slug) {
  // Simulamos un ligero retardo (opcionales 200ms)
  await new Promise((resolve) => setTimeout(resolve, 200));

  // Buscamos el juego en FAKE_GAMES que coincida con el slug:
  const game = FAKE_GAMES.find((g) => g.slug === slug);

  // Si no existe, lanzamos un error (como haría la API real)
  if (!game) {
    throw new Error(`Juego con slug "${slug}" no encontrado en datos falsos.`);
  }

  // Generamos un array de 3 a 5 reseñas aleatorias
  const reviews = getRandomReviews(3 + Math.floor(Math.random() * 3)); // 3, 4 o 5 reseñas

  // Devolvemos un objeto con la misma estructura que el original:
  return {
    img: game.image, // Usamos la misma URL de 300×400
    title: game.title,
    slug: game.slug,
    description: game.description,
    score: game.score,
    reviews: reviews,
  };
}
