import accueil from "../../assets/img/projet/tweet/tweet-accueil.png"
import auth from "../../assets/img/projet/tweet/tweet-auth.png"
import follow from "../../assets/img/projet/tweet/tweet-follow.png"
import post from "../../assets/img/projet/tweet/tweet-post.png"
import profil from "../../assets/img/projet/tweet/tweet-profil.png"
import theme from "../../assets/img/projet/tweet/tweet-theme.png"
import Carre from "../model/Carre"
export const tweetImg = [
    new Carre(accueil,"top"),
    new Carre(auth,"bottom"),
    new Carre(follow,"back"),
    new Carre(post,"left"),
    new Carre(profil,"front"),
    new Carre(theme,"right")
]