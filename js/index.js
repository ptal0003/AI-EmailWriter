
function init(){
    var button = document.createElement("button");
    button.addEventListener("click", function(){
        
    })
    button.innerHTML = "<button>START</button>"
    document.body.appendChild(button);
}

function GenerateResponse(){
    console.log(document.getElementById("user_response_prompt").value)
    let NEW_MESSAGE_INPUT = ".a3s.aiL";
        //NEW_MESSAGE_INPUT = ".gs";
        const bodyInput = document.querySelectorAll(NEW_MESSAGE_INPUT);
        const bodyInputCleaned = [];
        for(let i = 0; i< bodyInput.length; i++){
            if (bodyInput[i].children.length > 0){
                bodyInputCleaned.push(bodyInput[i])
            }
        }
    document.getElementById("email_context").value = bodyInputCleaned[bodyInputCleaned.length - 1].innerText;
}

console.log("Chrome extension")
chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type } = obj;
    let actionButtonSections = document.getElementsByClassName("btC")
    const emailAIBtnExists = document.getElementsByClassName("email-ai-writer-btn")[0];
    if(actionButtonSections.length > 0){
        
        if (!emailAIBtnExists){
            let newBtn = document.createElement("btn");
            newBtn.className = "email-ai-writer-btn";
            newBtn.innerText = "Generate Email"
            newBtn.style.fontSize = "small";
            newBtn.style.borderRadius = "5px";
            newBtn.style.width = "100px";
            newBtn.style.padding = "10px 10px 10px 10px";
            newBtn.style.backgroundColor = "DarkBlue";
            newBtn.style.color = "DarkGrey";
            newBtn.style.textAlign = "center";
            newBtn.style.marginLeft = "15px"
            newBtn.addEventListener("click", function(){
                window.alert(newBtn.id);
            })
            console.log(actionButtonSections)
            for (let i = 0; i < actionButtonSections.length; i++){
                newBtn.id = actionButtonSections[i].id + "-" + newBtn.className
                actionButtonSections[i].appendChild(newBtn);
            } 
        }
    }
    
})

init();