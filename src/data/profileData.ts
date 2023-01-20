export interface DataInterface {
  id: number;
  name: string;
  description: string;
  lastSeen: string;
  likes: number;
  reply: number;
  disease: string;
  age: number;
}

export const profile = [
  {
    id: 1,
    name: 'Celine Faure',
    description:
      'One-liner description with a maximum Coucou les filles, je suis atteinte d’endometriose avec règles hemoragiques. Ma gynéco vient de me prescrire Dimetrum mais j’ai vu que cela pouvait accentuer les saignements...Si certaines d’entres vous l’ont prise je veux  bien vos retours. ',
    lastSeen: '3 min ago.',
    likes: 78,
    reply: 142,
    disease: 'Endométriose',
    age: 27,
  },
  {
    id: 2,
    name: 'Elodie Martinez',
    description:
      'Bonjour après 3 ponctions sans transfert, mon docteur ne veut plus me suivre car pour elle jai une mauvaise qualitée ovarienne jai 41 amh a 1.40 est ce normal ?',
    lastSeen: '5 min ago.',
    likes: 45,
    reply: 137,
    disease: 'FIV',
    age: 25,
  },
  {
    id: 3,
    name: 'Marry Kane',
    description:
      'Bonjour après 3 ponctions sans transfert, mon docteur ne veut plus me suivre car pour elle jai une mauvaise qualitée ovarienne jai 41 amh a 1.40 est ce normal ?',
    lastSeen: '2 min ago.',
    likes: 45,
    reply: 137,
    disease: 'FIV',
    age: 34,
  },
];
