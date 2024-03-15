import Services from "../components/Services";
import { GiLips } from "react-icons/gi";
import { GiLoveInjection } from "react-icons/gi";

export default function About() {
    return (
      <div className="min-h-screen bg-rosequartz "> 
       <h1 className="p-10 grid justify-items-center text-5xl font-serif">
        My Services
      </h1>
      <div className=" place-content-center grid col-start-2 col-span-4 gap-y-10 ">
      <Services icon={<GiLips/>}
      service="Lip Filler"
      description="For wherever you need a little extra oopmh."/>
      <Services icon={<GiLoveInjection/>}
      service="Botox"
      description="Wrinkles and fine lines get the boot.."/>
      </div>
     
  </div>
    );
  }
  