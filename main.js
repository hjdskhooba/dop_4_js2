const cat_btn = document.getElementById('catBtn_get');
const dog_btn = document.getElementById('dogBtn_get');
const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');

catBtn_get.addEventListener('click', getRandomCat);
dogBtn_get.addEventListener('click', getRandomDog);

function getRandomCat() {
    fetch("https://aws.random.cat/meow") 
        .then((res) => res.json())
        .then((data) => {
            cat_result.innerHTML = `<img src=${data.file} alt="cat" />`
        });
}

function getRandomDog() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandomDog();
			}
			else {
				dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
			}
		});
}