---
title: Visual Studio Code – I think this is the one!
author: Neil Sweeney
type: post
date: 2017-01-16T22:57:38+00:00
url: /blog/visual-studio-code-think-one/
feature_image: /images/blog/vsc.png
---

I have been an avid fan of using Atom for some years now. During that time I’ve moved from text editors to IDEs and back again, always finding myself back to Atom. But I’ve started looking towards [Visual Studio Code][1] as a new tool to solve issues I’m having. It’s been quite a surprise!

Before I get going, a point to make. This **isn't** a sponsored post at all and I've not reached out to Visual Studio Code or Microsoft for anything. This is pure me.

For almost 10 years, I’ve worked with PHP and front-end tech only skimming other languages. Nothing major; small to large site development and app stuff. Recently I started a new job at [Dootrix][2] as a "software engineer". Whilst I do specialise in web development still, it’s starting to take some interesting turns. It's looking like I’ll be doing C# stuff, more advanced JavaScript and Python/Django as well plus carrying on PHP. (Aside, [Dootrix is looking for new staff][3])

<div class="oversize">
  <img src="/images/blog/vsc.png" alt="Visual Studio Code" />
</div>

My code life is more open now.

As I said, I’m a fan of Atom but it’s limitations as a more advanced code editor have been nagging at me. The more I see full IDEs in action the more I realise how it helps with being more efficient of as a developer. But with different languages, it’s hard to settle on a particular IDE that will cover all the bases. I tried with Atom, but each extension to help with that environment seems to be a little of an uphill battle. It still works as a tool to write code and its syntax highlighting is almost spot on. Anything more than that it’s a case of wedging the use case in.

## ItelliSense

This is where Visual Studio Code starts to step in. The main selling point has to be is the [IntelliSense][4]. Plenty of editors have the option for auto-completing your code. VS Code's, or rather Microsoft's, IntelliSense has got it right.

One thing I found with Atom is the scope of its auto-completion. It's limited to either the built-in syntax, open files or a partial scope of the project. This isn't enough. But IntelliSense gives you all the scope you need with nice inline documentation. It's damn fast too. I've not come across any bugs with it. It's also nice that you can go to definitions. With a CMD+click on the definition, it will take me to that function, class or variable in the codebase.

That was such a big selling point for me. This ability to have that code intelligence to auto-complete without heavy configuration. It was a massive deal for me. But with debugging built in, out of the box, as well, it makes life easier.

## Debugging

A big thing in IDEs is their ability to debug and show errors in your environment. This is rather than screen dumping, a common web development practice. Software developers will be scratching their heads at this thinking "How else do you?" But web developers know the struggle of `alert();` and `console.log()` or printing from a backend. These are somewhat features still not quite perfected, yet. But in Visual Studio Code, you can run the project from the editor, set breakpoints and see values passed.

This is becoming more invaluable to me that I can do so much more in my editor regarding debugging. Trailing through the code to match up the error is a pain, so getting VS Code to do that for me is amazing.

## Faster, Better, More Efficient

It felt like it was a hard choice to relegate Atom to a text editor and promote VS Code to my main workflow. Unfortunately for Atom, it was a better fit and I'm much more efficient for it. I'm sure Atom could reach the realms that VS Code has achieved for me. But due to buggy third-party extensions to get there, it's not workable. It's not to say I will be using VS Code for writing text, maybe a bit of markdown. But it doesn't feel right as of yet in VS Code.

Unless you are using Vim and likely wouldn't move code editors anyway, I recommend you [give Visual Studio Code a try][5] for two weeks. It's quick, it's easy, it's very stable, and it's helped me improve my efficiency as a developer.

 [1]: https://code.visualstudio.com/
 [2]: http://dootrix.com/
 [3]: http://dootrix.com/team/#vacancies
 [4]: https://code.visualstudio.com/docs/editor/intellisense
 [5]: https://code.visualstudio.com/Download
