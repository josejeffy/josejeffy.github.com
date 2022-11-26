let generateHTML = (md) => {
    let html = ""
    md.split("\n").forEach(l => {
        let content = l.split(" ").slice(1).join(" ")
        switch (l[0]) {
            case '<': html += content; break
            case '>': html += `<blockquote>${content}</blockquote>`; break
            case '#': html += `<h1>${content}</h1>`; break
            case '-': html += `<li>${content}</li>`; break
            case '=': html += `<hr>`; break
            case '!': html += `<img src='/images/${content}'></img>`; break
            case '[': html += `<p><a href='/index.html#!${content}'>${l.split(" ")[0].slice(1).replace(']','').replaceAll('_',' ')}</a></p>`; break
            default: html += `<p>${l}</p>`; break
        }
    })
    return html
}


