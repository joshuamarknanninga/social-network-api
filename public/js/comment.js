document.querySelector('#comment-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const commentText = document.querySelector('#commentText').value.trim();
    const postId = window.location.pathname.split('/').pop();

    if (commentText) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ commentText, postId }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to add comment');
        }
    }
});
