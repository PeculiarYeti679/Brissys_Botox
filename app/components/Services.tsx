
export default function Services({icon, service, description}:{icon:any, service:string, description:string}) {

    return(
        <div className="bg-coral max-w-md p-6 border border-dustyrose  rounded-lg shadow ">
            <svg className="w-7 h-7"viewBox="0 0 20 20" >
                {icon}
            </svg>
            <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{service}</h5>
            </a>
            <p className="mb-3 font-normal text-cream">{description}</p>
        </div>
    )
}