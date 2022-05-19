import requset from "../assets/utils/request";


export function routerPromission(logindata) {
    return requset({
        method: 'GET',
        url: `/Promission`,
        logindata
    })
}