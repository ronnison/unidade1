function getUsers(){
    
var url = "use sua url do supabase";

var config = {
    method: "GET",
    headers: {
        apikey: "use sua apikey do supabase",
        Authorization: "use sua apikey do supabase",
        "Content-type": "application/json;charset=utf-8",
    },
}

fetch(url, config)
    .then(resp=>resp.json())
    .then(json=>console.log(json))

}

//getUsers();

function getTasks() {
    var url = "http://localhost:3000/tasks"

    fetch(url)
        .then(response=>response.json())
        .then(json=>console.log(json));
}

getTasks();