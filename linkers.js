/* INSTRUCTIONS

Bienvenue, 

Ici tu pénètres dans le gestionnaire de liens du tableau de bord. Pas de panique, tu n'as pas besoin de savoir coder !
Il te suffit de remplacer le nom et l'URL entre les guillemets ( ` ` ou ' '), et ne rien modifier sur le reste du code. 
Je t'ai en plus ajouté des commentaires pour te situer dans le document. Il sont symbolisés par les doubles slash --> //

Ex pour modifier un lien : { name: ` J'insère un nom, ici `, url: 'et un URL valide du type https://ikea.fr/, là ' },

*/

let mainList = [

  //Liens de la barre de navigation :

  { name: `SEKUND`, url: '#' },
  { name: `i Recover`, url: '#' },
  { name: `CASY`, url: '#' },
  { name: `SPARTACUS`, url: '#'},
  { name: `SÄLJA`, url: '#' },

  //Liens des images mails etc :

  { name: `<img src="img/teams.svg" alt="teams">`, url: 'https://teams.microsoft.com/'},
  { name: `<img src="img/outlook.svg" alt="outlook">`, url: 'https://outlook.office.com/mail/inbox/'},
  { name: `<img src="img/yammer.svg" alt="yammer">`, url: 'https://www.yammer.com/'},
  { name: `<img src="img/it.svg" alt="it">`, url: '#'},

  //Liens section Outils As-is / Recovery :

  { name: `TV Tool`, url: '#' },
  { name: `Com' Vente`, url: 'https://iweof.sharepoint.com/' },
  { name: `Guide zone de vente`, url: 'https://iweof.sharepoint.com/' },
  { name: `Sharepoint Recovery`, url: 'https://iweof.sharepoint.com/' },
  { name: `Procédures`, url: 'https://iweof.sharepoint.com/' },
  { name: `Enlèvement Eco-mobilier`, url: 'https://iweof.sharepoint.com/' },
  { name: `Ancien tableau`, url: 'https://iweof.sharepoint.com/' },
  { name: `Google`, url: 'https://www.google.fr/' },
  
  { name: `MHS 434`, url: '#' },
  { name: `Transit`, url: 'https://iweof.sharepoint.com/' },
  { name: `Archives justifs`, url: 'https://iweof.sharepoint.com/' },
  { name: `PDOC`, url: '#' },
  { name: `PIMO`, url: '#' },
  { name: `Page vierge`, url: 'https://iweof.sharepoint.com/' },
  { name: `Signature RDJ`, url: 'https://iweof.sharepoint.com/' },
  
  //Services de l'espace seconde vie

  { name: `Découpe`, url: 'https://iweof.sharepoint.com/' },
  { name: `Mise de coté 24h`, url: 'https://iweof.sharepoint.com/' },
  { name: `Livraison`, url: 'https://iweof.sharepoint.com/teams/' },
  { name: `Suivi Livraison`, url: 'https://iweof.sharepoint.com/' },
  { name: `As-is online`, url: '#' },
  { name: `Voir la Boutique`, url: 'https://www.ikea.com/fr/fr/customer-service/services/buy-back-resell/achat-produits-occasion-pub640f9fb0#/?store=434' },
  { name: `Boite mail seconde vie`, url: 'https://outlook.office.com/mail/' },
  { name: `Simulateur de reprise`, url: 'https://www.ikea.com/fr/fr/customer-service/services/buy-back-resell/vente-meuble-occasion-pub92e7c9c0' },

  //Liens Commerce magasin

  { name: `Ikea.fr`, url: 'https://www.ikea.com/fr/fr/' },
  { name: `PIA Facts`, url: '#' },
  { name: `Task Rabbit`, url: 'https://www.taskrabbit.fr/ikea/devis/' },
  { name: `Sell-it`, url: '#' },
  { name: `Sharepoint All 434`, url: 'hhttps://iweof.sharepoint.com/' },
  { name: `Commande graphiste`, url: 'https://iweof.sharepoint.com/' },
  { name: `TT 310 Réussissons Ensemble`, url: 'https://iweof.sharepoint.com/' },
  { name: `Tableau de représentativité`, url: 'https://iweof.sharepoint.com/' },

  //Liens Chiffres d'affaires et conscience des coûts

  { name: `CA Recovery`, url: '#' },
  { name: `CA As-is online`, url: '#' },
  { name: `CA magasin`, url: '#' },
  { name: `Power BI TT 325`, url: '#' },
  { name: `i Recover FR`, url: '#' },
  { name: `Dashboard Spartacus`, url: '#' },
  { name: `FMS reporting`, url: '#' },
  { name: `Dossier Asso`, url: '#' },
  { name: `Carnet d'adresse Asso`, url: 'https://iweof.sharepoint.com/' },

  
  //Liens Qualité et sécurité

  { name: `Reportlist`, url: 'https://iweof.sharepoint.com/' },
  { name: `Photos CASY 3x/j`, url: 'https://iweof.sharepoint.com/' },
  { name: `Sharepoint qualité`, url: 'https://iweof.sharepoint.com/' },
  { name: `Photos SQR/QSR`, url: 'https://iweof.sharepoint.com/' },
  { name: `Packaging feedback`, url: '#' },
  { name: `Fixa`, url: '#' },
  { name: `Reverso`, url: 'https://www.reverso.net/text_translation.aspx?lang=FR' },
  { name: `Sec-check`, url: 'https://iweof.sharepoint.com/' },
  { name: `Document gerbage`, url: 'https://iweof.sharepoint.com/' },
  { name: `Com SS par mail`, url: 'https://iweof.sharepoint.com/' },
  { name: `Checklist SS`, url: 'https://iweof.sharepoint.com/' },
  { name: `Checklist QSR`, url: 'https://iweof.sharepoint.com/' },
  { name: `QSC Contact `, url: 'https://iweof.sharepoint.com/' },
  { name: `Boite mail Qualité`, url: 'https://outlook.office.com/mail/' },
  { name: `Archive Sec-check`, url: 'https://iweof.sharepoint.com/' },
  
  //Liens RH

  { name: `KLOCKA`, url: '#' },
  { name: `DELTA`, url: 'https://iweof.sharepoint.com/' },
  { name: `Planning`, url: 'https://iweof.sharepoint.com/' },
  { name: `CP`, url: 'https://iweof.sharepoint.com/' },
  { name: `Accord modif`, url: 'https://iweof.sharepoint.com/' },
  { name: `Talent for all`, url: '#' },
  { name: `P&C`, url: '#' },
  { name: `My learning`, url: '#' },
  { name: `LinkedIn Learning`, url: 'https://www.linkedin.com/learning/' },

];

let main = document.querySelectorAll('a');

//Pour chaque liens de mon document, remplacer le nom + url par celui de linkList au bon index 

main.forEach((element, index)=> {
  if (index <mainList.length){
    element.innerHTML = mainList[index].name;
    element.href = mainList[index].url; 
  }
})

function createLink(name, url) {
  this.name = name;
  this.url = url;
}







 
 
 

