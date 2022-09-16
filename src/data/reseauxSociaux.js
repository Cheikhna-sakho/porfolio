import { BsLinkedin,BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiReplit } from "react-icons/si";
const socials = [
    {
        title: "LinkedIn",
        icon: <BsLinkedin/>,
        mail: false,
        type: "web",

        link: "https://www.linkedin.com/in/cheikhna-sakho/"
    },
    {
        title: "Github",
        mail: false,
        icon: <BsGithub/>,
        link:"https://github.com/Cheikhna-sakho"
    },
    {
        title: "E-mail",
        icon: <MdEmail/>,
        mail: true,
        link:"cheikhna.sakho@epitech.eu"
    },
    {
        title: "E-mail",
        icon: <SiReplit/>,
        mail: false,
        link:"https://replit.com/@cheikhnabsakho"
    }
]
export default socials;