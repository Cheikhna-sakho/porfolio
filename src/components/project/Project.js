import projetData from "../../data/projet";
import ProjectCard from "./ProjectCard";
const Projet = () => {

    return (
        <section className='center'>
            <div className="sec-title">
                <h2>Mes projet</h2>
            </div>
            <div className='sec-projet' id="projet">
                <div className="projet-content">
                    {projetData.map((projet, i) => (
                        <ProjectCard key={i} projet={projet} />
                    ))}
                </div>

            </div>
        </section>
    )
}
export default Projet;