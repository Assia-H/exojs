let nomEquipement = "Switch Cisco 2960";
let nombrePorts = 24;
let estActif = true;
let adressIP = "192.168.1.254";
let debit = 1000.5; // en Mbps

console.log("Nom de l'équipement : " + nomEquipement)
console.log("Nombre de port : " + nombrePorts)

let nomServeur = "Apache HTTP Server";
let version = 2.4;
let portHTTP = 80;
let portHTTPS = 443;
let sslActif = true;
let memoire = 8.5;

console.log("Nom du sevreur : " + nomServeur)
console.log("La version du serveur : " + version)
console.log("Nombre de ports HTTP : " + portHTTP)
console.log("Nobre de ports HTTPS: " + portHTTPS)
console.log("L'activité du ssl : " + sslActif)
console.log("La mémoire : " + memoire)

let motDePasse = "Cyber2026!"
let longueur = motDePasse.length

if (longueur < 6) {
    console.log("Sécurité FAIBLE, car la longueur est de : " + longueur);
} else if (longueur < 10) {
    console.log("Sécurité : MOYENNE");
} else {
    console.log("Sécurité : FORTE");
}

if (longueur >= 12) {
    console.log("TROP FORT");
}
console.log(longueur)


let vitesse = 2000

if (vitesse < 10) {
    console.log("Connexion LENTE - Vérifier les câbles")
} else if (vitesse < 100) {
    console.log("Connexion CORRECTE - debit standard")
} else if (vitesse <1000) {
    console.log("Connexion RAPIDE - Bon débit")
} else if (vitesse >= 1000) {
    console.log("Connexion TRES RAPIDE - Fibre optique")
}

if (vitesse === 0) {
    console.log("ERREUR : aucune connexion détectée")
}


let ports = [20, 43, 80, 443, 6539]

for (let i = 0; i < ports.length; i++) {
    console.log("Port disponible : " + ports[i]);
}


let serveurs = ["8.8.8.8", "1.1.1.1", "208.67.222.222", "192.168.1.1", "10.0.0.1"];
let totalServer = 0

for (let i = 0; i < serveurs.length; i++) {
    console.log("Ping vers : " + serveurs[i]);
    console.log("Temps de réponse : " + i*15 + "ms");
    totalServer++
}
console.log("Nombre de serveurs testés :" + totalServer)

