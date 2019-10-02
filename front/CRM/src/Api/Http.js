export const list = page =>{
    return fetch(`http://45.132.18.71/all/worker/list/?page=${page}`,{
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    })
.then(response =>{
    return response.json()
})
.catch(error =>{
    console.log(error)
})
}
export const DeleteUser = (userId,token) =>{
    return fetch(`http://45.132.18.71/delete/worker/${userId}`,{
        method: "DELETE",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    })
.then(response =>{
    return response.json()
})
.catch(error =>{
    console.log(error)
})
}
export const NewPeopel = user =>{
    return fetch(`http://45.132.18.71/new/worker/`, {
       method: "POST",
       headers: {
           Accept: "application/json", "Content-Type": "application/json"
       },
       body: JSON.stringify(user)
   })
   .then(responce =>{
       return responce.json()
   })
   .catch(err =>console.log(err))
}

export const NewTodo = (todo,user) =>{
    return fetch(`http://45.132.18.71/new/todo/awesome/${user._id}`, {
        method: "POST",
        headers: {
            Accept: "application/json", "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
        
    })
    .then(responce =>{
        return responce.json()
    })
    .catch(err =>console.log(err))

//     for (let tag of tags) {
//         fetch(`http://localhost:8080/new/todo/awesome/${tag._id}`, {
//             method: "POST",
//             headers: {
//             Accept: "application/json", "Content-Type": "application/json"
//         },
//         body: JSON.stringify(todo)
//    })
//    .catch(err =>console.log(err))
//    }
    
}
export const read = (userId,token) =>{
    console.log(userId, token)
    return fetch(`http://45.132.18.71/worker/get/${userId}`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
.then(response =>{
    return response.json()
})
.catch(err =>{
    console.log(err)
})
}
export const update = (userId,token,user ) =>{
    console.log(userId, token, user)
    return fetch(`http://45.132.18.71/edit/worker/${userId}`,{
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: user
    })
.then(response =>{
    return response.json()
})
.catch(err =>{
    console.log(err)
})
}
export const updateUser = (user, next) =>{
    console.log(user)
    if(typeof window !== "undefined"){
        if(localStorage.getItem("jwt")){
            let auth = JSON.parse(localStorage.getItem("jwt"))
            auth.user = user
            localStorage.setItem("jwt", JSON.stringify(auth))
            next()
            return console.log("NNO      ERRORs")
        }
        return console.log("ERRORs")
    }
}
export const readMyTodo = (userId,token) =>{
        return fetch(`http://45.132.18.71/my/todo/soso/${userId}`,{
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        })
    .then(response =>{
        return response.json()
    })
    .catch(error =>{
        console.log(error)
    })
}

export const soloJob = (todoId,token) =>{
    console.log(todoId, token)
    return fetch(`http://45.132.18.71/todo/${todoId}`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
        })
.then(response =>{
    return response.json()
})
.catch(err =>{
    console.log(err)
})
}
export const readComentList = (todoId,token) =>{
    
    return fetch(`http://45.132.18.71/get/todo/coments/`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body:JSON.stringify({todoId})
    })
.then(response =>{

    return response.json()
})
.catch(error =>{
    console.log(error)
})
}

export const NewComent = (comment,token) =>{

    return fetch(`http://45.132.18.71/comment/todo/`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body:comment
    })
.then(response =>{

    return response.json()
})
.catch(error =>{
    console.log(error)
})
}

export const DeleteComment = (comment) =>{
    return fetch(`http://45.132.18.71/delete/comment/${comment}`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        
    })
.then(response =>{

    return response.json()
})
.catch(error =>{
    console.log(error)
})
}

export const NewNews = (payload) =>{
    return fetch(`http://45.132.18.71/new/news`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body:JSON.stringify(payload)
        
    })
.then(response =>{

    return response.json()
})
.catch(error =>{
    console.log(error)
})
}

export const listNews = (id) =>{
    console.log(JSON.stringify({id}))
    return fetch(`http://45.132.18.71/worker/news`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body:JSON.stringify({id})
        
    })
.then(response =>{

    return response.json()
})
.catch(error =>{
    console.log(error)
})
}
export const SetStatusJob = (status,todoId) =>{
    
    console.log(JSON.stringify({status:status}))
    console.log(todoId)
    return fetch(`http://45.132.18.71/todo/change/${todoId}`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body:JSON.stringify({status:status})
    })
.then(response =>{

    return response.json()
})
.catch(error =>{
    console.log(error)
})
}
export const TodayWorkHTTP = (userId) =>{
    console.log(userId)
    return fetch(`http://45.132.18.71/today/todo/${userId}`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
        })
.then(response =>{
    return response.json()
})
.catch(err =>{
    console.log(err)
})
}

export const TodoChangeExperienseAtHTTP = (expireAt,todoId) =>{
    console.log(JSON.stringify({expireAt:expireAt}))
    return fetch(`http://45.132.18.71/todo/change/${todoId}`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({expireAt:expireAt})
        })
.then(response =>{
    return response.json()
})
.catch(err =>{
    console.log(err)
})
}
export const NewContrAgent = (NewAgent,user) =>{
   
    return fetch(`http://45.132.18.71/new/agent/${user}`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(NewAgent)
        })
.then(response =>{
    return response.json()
})
.catch(err =>{
    console.log(err)
})
}
export const ContrAgentList = page =>{
   
    return fetch(`http://45.132.18.71/agent/list/?page=${page}`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        })
.then(response =>{
    return response.json()
})
.catch(err =>{
    console.log(err)
})
}
export const GetAgentProfile = (agentId) =>{
   
    return fetch(`http://45.132.18.71/agent/${agentId}`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        })
.then(response =>{
    return response.json()
})
.catch(err =>{
    console.log(err)
})
}


export const AddManageForAgent = (tags,agentId) =>{
    return fetch(`http://45.132.18.71/new/manage/agent/${agentId}`, {
        method: "POST",
        headers: {
            Accept: "application/json", "Content-Type": "application/json"
        },
        body: JSON.stringify({tags})
        
    })
    .then(responce =>{
        return responce.json()
    })
    .catch(err =>console.log(err))
}

export const MyAgentList = (workerId) =>{
    return fetch(`http://45.132.18.71/agent/manage/`, {
        method: "POST",
        headers: {
            Accept: "application/json", "Content-Type": "application/json"
        },
        body: JSON.stringify({workerId})
    })
    .then(responce =>{
        return responce.json()
    })
    .catch(err =>console.log(err))
}
export const MyHistoryActive = (userId) =>{
    return fetch(`http://45.132.18.71/my/history/active/`, {
        method: "POST",
        headers: {
            Accept: "application/json", "Content-Type": "application/json"
        },
        body: JSON.stringify({userId})
    })
    .then(responce =>{
        return responce.json()
    })
    .catch(err =>console.log(err))
}
export const MyHistoryBeginer = (userId) =>{
    return fetch(`http://45.132.18.71/my/history/beginer/`, {
        method: "POST",
        headers: {
            Accept: "application/json", "Content-Type": "application/json"
        },
        body: JSON.stringify({userId})
    })
    .then(responce =>{
        return responce.json()
    })
    .catch(err =>console.log(err))
}

export const MyHistoryComplete = (userId) =>{
    return fetch(`http://45.132.18.71/my/history/complete/`, {
        method: "POST",
        headers: {
            Accept: "application/json", "Content-Type": "application/json"
        },
        body: JSON.stringify({userId})
    })
    .then(responce =>{
        return responce.json()
    })
    .catch(err =>console.log(err))
}
export const OneHistoryGet = (HistoryById) =>{
    return fetch(`http://45.132.18.71/history/${HistoryById}`, {
        method: "GET",
        headers: {
            Accept: "application/json", "Content-Type": "application/json"
        }
    })
    .then(responce =>{
        return responce.json()
    })
    .catch(err =>console.log(err))
}

export const ChangeHistory = (historyId,changeHisitoryPayload) =>{
    return fetch(`http://45.132.18.71/change/history/${historyId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json", "Content-Type": "application/json"
        },
        body: JSON.stringify(changeHisitoryPayload)
    })
    .then(responce =>{
        return responce.json()
    })
    .catch(err =>console.log(err))
}
export const SearchContrAgent = (item) =>{
    return fetch(`http://45.132.18.71/agent/search`, {
        method: "POST",
        headers: {
            Accept: "application/json", "Content-Type": "application/json"
        },
        body: JSON.stringify({item})
    })
    .then(responce =>{
        return responce.json()
    })
    .catch(err =>console.log(err))
}