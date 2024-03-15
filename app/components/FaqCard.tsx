
import { useState } from "react";

export default function Faqs({question, answer}:{question:any, answer:any}) {

    return(
      <div className="bg-coral max-w-md p-6 border border-dustyrose  rounded-lg shadow ">
          <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{question}</h5>
          </a>
          <p className="mb-3 font-normal text-cream">{answer}</p>
      </div>
  )
};

