function showAlert(title, message, color) {

    //
    var title = title ? title : 'Title'
    var message = message ? message : "message from "+ window.location.href
    var color = color ? color : "blue"
    
    document.body.innerHTML = "<div id='removed' class='area'><div class='box'><h1>"+title+"</h1><p>"+message+"</p><div><button style=' background-color:"+color+"'>ok</button></div></div></div>"
    document.querySelector('button').onclick = () => {
        let removElement = document.getElementById('removed')
        removElement.remove()
    }
    
}
