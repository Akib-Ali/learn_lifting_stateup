import { ChildComponent } from "./childComponent"

export const ParentComponent=()=>{


      const getdata = (userinfo)=>{

         console.log(`Received Data : ${userinfo.name}`)


      }
   

    return(

        <div>
        
            <ChildComponent getdata={getdata}/>
        
        </div>
    )
}