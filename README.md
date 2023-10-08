
# Tailhead 
 In continuation of my previous Tailhead Social Project [Tailhead_Socials](https://github.com/behldevansh/Tailhead_Socials),introducing [Tailhead_Forums](https://github.com/behldevansh/Tailhead_Forum)



## Tech Used
- NextJS for Server-side Rendering (SSR)
- Google Authentication using NextAuth
- Tailwind
- Prisma to write data in efficein and secure way. 

## Features
- Login with Google using NextAuth.js.
- You have a Custom feed about pets and interests.
- A Homepage displaying all the posts.
- An option to upvote, or downvote a post.
- A dedicated page for reading and commenting on posts.
- Upload Image, text, code .


yarn prisma db push
yarn prisma generate

## Getting started

To get started with this project, run

```bash
  git clone git@github.com:behldevansh/Tailhead_Forum.git
```

and copy these .env.example variables into a separate .env file:

```bash
DATABASE_URL=
NEXTAUTH_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

REDIS_URL=
REDIS_SECRET=
```

```bash
  npm i
```