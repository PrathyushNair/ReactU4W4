

export const Todoreducer=(state={todos:[]},action)=>{
   
    switch(action.type){
        case "fetch":{
            console.log("in fetch",state.todos)
            console.log("in fetch",action.payload)
            state.todos=[...action.payload]
            return{...state,todos:[...state.todos]}
        }
        case "add":{
            console.log("inside add",action.payload)
            fetch(`http://localhost:8000/tasks`)
            .then((resp)=>(resp.json()))
            .then((resp)=>{
                console.log("resp",resp)
                    let setTrig=action.func
                    let trig=action.trig
                    setTrig(!trig)
                })
        }
       
    }
    return{...state}
}