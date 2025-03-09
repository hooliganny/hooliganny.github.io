---
title: "Ghoti Translator"
date: 2025-03-07T19:30:00+13:00
description: "A translator that makes English even worse"
tags:
  [
    "Frontend",
    "HTML",
    "CSS",
    "C#",
    ".NET",
    "GitHub Pages",
    "GitHub Actions",
    "Blazor WASM",
    "JS",
  ]
live_link: https://hooliganny.github.io/ghoti-translator
---

While searching for jobs and being inundated with Seek and LinkedIn requests asking me to apply for C# jobs, I got the idea to actually learn one of the most popular languages in software development (strange idea, I know). Having always been interested in linguistics (and I had been watching a Vsauce video just the night before, titled "Forbidden Spellings" - which explained the [Ghoti thought experiment](https://en.wikipedia.org/wiki/Ghoti)), I got the idea to make my own Ghoti translator that would take normal English and output something that _could_ make sense to the average person.

I knew that if I were to make a website for this, I would deploy it statically, as I didn't want to pay for server costs for what should be a simple HTML/JS site. Following this, I was reminded of one of my previous projects, [The Doomsday Rule](/projects/doomsday-rule), which I also hosted statically and for free on GitHub Pages. Furthermore, I knew C# offers the Blazor framework, which enables web development using .NET, so I spent some time researching whether it was possible to build a .NET app that was fully client-side.

Once I figured out it was possible, I learned what was necessary of C# and the .NET CLI to start development. Along the way, I got assistance from various Stack Overflow forums and ChatGPT, but where applicable, I tried to work it out myself. ChatGPT also helped me convert some resources I found online into data structures I could use to store possible phoneme translations and their corresponding examples. If I had to manually create each entry, it would've taken me a while... English is not a simple language...

Currently, the Ghoti translator works based on the spelling of the input, as opposed to the actual sounds of the inputted word(s), and this might be something worth coming back to. The visuals are also something I might want to revisit in the future; however, they serve their purpose well enough as they are now.

Overall, I'm happy with the way it turned out. It was a fun experience learning a new language in a hands-on environment, and it was definitely helped along by the fact that it was somewhat unique, so it felt like I was creating something special.
