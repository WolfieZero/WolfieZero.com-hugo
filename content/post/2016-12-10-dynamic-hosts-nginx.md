---
title: Dynamic Hosts with Nginx
author: Neil Sweeney
type: post
date: 2016-12-10T12:30:08+00:00
url: /blog/dynamic-hosts-nginx/
feature_image:
---

I’m sure I'm not the only person who want's to throw up a site on the web quickly. Further the point, I don't want to worry about configuring a server either. All I want to do is have a folder on my server that points to the domain it says and access it.

The flow should be simple. If a request for "boom.wolfiezero.com" hits my server, use the folder `/var/www/boom.wolfiezero.com`. Simple right?

## Direct Host Request to Folder of the Same Name

Within `/etc/nginx/sites-avaliable/` create a file called `zzzz-default` (so it's always at the end of the tree). Within that file add the following server block rule set:

<pre><code class="conf">server {
    listen  [::]:80;
    listen  80;

    server_name     ~^(.+)$;
    set             $file_path $1;
    root            /var/www/$file_path;
    index           index.html;
}
</code></pre>

Write that file and restart the Nginx service (`sudo service nginx restart`). Done!

That will now take the requested domain and find the folder that matches. You can add any additional rules you may need such as for reading PHP files or setting a deeper web root. I typically do have PHP processing on and I always set the root to be in a public folder, in case I want a private area.

## Removing the "www"

If you want to take it to the next level, you can even set it so that if a request like "www.wolfiezero.com" or "www.boom.wolfiezero.com", the "www." part is removed.

At the top of the file, before our current server block, add the following:

<pre><code class="conf">server {
    server_name     ~^www\.(.+)$;
    set             $file_path $1;
    return          301 $scheme://$1$request_uri;
}
</code></pre>

It just makes things a little bit cleaner but also could help with SEO needs.

## Just a Note

I do like having a dynamic host on my server for ease, it's convenient. But for anything major I'm working on I would create a dedicated host configuration file. It gives me that finer control and I can easily assign a security certificate to it as well. This method is just for ease when I want to quickly show somebody something and then probably delete it again.
