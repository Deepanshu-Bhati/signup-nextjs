"use client"
import { Input } from "@/components/Input";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import Image from "next/image";
import { solve } from "./backend";
import {useRouter} from'next/navigation'
import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";
import Btn from "@/components/Buton";

export default  function Home() {
  const Route=useRouter()
  const [data,setdata]=useState({
    username:"",
    email:"",
    password:"",
    firstname:"",
    lastname:""
  })

  return (<div className="flex justify-center items-center w-screen  h-screen">
    <div  className=" w-2/4 max-h-screen-2xl border   ">
      <div className=" ">      
      <h1 className="text-2xl font-extrabold  text-center p-3 "> 
        Signup
      </h1>
      <div>
        <Input label={"Username"} placeholder={"enter your username"} onclick={(e:ChangeEvent<HTMLInputElement>)=>{
        setdata({...data,
          username:e.target.value
        })
      }}/>
      </div>
      <div><Input label={"Password"} placeholder={"enter you password"} onclick={(e:ChangeEvent<HTMLInputElement>)=>{
        setdata({...data,
          password:e.target.value
        })
      }} /> </div>
      <div><Input label={"Email"} placeholder={"enter you email"} onclick={(e :ChangeEvent<HTMLInputElement>)=>{
        setdata({...data,
          email:e.target.value
        })
      }}/> </div>
      <div><Input label={"Firstname"} placeholder={"enter you firstname"} onclick={(e:ChangeEvent<HTMLInputElement>)=>{
        setdata({...data,
          firstname:e.target.value
        })
      }}/> </div>
      <div><Input label={"Lastname"} placeholder={"enter you Lastname"} onclick={(e:ChangeEvent<HTMLInputElement>)=>{
        setdata({...data,
          lastname:e.target.value
        })
      }} /> </div>
      <Btn data={data}/>
</div>
    </div>
  </div>
  );
}
