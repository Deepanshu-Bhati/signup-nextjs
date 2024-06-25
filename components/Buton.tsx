import { useRouter } from "next/navigation"
import { solve } from "@/app/backend"
export default  function Btn({data}:any){
    const Route=useRouter()
    const getuser=async ()=>{
        try{

            const name =await solve(data)
            Route.push('/signup')
        }catch(err){
            alert("user is already exist with this username and password")
        }
    }
    return <div className="text-center m-3">

    <button  className="text-xl bg-green-600 p-2 rounded-xl " onClick={getuser}>submit</button>
</div>
}