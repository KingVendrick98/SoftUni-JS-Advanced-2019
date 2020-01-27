function createArticle() {
	
	let createTittle = document.getElementById('createTitle');
	let createContent = document.getElementById('createContent');

	if (createTittle.value !== '' && createContent.value !== '') {
		let h3 = document.createElement('h3');
		h3.textContent = createTittle.value;

		let p = document.createElement('P');
		p.textContent = createContent.value;

		let articles = document.getElementById('articles');
		let article = document.createElement('article');
		article.appendChild(h3);
		article.appendChild(p);

		articles.appendChild(article);

		createTittle.value = '';
		createContent.value = '';

		
	}

}
createArticle()