import accueil from "../assets/img/projet/tweet/tweet-accueil.png";
import IRC from  "../assets/img/projet/IRC/My_IIRC_chat.png"
import Snap from  "../assets/img/projet/snap/My_Snap_acceuil.png"
import Project from "../model/Projet";
import spotify from "../assets/img/projet/spotify/spotify.png"

const projetData = [
    new Project("My_tweet",accueil,"My_twetter est un clone de twetter projet realiser en group de 4","PHP/Architecture MVC/Mysql","deskTop","https://github.com/EpitechWebAcademiePromo2023/W-WEB-090-PAR-1-1-academie-majid.eltayeb"),
    new Project("Spotify",spotify,"Spotify un clone de spotify realiser en 2 jour","React/Nodejs/Mysql","deskTop","https://github.com/EpitechWebAcademiePromo2023/W-WEB-090-PAR-1-1-spotify-johan.oyo"),
    new Project("IRC",IRC,
    "IRC est un projet de chat en temps reele un pseudo discord avec plusieurs commande que l'utilisateur peut passer en paramettre,de creer des chanel ou en rejoindre",
    "React/Nodejs/Socket.IO","deskTop","https://github.com/EpitechWebAcademiePromo2023/W-JSC-502-PAR-2-2-irc-cheikhna.sakho"),
    new Project("My_Snapchat",Snap,
    "My_Snapchat un clone de Snapchat realiser en group de 2 personnes",
    "React Native/API","mobil"
    ,"https://github.com/EpitechWebAcademiePromo2023/W-JSC-502-PAR-2-2-snapchat-mamady.konte"),
    // new Project("My_meetic",accueil,"My_meetic est  clone de meetic, un site de rencontre","PHP/Architecture MVC/Mysql","","deskTop","https://github.com/EpitechWebAcademiePromo2023/W-PHP-501-PAR-1-1-mymeetic-cheikhna.sakho"),
    
]
export default projetData;