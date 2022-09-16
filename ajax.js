console.log('welcome')
let frute = document.getElementById('Frute')
frute.addEventListener('click', frutenm)
function frutenm() {
    let xhr = new XMLHttpRequest();
    //xhr.open("GET", "fruitename.txt", true);
    xhr.open("GET", "wordapi.txt", true)
    xhr.onload = function () {
        let fname = JSON.parse(this.responseText);
        let innhtml = '';
        //console.log(fname)
        let divbo = document.getElementById("names")
        i = 0
        /*
            while (i < fname.length){
                innhtml += `<li> ${fname[i]} </li>`
                i+=1
            }
            */
        Array.from(fname).forEach(function (e) {
            if (i == 0) {
                innhtml += `<ul id = "FName"> <h1>Fruite name</h1>
                                    <li>${e}</li>
                            </ul>`
                            i+=1

            }
            else{
                innhtml += `<ul id = "FName"><li>${e}</li></ul>`
            }
           
            //console.log(e)
        })
        divbo.innerHTML = innhtml;
    }



    xhr.send();

}


let vegi = document.getElementById('Vegitable')
vegi.addEventListener('click', veginm)
function veginm() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "vegitablename.txt", true);
    xhr.onload = function () {
        let fname = JSON.parse(this.responseText);
        let innhtml = '';
        //console.log(fname)
        let divbo = document.getElementById("names")
        i = 0
        /*
            while (i < fname.length){
                innhtml += `<li> ${fname[i]} </li>`
                i+=1
            }
            */
        Array.from(fname).forEach(function (e) {
            if (i == 0) {
                innhtml += `<ul id = "FName"> <h1>Vegitable name</h1>
                                    <li>${e}</li>
                            </ul>`
                            i+=1

            }
            else{
                innhtml += `<ul id = "FName"><li>${e}</li></ul>`
            }
           
            //console.log(e)
        })
        divbo.innerHTML = innhtml;
    }



    xhr.send();

}

