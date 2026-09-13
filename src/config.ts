// ⚙️  À REMPLIR AVEC LES VRAIES COORDONNÉES DU MAGASIN (un seul endroit à modifier)
export const SHOP = {
  // Numéro WhatsApp au format international SANS le "+" ni le 0 initial.
  // Ex. pour 06 12 34 56 78 -> '33612345678'. (placeholder pour la démo)
  whatsapp: '33600000000',
  address: '25 rue Anatole France, 93120 La Courneuve',
  facebook: 'https://www.facebook.com/people/Euro-Bengale-Alimentation/',
};

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('Euro Bengale ' + SHOP.address);

export function whatsappLink(text: string) {
  return 'https://wa.me/' + SHOP.whatsapp + '?text=' + encodeURIComponent(text);
}
