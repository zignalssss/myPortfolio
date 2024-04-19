import { data } from "../../contents/about";
const About = () =>{
    return(
        <div>
            <div className="text-priAccent font-medium">{data.title}</div>
            <div>{data.description}</div>
        </div>
        
    )
}
export default About;