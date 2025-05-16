let btn = document.querySelector("#add").addEventListener("click", function(){
    let taskinp = document.querySelector("#task")
    let task = taskinp.value
    if(task.trim() !== ""){
        let item = document.createElement("li")
        // let bold  = document.createElement("b")
        item.textContent = task + " ";
        
        checked(item)
        

        document.querySelector("#list").appendChild(item)
        
        select(item)
        // document.querySelector(item).appendChild(bold)
        taskinp.value = ""
        

    }
});

function checked (li){
    let yesrad = document.createElement("input")
    yesrad.type = "radio"
    yesrad.name = "taskstatus" + Date.now();
    yesrad.value = "Yes"

     let norad = document.createElement("input");
     norad.type = "radio";
     norad.name = yesrad.name;
     norad.value = "No";
     norad.checked = true;

     let que = document.createElement("label")
     que.textContent = "Completed? "
     let yesLabel = document.createElement("label");
     yesLabel.textContent = "Yes";
     let noLabel = document.createElement("label");
     noLabel.textContent = "No";

     li.appendChild(que);
     li.appendChild(yesrad);
     li.appendChild(yesLabel);
     li.appendChild(norad);
     li.appendChild(noLabel);
 }

 function select(li){
    let slct = document.createElement("input")
    slct.type = "checkbox";
    li.insertBefore(slct,li.firstChild)
    // slct.appendChild(li)
 }


 document.querySelector("#del").addEventListener("click", function() {
        let checkboxes = document.querySelectorAll("#list input[type='checkbox']");
        
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                let listItem = checkbox.parentElement;
                if (listItem && listItem.tagName === "LI") {
                    listItem.remove(); 
                }
            }
        });
    });

let sel = document.querySelector("select").addEventListener("change",function(){
    let filterValue = this.value
    let tasks = document.querySelectorAll("li")

    tasks.forEach(task => {
        let isChecked = task.querySelector("input[type='radio']").checked

        if(filterValue === "completed" && !isChecked){
            task.style.display = "none";
        } else if(filterValue === "unfinished" && isChecked){
            task.style.display = "none"
        } else{
            task.style.display = "flex";
        }

    })
})