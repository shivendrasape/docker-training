



let inp1 = document.getElementById('inp1')
let inp2 = document.getElementById('inp2')

let saveBtn = document.getElementById('save-btn')
let loadBtn = document.getElementById('load-btn')

saveBtn.addEventListener('click', e => {
    let key = inp1.value;
    let value = inp2.value;

    fetch('/save', {
        method: 'POST',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({ key, value })
    })
        .then(response => response.json())
        .then(resp => console.log(resp))

})


loadBtn.addEventListener('click', e => {
    let key = inp1.value;

    fetch('/load/' + key, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(resp => inp2.value = resp.value)

})