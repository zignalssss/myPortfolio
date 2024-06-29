import { data } from "../../contents/about";
const About = () => {
    return (
        <div className="space-y-4" id="About-section">
            <div className="text-priAccent font-medium ">{data.title}</div>
            <div>{data.description}</div>
            <div className="text-priAccent font-medium ">Programming Languages</div>
        {/* <div className="bg-neutral-900 p-1 rounded-md">
            </div> */}
            <div className="flex w-8 h-8 space-x-2 ">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" /> 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
            <img className = "bg-gray-100 rounded-lg p-1"src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
            </div>
            <div className="text-priAccent font-medium ">Web Development</div>
            <div className="flex w-8 h-8 space-x-2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                <img className = "bg-black rounded-lg p-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
                <img className = "bg-gray-100 rounded-lg p-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" />
                <img className = "bg-gray-100 rounded-lg p-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
            </div>
            <div className="text-priAccent font-medium ">Database</div>
            <div className="flex w-8 h-8 space-x-2">
                <img className = "bg-gray-100 rounded-lg p-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
                <span className="font-semibold text-sm mt-1">MySQL</span>
                <img className = "bg-gray-100 rounded-lg p-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" />
                <span className="font-semibold text-sm mt-1">Prisma</span>
                <img className="bg-[#001d2a] rounded-lg p-1 border border-white/15" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
                <span className="font-semibold text-sm mt-1">MongoDBL</span>  
            </div>
        </div>

    )
}
export default About;