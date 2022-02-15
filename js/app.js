function fetchJoke() {
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.querySelector('blockquote').textContent = data.joke;
            let jokeId = data.id;
            let jokeImg = document.createElement('img');
            jokeImg.src = `https://icanhazdadjoke.com/j/${jokeId}.png`
            document.querySelector('blockquote').append(jokeImg);
        });
}

document.querySelector("#newJoke").addEventListener("click", fetchJoke)

fetchJoke();
