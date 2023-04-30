function helloThere(){
    console.log("Hello")
}

function GenerateResponse(){
    console.log(document.getElementById("user_response_prompt").value)
    document.getElementById("email_context").value = document.getElementById("user_response_prompt").value;
}

document.getElementById("generateResponseButton").addEventListener('click',GenerateResponse)
