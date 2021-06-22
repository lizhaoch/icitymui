export function formatLabel(label) {
    if(label.length === 0) {
        return label
    }

    let lastIndex = label.length-1
    if(label.substr(lastIndex) === '*') {
        let light = "<font color='FA533D'>&nbsp;*</font>"
        return label.substr(0, lastIndex) + light
    } else {
        return label
    }
}