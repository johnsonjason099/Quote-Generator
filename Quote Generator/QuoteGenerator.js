let quotes = [
    `Making your bed is the first thing you should do`,
    `As you are walking out the door... That shirt needs to be ironed`,
    `Chew with your mouth closed, Dear.`,
    `If you didn't want to talk about it, why did you start the conversation?`,
    `I love you`,
    `You need to call more often`,
    `Because I said so`,
    `You are just like your Father`,
    `Shouting your name like there is no tommorow... Do you want a muffin?`
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
    
    // Do all of your work inside the document.addEventListener  
  
    // Part 1
  document.querySelector('#main-title').textContent = 'Welcome to my Momma\'s quotes.'
  
    // Part 2
  document.querySelector('body').style.backgroundColor = 'skyblue'
  
    // Part 3
  const favoriteThings = document.querySelectorAll('#favorite-things > li')
  
  document.querySelector('#favorite-things').removeChild(favoriteThings[favoriteThings.length - 1])
  
    // Part 4
  document.querySelectorAll('.special-title').forEach((item) => {
    item.style.fontSize = '2rem'
  })
  
    // Part 5
  document.querySelectorAll('#Favorite Recipes > li').forEach((item) => {
    if(item.textContent.trim() === ''){
      document.querySelector('#Favorite Recipes').removeChild(item)
    }
  })
  
    // Part 6
  const li = document.createElement('li')
    document.querySelector('#Favorite Recipes').appendChild(li)
  
    // Part 7
  const blogPost = document.createElement('div')
  blogPost.classList.add('blog-post')
  const heading = document.createElement('h2')
  
  const pEl = document.createElement('p')
  pEl.textContent = 'Her hometown : Omaha, NE'
  
  document.querySelector('.main').appendChild(blogPost)
  
  blogPost.appendChild(heading)
  blogPost.appendChild(pEl)
  
    // Part 8
  document.querySelector('#quote-title').addEventListener('click', (evt) => {
    randomQuote()
  })
  
    // Part 9
  
  document.querySelectorAll('.blog-post').forEach((item) => {
    item.addEventListener('mouseout', (evt) => {
      evt.currentTarget.classList.toggle('purple')
    })
    item.addEventListener('mouseenter', (evt) => {
    evt.stopPropagation()
    evt.currentTarget.classList.toggle('red')
    })
  })
  
  
  
  });
  