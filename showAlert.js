//if you want to import this file in a js file
//please add export befor function 

function showAlert(title_P, TypeM_P, message_P, color_P){
    

    // create button
    const button = document.createElement('button')
    button.style.width = "80px"
    button.style.border = "none"
    button.style.padding = "7px"
    button.style.backgroundColor = color_P ? color_P : "green"
    button.style.color = "white"
    button.style.borderRadius = "5px"
    button.innerText = "ok"
    setTimeout(1000)
    button.onclick = () => {
        var removElement = document.getElementById('removed')
        removElement.remove()

    }

    // parent of button
    const dbtn = document.createElement('div')
    dbtn.style.width = "100%"
    dbtn.style.display = "flex"
    dbtn.style.justifyContent = "end"

    //to show the type of the message and the message 
    const message = document.createElement('p')
    TypeM_P = TypeM_P ? TypeM_P : "message" 
    message_P =  message_P ? message_P : "from "+ window.location.href 
    message.innerText = TypeM_P + " : " + message_P

    //the title of the alert
    const title = document.createElement('h1')
    title.innerText = title_P ? title_P : "title"

    //the parent that containe every chiled above 
    const card = document.createElement('div')
    card.style.width = "300px"
    card.style.padding = "0 4% 3% 4%"
    card.style.boxShadow = "0 2px 15px #ddd"

    // to center the card using display flex
    const area = document.createElement('div')
    area.style.display = "flex"
    area.style.width = "100%"
    area.style.height = "100vh"
    area.style.justifyContent = "center"
    area.style.zIndex = "99999"
    area.id = "removed"
    area.style.alignItems = "center"
    
    //append ever chiled to his parent 
    dbtn.appendChild(button)
    card.appendChild(title)
    card.appendChild(message)
    card.appendChild(dbtn)
    area.appendChild(card)
    document.body.append(area)

}

