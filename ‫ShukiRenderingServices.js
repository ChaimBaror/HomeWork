function rendera(template, dataArr) {
    let h = ''
    let r = /\[(.*)\]/g;
    let propertiesInTemplate = template.match(r)
    console.log(propertiesInTemplate)

    //clean [] from words in array propertiesInTemplate
    for (let i = 0; i < propertiesInTemplate.length; i++) {
        let p = propertiesInTemplate[i];
        p = p.replace('[', '').replace(']', '')
        propertiesInTemplate[i] = p
    }
    console.log(propertiesInTemplate)

    //this is the array students
    dataArr.forEach(studentItem => {
        let itemHtml = template
        propertiesInTemplate.forEach(p => {
            let propValue = studentItem[p]
            itemHtml = itemHtml.replace(`[${p}]`, propValue)
        })
        h += itemHtml
    });
    return h
}