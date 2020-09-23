let commentSection = [
    {
        "name": "Theodore Duncan",
        "time": "11/15/2019",
        "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He's definitely my favourite ever!",
    },
    {
        "name": "Gary Wong",
        "time": "12/12/2019",
        "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!",
    },
    {
        "name": "Micheal Lyons",
        "time": "12/18/2019",
        "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
    }
]


//COMMENTS 
let liveComments = document.querySelector('.convo-section__live-comments');

const displayComment = (commentObject) => {
    let commentContainer = document.createElement('div');
    commentContainer.classList.add('convo-section__comment-container');
    liveComments.prepend(commentContainer);

    let topRow = document.createElement('div');
    topRow.classList.add('convo-section__top-row');
    commentContainer.appendChild(topRow);

    let commentImage = document.createElement('div');
    commentImage.classList.add('convo-section__comment-image');
    topRow.appendChild(commentImage);

    let commentName = document.createElement('h3');
    commentName.classList.add('convo-section__comment-name');
    commentName.innerText = commentObject.name;
    topRow.appendChild(commentName);

    let commentTime = document.createElement('p');
    commentTime.classList.add('convo-section__comment-time');
    commentTime.innerText = commentObject.time;
    topRow.appendChild(commentTime);

    let commentText = document.createElement('p');
    commentText.classList.add('convo-section__comment-text');
    commentText.innerText = commentObject.comment;
    commentContainer.appendChild(commentText);
}

for (var i = 0; i < commentSection.length; i++) {
    displayComment(commentSection[i])
}


//FORM SECTION
const form = document.querySelector('.convo-section__form');

let convoSection = document.querySelector('.convo-section__form-container');

const clearComments = () => {
    while (liveComments.hasChildNodes()) {
        liveComments.removeChild(liveComments.firstChild);
    }
}

const readdComments = () => {
    for (var i = 0; i < commentSection.length; i++) {
        displayComment(commentSection[i])
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    let userName = event.target.fullName.value;
    let userComment = event.target.commentBox.value;
    let timestamp = new Date().toLocaleDateString();

    let newComment = {
        "name": userName,
        "time": timestamp,
        "comment": userComment,
    }

    commentSection.push(newComment);
    
    form.reset(); 

    clearComments();

    readdComments(); 
})




