// https://jsonplaceholder.typicode.com/guide/

async function downloadPosts (page = 1) {
  const postsURL = `https://jsonplaceholder.typicode.com/posts?_page=${page}`
  const response = await fetch(postsURL)
  const articles = await response.json()
  return articles
}

async function downloadComments (postId) {
  const commentsURL = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  const response = await fetch(commentsURL)
  const comments = await response.json()
  return comments
}

async function getUserName (userId) {
  const userURL = `https://jsonplaceholder.typicode.com/users/${userId}`
  const response = await fetch(userURL)
  const user = await response.json()
  return user.name
}

function getArticleId (comments) {
  const article = comments.previousElementSibling
  const data = article.dataset
  return data.postId
}

const details = document.getElementsByTagName('details')
for (const detail of details) {
  detail.addEventListener('toggle', async event => {
    if (detail.open) {
      const asides = detail.getElementsByTagName('aside')
      const commentsWereDownloaded = asides.length > 0
      if (!commentsWereDownloaded) {
        const articleId = getArticleId(detail)
        const comments = await downloadComments(articleId)
        console.log(comments)
      }
    }
  })
}

const posts = await downloadPosts()
const names = await getUserName()
console.log(posts)

for (let i = 0; i < posts.length; i++) {

  const main = document.querySelector('main')

  const article = document.createElement("article");

  // Set data-post-id attribute to the id field of the post
  article.setAttribute("data-post-id", posts[i].id)
  console.log(posts[i].id)

  const h2 = document.createElement("h2");
  h2.innerHTML = posts[i].title
  const aside = document.createElement("aside");
  aside.innerHTML = "by "
  const span = document.createElement("span");
  span.innerHTML = await getUserName(posts[i].userId)

  const p = document.createElement("p");

  //REPLACE BR WITH NEWLINE
  posts[i].body = posts[i].body.replace(/(?:\r\n|\r|\n)/g, "<br>");
  p.innerHTML = posts[i].body;

  const details = document.createElement("details");
  const comment = document.querySelectorAll('details');
    comment.forEach((comment) => {
  comment.addEventListener('toggle', logItem);
});
  const summary = document.createElement("summary");
  summary.innerHTML = "See what our readers had to say..."
  const section = document.createElement("section");
  const header = document.createElement("header");
  const h3 = document.createElement("h3");


  main.appendChild(article)
  article.appendChild(h2)
  article.appendChild(aside)
  aside.appendChild(span)
  article.appendChild(p)
  main.appendChild(details)
  details.appendChild(summary)
  details.appendChild(section)
  section.appendChild(header)
  header.appendChild(h3)

}
function logItem(e) {
  console.log('test')
}