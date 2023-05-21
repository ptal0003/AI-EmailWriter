console.log("Chrome extension")
let previousActionButtonSections = []
//var observer = new MutationObserver(showMessage);
//observer.observe(document, { childList: true, subtree: true });
let newTd = document.createElement("td");
let newDiv = document.createElement("div");
let newBtn = document.createElement("btn");
let img = document.createElement("img")
img.src = chrome.runtime.getURL("../assets/images/icons/icon16.png")
newDiv.role = "button";
img.className = "email-ai-writer-btn"
newTd.addEventListener("click", function(){
    newBtn = newDiv.getElementsByClassName("email-ai-writer-btn")[0]
    
    let mailTextId = newBtn.id.split("_")[1];
    let replyBoxId = newDiv.closest(".iN").getElementsByClassName("Am aO9 Al editable LW-avf tS-tW")[0].id; 
    let div = document.createElement("div");
    div.innerHTML = `<div style="position: fixed; z-index: 9998;"><div style="transform: translate(-50%, -50%); left: 50%; top: 50%; position: fixed; z-index: 9999;"><div class="rounded-lg border bg-white px-6 pb-6 pt-4 drop-shadow-2xl"><div class="w-[700px]"><div aria-label="modal-header"><div class="mb-4 mt-1"><div class="flex items-center justify-between"><div class="flex items-center gap-3"><div><a title="Go to Homepage https://chatgptwriter.ai" target="_blank" class="inline-flex items-center gap-3 hover:underline" href="https://chatgptwriter.ai"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 64 64"><g clip-path="url(#clip0_1_2)"><path fill="#4F5D73" d="M32 64c17.673 0 32-14.327 32-32C64 14.327 49.673 0 32 0 14.327 0 0 14.327 0 32c0 17.673 14.327 32 32 32z"></path><path fill="#231F20" d="M46.9 17.5c-.2-.3-.5-.5-.9-.5H29c-.4 0-.7.2-.9.6l-8 16c-.2.3-.1.7 0 1 .2.3.5.5.9.5h5.5l-8.4 18.6c-.2.4-.1.9.3 1.2.2.1.4.2.6.2.2 0 .5-.1.6-.2l24-20c.3-.3.4-.7.3-1.1-.1-.5-.5-.8-.9-.8h-6.1l9.9-14.4c.2-.3.3-.7.1-1.1z" opacity="0.2"></path><path fill="#75FBF3" d="M46.9 15.5c-.2-.3-.5-.5-.9-.5H29c-.4 0-.7.2-.9.6l-8 16c-.2.3-.1.7 0 1 .2.3.5.5.9.5h5.5l-8.4 18.6c-.2.4-.1.9.3 1.2.2.1.4.2.6.2.2 0 .5-.1.6-.2l24-20c.3-.3.4-.7.3-1.1-.1-.5-.5-.8-.9-.8h-6.1l9.9-14.4c.2-.3.3-.7.1-1.1z"></path></g><defs><clipPath id="clip0_1_2"><path fill="#fff" d="M0 0H64V64H0z"></path></clipPath></defs></svg><h3 class="text-xl font-medium text-[#525d71]">ChatGPT Writer</h3></a></div><button role="button" type="button" title="Upgrade to Pro Version to get the best writing experience"><div class="flex items-center gap-1 rounded bg-slate-300 py-0.5 px-2 text-[11px] tracking-wide text-slate-600"><div>PRO</div><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-3 w-3"><path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd"></path></svg></div></div></button></div><div class="flex items-center gap-3"><div><button role="button" type="button" class="text-xs text-slate-500 hover:text-slate-900 hover:underline underline-offset-2">Login</button></div><button role="button" type="button" class="rounded-lg bg-transparent p-0.5 text-slate-400 hover:bg-slate-200 hover:text-slate-900"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div></div><form class="text-[14px]"><div class="space-y-6"><div class="w-full"><label for="email-context" class="text-slate-900 block text-sm font-medium mb-2">Email context</label><textarea class="text-slate-900 block p-2 w-full bg-slate-50 border-slate-300 text-sm border rounded-lg focus:border-cyan-500 focus:outline-cyan-500 focus:ring-cyan-500" placeholder="(Paste previous email text to generate a reply or leave it empty if you're writing a new email)" name="email-context" id="email-context" cols="30" rows="2" style="height: 56px; overflow: hidden;">Thanks. My number is 0415628882. Best</textarea></div><div><label for="email-reply-instruction" class="text-slate-900 block text-sm font-medium mb-2">Briefly enter what do you want to reply</label><details class="mb-1 inline-block text-xs text-slate-500"><summary class="hover:text-slate-900" role="button">See examples</summary><ul class="list-disc italic [&amp;>li]:ml-5"><li>Write a reply to this email about salary negotiation</li><li>Write a reply to this email in German language about doing affiliate partnership</li><li>Write a reply to this email that I won't be able to attend meeting due to health issues</li><li>(in case of new email) Write an email about payment reminder</li><li>(in case of new email) Write an email that i'm looking for a job opportunity</li><li>Write a message in a casual way to a friend about how are you</li></ul></details><div class="w-full"><input autocomplete="on" required="" spellcheck="true" id="email-reply-instruction" name="email-reply-instruction" class="text-slate-900 block p-2 w-full bg-slate-50 border-slate-300 text-sm border rounded-lg focus:border-cyan-500 focus:outline-cyan-500 focus:ring-cyan-500" type="text" placeholder="Write a reply to this email..." value="Write a reply to this email..."></div><div class="mt-1"><div class="h-[16px]"></div></div></div><div class="flex items-center justify-between"><div class="flex gap-3 text-xs text-slate-500"><button role="button" type="button" class="hover:text-slate-900">Contact</button><div class="hover:text-slate-900"><div class="relative flex justify-center"><button role="button" type="button">Share</button></div></div><button role="button" type="button" class="flex items-center gap-1 hover:text-slate-900"><div>Settings </div></button></div><div class="flex gap-6"><div><button role="button" type="submit" name="submit" value="submit" class="focus:ring-4 text-white inline-flex px-4 py-2 text-sm bg-gradient-to-r font-medium items-center text-center rounded-lg from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-cyan-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none">Generate Reply</button></div></div></div></div></form></div></div></div></div>`
    div.style.display = "block"
    showModal(mailTextId, replyBoxId)
})

const showModal = (mailTextId, replyBoxId) => {
    const modal = document.createElement("dialog");
    modal.setAttribute(
    "style",`
    height:450px;
    width: 450px;
    border: none;
    top:150px;
    border-radius:10px;
    background-color:white;
    position: fixed; box-shadow: 0px 12px 48px rgba(29, 5, 64, 0.32);
    justify-content: center;
    `
    );
    modal.innerHTML = `
    <div style="position:absolute; top:10px; left:10px;">
    <div style="width: 450px; ">
        <button id = "close" style="padding: 8px 12px; font-size: 16px; border: none; border-radius: 20px;">x</button>
    </div>
    <div style = "display: flex; justify-content: center ">
        <img src=${chrome.runtime.getURL('../assets/images/icons/icon48.png')} style ="height: 58px; width: 58px; margin-right: 10px">
        <h3 style = "text-align: center">Chat-GPT Response Generator</h3>
    
    </div>
    <div>
        <h4>
        Email Context:
        </h4>
        <textarea type="text" id="email_context" style="min-height: 100px; width: 450px; font-size: 11px; resize: vertical" ></textarea>
        <h4>
        How would you like to reply to the email?
        </h4>
        <input placeholder = "Enter a brief reply to the email:" style = "width: 450px; font-size: 11px;" id = "prompt_id"></input>
        <h4 id = "response_text" style = "display: none">
        Generated Response:
        </h4>
        <textarea type="text" id="email_reply" style="min-height: 100px; width: 450px; font-size: 11px; resize: vertical; display: none" ></textarea>
        </div>
    <div style="bottom:-65px; right:10px; display: flex; justify-content: space-around">
        <button id = "generateButton" style="padding: 8px 12px; font-size: 10px; border-radius: 12px; border: none; margin: 10px">Generate Response</button>
        <button id = "copyButton" style="padding: 8px 12px; font-size: 10px; border-radius: 12px; border: none; margin: 10px; display: none">Copy to Gmail</button>
    </div>
    </div>`;
    document.body.appendChild(modal);
    const dialog = document.querySelector("dialog");
    dialog.showModal();
    let emailContext = document.getElementById("email_context")
    if (mailTextId != "newEmail"){
        console.log(mailTextId)
        emailContext.value = document.getElementById(mailTextId).innerText    
    }
    const button = document.getElementById("close");
    button.addEventListener("click", function(){
        dialog.close();
        document.getElementById("email_reply").style.display = "none"
        document.getElementById("response_text").style.display = "none"
        document.getElementById("copyButton").style.display = "none"
        
    })
    const copyButton = document.getElementById("copyButton");
    copyButton.addEventListener("click", function(){
        dialog.close();
        document.getElementById("email_reply").style.display = "none"
        document.getElementById("response_text").style.display = "none"
        document.getElementById("copyButton").style.display = "none"
        document.getElementById(replyBoxId).innerText= document.getElementById("email_reply").value;
    })
    const generateResponseButton = document.getElementById("generateButton")
    generateResponseButton.addEventListener("click", function(){
        document.getElementById("email_reply").style.display = "block"
        document.getElementById("response_text").style.display = "block"
        document.getElementById("copyButton").style.display = "block"
    
        const data = { "emailContext": document.getElementById("email_context").value, "replyPrompt": document.getElementById("prompt_id").value };
        document.getElementById("email_reply").innerText = "Loading...";
        fetch('http://127.0.0.1:5500/generate-text', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then(response => response.json())
            .then(data => {
              // Handle the response from Python
              document.getElementById("email_reply").innerText = data.body;
            
            })
            .catch(error => {
              console.error('Error:', error);
            });
    })
}
const observer1 = new MutationObserver((mutations) => {
    
    mutations.forEach((mutation) => {
        if (mutation.type === 'childList'){
            const addedNodes = Array.from(mutation.addedNodes);
            const allbtC = addedNodes.filter(node =>node.className === 'bAK')
            if(allbtC.length > 0){
                allbtC.forEach((btC) => {
                    btC = btC.parentNode
                    btC = document.getElementById(btC.id).closest(".btC")
                    let newEmail = false;
                    if(btC.closest(".G3.G2") != null){
                        newEmail = (btC.closest(".G3.G2").getElementsByClassName("a3s aiL")[0] == null)    
                    }
                    else{
                        newEmail = true;
                    }
                    if (!newEmail)
                    {
                        img.id += "_" + btC.closest(".G3.G2").getElementsByClassName("a3s aiL")[0].id 
                    }   
                    else{
                        newBtn.id = "newEmail_btn";
                    }
                    //let newDiv = document.createElement("div");
                    newTd.appendChild(newDiv);
                    newDiv.appendChild(img)
                    btC.appendChild(newTd)
                })
            }
        }
    })
})
observer1.observe(document.body, {childList: true, subtree: true})
