import '../style.css';
import sideImage from '../assets/images/hp-side-img.png';

const card = (characters, likes = null) => {
  const cardsContainer = document.querySelector('.cards');
  const topImage = document.createElement('img');
  topImage.classList = 'side-img';
  topImage.src = sideImage;

  cardsContainer.innerHTML = '';

  characters.forEach((character, index) => {
    const characterLikes = likes.filter((like) => Number(like.item_id) === index)[0];
    let likesCount = 0;
    if (characterLikes) {
      likesCount = characterLikes.likes;
    }
    cardsContainer.innerHTML += `
      <div class="card">
        <img class="character-img" alt=${character.name} src=${character.image} height=200 data-id=${index}>
        <div class="name-and-like-container flex-row">
          <span class="character-name">${character.name}</span>
          <div class="likes-container">
            <ion-icon class="icon like" name="heart-outline" data-id=${index}></ion-icon><br>
            <span class="likes">${likesCount} likes</span>
          </div>
        </div>
        <button type="button" id=comment-btn${index} class="comment-btn" data-id=${index}> 
          <ion-icon class="icon comment" name="chatbubble"></ion-icon>
        </button>
      </div>`;
  });

  document.body.appendChild(topImage);
};

export default card;