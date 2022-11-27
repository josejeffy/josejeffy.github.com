loadMD = (file, target) => {
    fetch(`/pages/${file}.md`)
        .then(response => response.text())
        .then(md => document.getElementById(target).innerHTML = generateHTML(md))
}
loadMainPanel = () => {
    let endpoint = window.location.hash.slice(2) || 'home'
    loadMD(endpoint, "mainpanel")
}
reload = () => {
    loadMainPanel()
    loadMD('sidebar', "sidebar")
}

reload()

addEventListener('hashchange', (event) => reload());