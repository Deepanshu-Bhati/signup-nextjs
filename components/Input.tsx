import { ChangeEvent, ChangeEventHandler } from "react";

export function Input({label,placeholder ,onclick}:{label:String,placeholder:string,onclick: ChangeEventHandler<HTMLInputElement> }){
    return <div className="w-full p-2 flex justify-center">
        <div className="w-1/2">

        <div className="text-2xl font-thinner ">
            <label htmlFor="">{label}</label>
        </div>
        <div className="p-1">
            <input className="w-full border shadow h-12 rounded p-2"  type="text" placeholder={placeholder} onChange={onclick} />
        </div>
        </div>

    </div>
}