import { data } from "../../contents/about";
const About = () =>{
    return(
        <div className="space-y-4" id = "About-section">
            <div className="text-priAccent font-medium ">{data.title}</div>
            <div>{data.description}</div>
            <div className="text-priAccent font-medium ">Skills</div>
        </div>
        
    )
}
export default About;