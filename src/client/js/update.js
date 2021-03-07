
async function update(data){
    fetch('http://localhost:8080/natural', { method: 'POST', credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({'text': data}),
    })
    .then(res => res.json())
    // Apply the results
    .then(function(res) {
        document.getElementById('results').innerHTML = res.sentences.join(' ');
    })
}

export { update }