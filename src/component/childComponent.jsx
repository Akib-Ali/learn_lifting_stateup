export const ChildComponent=(props)=>{


    const userinfo={
    
         name:"Akib Ali",
         age : "24 year",
         profession :"Software Engineer"


                   }



    return(

        <div>
          <button style={{color:"grey", backgroundColor:"black"}} onClick={()=> props.getdata(userinfo)}>Child Component</button>
        </div>
    )
}