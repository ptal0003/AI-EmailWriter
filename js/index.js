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
    var sendButton = document.querySelector('div[data-tooltip="Send (Ctrl-Enter)"]');
    let actionButtonSections = document.getElementsByClassName("btC")
    const emailAIBtnExists = document.getElementsByClassName("email-ai-writer-btn")[0];
    if(sendButton){
        
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
let previousActionButtonSections = []
var observer = new MutationObserver(showMessage);
observer.observe(document, { childList: true, subtree: true });
function showMessage(){
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
        alert(newBtn.id)
    })
    //console.log("Change detected")
    let actionButtonSections = document.getElementsByClassName("btC")
    const emailAIBtn = document.getElementsByClassName("email-ai-writer-btn");
    if(actionButtonSections.length > 0 ){
        {
    
            
            for (let i = 0; i < actionButtonSections.length; i++){
                if(!actionButtonSections[i].getElementsByClassName("email-ai-writer-btn")[0])
                {
                    newBtn.id = actionButtonSections[i].id + "-" + newBtn.className
                    actionButtonSections[i].appendChild(newBtn);
                }               
            } 
            previousActionButtonSections = actionButtonSections;
        }
    }
}
document.addEventListener("click", function(){
    let actionButtonSections = document.getElementsByClassName("G3 G2");
    let textBoxReferences = [];
    let replyBoxActionBarReferences = []
    let mailBoxReferences = []
    for(let i = 0; i < actionButtonSections.length; i++){
        if(actionButtonSections[i].getElementsByClassName("a3s aiL")[0]){
            textBoxReferences.push(actionButtonSections[i].getElementsByClassName("a3s aiL")[0]);
        }   
        if(actionButtonSections[i].getElementsByClassName("HE")[0]){
            replyBoxActionBarReferences.push(actionButtonSections[i].getElementsByClassName("btC"));
            mailBoxReferences.push(actionButtonSections[i].getElementsByClassName("HE")[0].closest(".G3.G2").getElementsByClassName("a3s aiL")[0]);
        }
    }
    console.log(replyBoxActionBarReferences)
    console.log(mailBoxReferences)

})