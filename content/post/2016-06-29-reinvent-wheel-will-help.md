---
title: Reinvent the Wheel, It Will Help
author: Neil Sweeney
type: post
date: 2016-06-29T14:32:06+00:00
url: /blog/reinvent-wheel-will-help/
feature_image: /images/blog/wheels.jpg
---

_Let me start this with a mini-rant before I talk about development&#8230;_

The saying "You shouldn’t reinvent the wheel" I think is complete bull and a bad choice for any reasoning without research.

Look at that saying _reinvent the wheel_; are we expected to think that nobody has looked at the wheel and thought "I know what could improve this"? When the first wheel was invented it was thought to be a rock that was carved into something circular so early humans can push things rather than drag. It could have been just to put dinosaurs on to race them but what do we know? But it was most likely a rock. Let's face it, the original form is functional but massively flawed in certain executions.

For a start, a rock is a pretty crap material for a wheel on road surfaces&#8230; do you know how un-smooth a car ride is having a solid mass connecting to the road surface? Also, the issue with [breaking][1] and [how loud][2] a car ride would be? The wheel in its original form has been re-thunked over many interactions to what we have today with the rubber wheel pumped with air. It was refined and reinvented over the years to produce something usable, or rather, better suited for its needs.

So it's safe to say we needed to reinvent the wheel to improve the execution.

Those people who say don't reinvent the wheel; unless they have rocks as car wheels, they're hypocrites.

## What the hell am I getting at here?

Course the whole "reinvent the wheel" is an analogy of web development today. We have an abundance of frameworks and CMS that all do very similar jobs. We are spoilt for choice and often use what's already out there without a second thought.

I think we're often criticised that we could reuse options that are already out there. Whilst that could be very true, the idea that we shouldn't is wrong. Often I have used frameworks or code-bases that work well, but for whatever reason, not perfectly. Why shouldn't I build my own so that it's perfect rather than just does the job?

One thing I did try and build for myself was this blog. Rather than use [WordPress][3] or [Ghost][4], I wanted my own custom CMS, so I grabbed Laravel and started building. I managed to build something that worked well but scrapped it because I felt it wasn't the correct solution. There was also a factor of for my own blog I didn't want to maintain all the code.

But it was a really insightful process. All the time we use pre-built solutions I didn't spot what was wrong with it and accepted that as a solution. Going through making my own I thought "Why does WordPress do it like that, why not like this?". I made those improvements in my own system (and sort-of into WordPress later on).

It also taught me how a system should work. You're not accepting that something just works but rather _why it works_. I originally learned HTML by being thrown with a bunch of code, told to break it down then find out what does what. Building your own system based on others forces you to do that. You start to ask "How does WordPress make quasi-cron jobs?" so you bust open the code and you find out how.

Although I did go back to using WordPress, I started the invention process again. Rather than using the standard WordPress system I looked at using my own build that's more suited to version control. I looked at solutions out there but wasn't completely happy with they worked. Solutions like [Roots][5] were all awesome but didn't quite cover bases how I wanted them to. So I went ahead and broke each one's code down and took what I thought was good. This meant I was able to build something that was to my liking but not wholly a rebuild, more adapting.

<div class="oversize oversize--overlay">
  <img src="https://i1.wp.com/wolfiezero.com/uploads/2016/05/tank.jpg" alt="Tank `Wheels`" />
</div>

## Adapt Over Reinvent

You could say that we haven't reinvented the wheel over the years but rather adapted it? Maybe the original statement holds true? I don't believe so still. We have Skidoos that work on skis and caterpillar tracks (wheel inside but not in contact). We are soon approaching hover tech, removing a physical contact altogether.

It's best to say not be scared but to roll with your own ideas, adapt current ideas. It will make you a better developer to know how to break and rebuild code or to completely scrap something and try your own. It's all a learning process; it's important to understand what we (or the application) are doing when we work with something but also not to take everything at face value.

"Is WordPress right for this content based site or should I roll with our own system?" I've had discussions before and been shot down as we couldn't reinvent the wheel. Sometimes it makes logical sense to use something that is there but the practicality isn't there.

The key is to make sure you can adapt your code. To reinvent is a lengthy process or reusing isn't efficient. Adapting any code is necessary as a developer to not enforce reuse in the wrong situation or over-engineering a solution.

Look at your options critically and don't just accept that an existing solution is a correct solution. Sometimes a wheel made of rock really is crap and you need that rubber wheel with air.

## What do you think?

Should we just stick to using tools and solutions that are already out there? Is good to work from a clean slate? Or maybe the middle ground of adapting solutions is the way forward? Let me know on [Twitter (@WolfieZero)][6] as I'll be interested to hear other views.

## WordPress Solution?

I made reference to a WordPress solution and you can find that on [GitHub at small-skeletal/wordpress][7]. In the future, I do plan to explain it in more detail but feel free to have a look now and ask any questions.

 [1]: https://www.youtube.com/watch?v=zA6MUlVNkLM
 [2]: https://www.youtube.com/watch?v=u02SFvuDnqE
 [3]: https://wordpress.org/
 [4]: https://ghost.org/
 [5]: https://roots.io/
 [6]: https://twitter.com/wolfiezero/
 [7]: https://github.com/small-skeletal/wordpress
