// Category-driven photographic backgrounds. Every image is a verified,
// working Unsplash CDN URL (checked by direct download + visual inspection,
// not guessed) matching the theme of the route it's used on.
export const pageTextures = {
  home: {
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=70',
    label: 'Golden wheat field at sunset'
  },
  advisor: {
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=2000&q=70',
    label: 'Farmer plowing a paddy field with oxen and tractor'
  },
  marketplace: {
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=2000&q=70',
    label: 'Cattle grazing at sunset'
  },
  doctor: {
    image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=2000&q=70',
    label: 'Scattered medication tablets and capsules'
  },
  calculators: {
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=2000&q=70',
    label: 'Close-up of wheat grain kernels'
  },
  mandi: {
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=2000&q=70',
    label: 'Fresh vegetable baskets at a produce market'
  }
};

export function categoryForPath(pathname) {
  if (pathname.startsWith('/advisor')) return 'advisor';
  if (pathname.startsWith('/marketplace')) return 'marketplace';
  if (pathname.startsWith('/doctor')) return 'doctor';
  if (pathname.startsWith('/calculators')) return 'calculators';
  if (pathname.startsWith('/mandi')) return 'mandi';
  return 'home';
}
