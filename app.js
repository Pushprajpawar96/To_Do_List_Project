const item = document.querySelector('#item')
const toDoBox = document.querySelector('#to-do-box')

item.addEventListener(
    "keyup",
    function(event){
        if(event.key == "Enter"){
            addToDo(this.value)
            this.value = ""
        }
    }
)

const addToDo = (item) => {
    const Listitem = document.createElement("li");
    Listitem.innerHTML =`
    ${item}
    <i class="fas fa-times"></i>
    `;

    Listitem.addEventListener(
        "click",
        function (){
            this.classList.toggle("done");
        }
    )

    Listitem.querySelector("i").addEventListener(
        "click",
        function (){
            Listitem.remove()
        }
    )

    toDoBox.appendChild(Listitem)
}