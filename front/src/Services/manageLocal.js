export function setLocal(name){
    localStorage.setItem("userName",name)
    console.log("name set to "+localStorage.getItem("userName"))
}
export function setToken(token){
    localStorage.setItem("token",token)
    console.log("token set to "+localStorage.getItem("token"))
}
export function delLocal(){
    localStorage.removeItem("userName")
    localStorage.removeItem("token")
}