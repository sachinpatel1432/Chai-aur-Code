const express = require('express')
require('dotenv').config();

const app = express()
const port = 3000



const githubdata = {
  "login": "sachinpatel1432",
  "id": 152507178,
  "node_id": "U_kgDOCRcTKg",
  "avatar_url": "https://avatars.githubusercontent.com/u/152507178?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/sachinpatel1432",
  "html_url": "https://github.com/sachinpatel1432",
  "followers_url": "https://api.github.com/users/sachinpatel1432/followers",
  "following_url": "https://api.github.com/users/sachinpatel1432/following{/other_user}",
  "gists_url": "https://api.github.com/users/sachinpatel1432/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/sachinpatel1432/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/sachinpatel1432/subscriptions",
  "organizations_url": "https://api.github.com/users/sachinpatel1432/orgs",
  "repos_url": "https://api.github.com/users/sachinpatel1432/repos",
  "events_url": "https://api.github.com/users/sachinpatel1432/events{/privacy}",
  "received_events_url": "https://api.github.com/users/sachinpatel1432/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "👋 Hi, I'm Sachin Patel Aspiring Software Engineer | Problem Solver | Lifelong Learner\r\n\r\n🎓 Student at: Dr. APJ Kalam Technical Univ",
  "twitter_username": null,
  "public_repos": 21,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-11-30T13:53:27Z",
  "updated_at": "2025-08-29T09:04:49Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.send('Welcome to the Home Page!')
})

app.get('/about', (req, res) => {
    res.send('This is the About Page.')
})

app.get('/github', (req, res) => {
    res.json(githubdata);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
