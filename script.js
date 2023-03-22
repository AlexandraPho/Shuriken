
// Récupération du bouton, l'img et la phrase
const bouton = document.getElementById('animate');
const img = document.querySelector('img');
const sentences = [
  'A l\'avant dans un avion qui va droit vers le clash',
  'Génération Z',
  'La confiance est morte',
  'Les moutons veulent juste un leader carismatique',
  'les jeux sont fait',
  'la grandeur d\'une France qu\'ils ont fantasmé',
  'Maman m\'a dis s\'il y a des pauvres, c\'est qu\'ils travaillent mal à l\'école',
  'Rappelle moi que ma force c\'est d\'être sensible',
  'regarde, marche, marche avec moi',
  'prend mon ignorance',
  'tout se transforme rien ne se perd',
];



// Définition de la fonction pour générer une phrase aléatoire
function genererPhrase() {
  // Faire tourner l'image
  img.classList.add('rotate');

  // Générer une phrase après quelques seconde (correspond à la durée de l'animation souhaitée)
  setTimeout(() => {
  // Retourne un élément aléatoire d'un tableau
  const index = Math.floor(Math.random() * sentences.length);
  const sentenceAleatoire = sentences[index];
  const sent = document.querySelector('#sentence');
  sent.textContent = sentenceAleatoire;

  // Arrêter la rotation
  img.classList.remove('rotate');
  }, 900);
  }

  // Ajout de l'écouteur d'événement de clic sur le bouton
  bouton.addEventListener('click', genererPhrase);




  // Au click bouton, l'img fait un tour complet
  // L'img s'arrête
  // Puis génère une phrase
  // Au second clic, l'img fait un tour complet .... et ainsi de suite
  