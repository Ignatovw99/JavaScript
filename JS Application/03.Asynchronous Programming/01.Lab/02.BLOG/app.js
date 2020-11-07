function attachEvents() {

    const rootUrl = 'https://blog-apps-c12bf.firebaseio.com/';

    const postsSelectElement = document.querySelector('#posts');

    const postTitleElement = document.querySelector('#post-title');
    const postBodyElement = document.querySelector('#post-body');
    const postComments = document.querySelector('#post-comments');

    async function loadPosts() {
        const postsResponse = await fetch(rootUrl + '.json');
        const posts = (await postsResponse.json()).posts; 

        const postOptions = Object.keys(posts)
                                .map(key => `<option value="${key}">${posts[key].title}</option>`)
                                .join('');
        postsSelectElement.innerHTML = postOptions;
    }

    async function viewPostDetails() {
        const selectedPost = postsSelectElement[postsSelectElement.selectedIndex];
        const postId = selectedPost.value;
        const postResponse = fetch(`${rootUrl}posts/${postId}.json`);
        const commentsResponse = fetch(`${rootUrl}posts/${postId}/comments.json`);

        const post = await (await postResponse).json();
        const comments = await (await commentsResponse).json();

        postTitleElement.textContent = post.title;
        postBodyElement.textContent = post.body;
        postComments.innerHTML = '';
        if (!comments) {
            return;
        }
        comments.forEach(comment => postComments.innerHTML += `<li id="${comment.id}">${comment.text}</li>`);
    }

    document.querySelector('#btnLoadPosts').addEventListener('click', loadPosts);
    document.querySelector('#btnViewPost').addEventListener('click', viewPostDetails)
}

attachEvents();