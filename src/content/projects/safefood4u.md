---
title: "SafeFood4U"
date: 2023-02-17T19:34:47+13:00
description: "A proof of concept webpage for a small business"
tags: ["Frontend", "HTML", "CSS", "Vue 3", "Nuxt 3", "Node.js", "JS", "TS"]
live_link: https://www.safefood4u.com.au/
---

Over my summer break after my last year of university (2022), I worked off and on creating a portfolio website for my father's family business.

Although I'm not the greatest graphic designer, this opportunity gave me the chance to showcase what I had learnt in over university, develop some appreciation for CSS, as well as grow my design skills (and also kept me from getting bored over a long break).

After learning about accessbility features in university, I took efforts throughout the site to put different possible viewports and perspectives into consideration, leading to me using accessbility features provided by CSS (such as `rem` values, `vh`, `vw`, and `clamp`).

Because it was my first time using a fullstack framework like Nuxt, it took a while before I was able to fully implement my vision of the site as the cost of learning was quite steep initially. I believe I understand the framework much better now than before, but there is still much to be learnt.

It was also my first time creating my own, custom backend (whereas in my last project, Project Matched, I only interacted with the backend created by the other half of the team). This had its difficulties, but I was able to get there in the end (with the help of many YouTube tutorials).

As of writing, we are waiting on a few photos of the employees before the site can go live; but the plan is to learn and host through AWS Amplify.

Once done and ready to share, the link to this site will be listed: [here](https://safefood4u.com.au).

### Update (29/10/2023):

Since deploy, I decided to remove the backend, as I learnt the hardway the differences between the many website rendering options. To keep costs to a minimum, I decided to go with a static site, and in order to not waste too much time in setting up a separate server that would wait for requests from a feature I didn't see anyone using, I decided to cull the backend part. My idea was to use a REST API with SQLite and Prisma for interacting with the Frontend and a working prototype was created.
