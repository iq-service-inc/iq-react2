/* 將多層 Objet 扁平化並以 '.' 區隔 Parent Key 與 Child Key */
/* Value Type 必須為 Object or String */


function flatten(object, parent = null){
    let res = {}
    if (typeof object !== "object") return res
    for (let key in object) {
        let newkey = parent ? [parent, key].join('.') : key
        if (typeof object[key] === "object")
            res = { ...res, ...flatten(object[key], newkey) }
        else if (typeof object[key] === "string")
            res[newkey] = object[key]
    }
    return res
}

export default flatten 