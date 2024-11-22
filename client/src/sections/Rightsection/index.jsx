import About from "../About";
import Experience from "../Experience";
import Competition from "../Competition";
const Rightsection = () => {
    return (
        <div className="grid gap-y-36 px-5">
            <About/>
            <Experience/>
            <Competition/>
        </div>
    )
}
export default Rightsection;