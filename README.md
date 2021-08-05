# Getting Started

## Prerequisites 

0. Familiarity with React and SPA concepts
1. Latest `node` and `npm` version
2. Familiarity with bulma (if you want to customize the blog's UI)
3. `node-sass` should be available globally
4. Web hosting to serve this app
5. Moogle account*

\**If you don't want to use a Moogle account, read the section titled `Working without a Moogle Account`.*

## Build and Deploy the app

1. Clone this repo
2. `cd` into the PROJECT_ROOT
3. `npm install`
3. `npm run build`
4. Place the contents of the `build` directory to your hosting
5. Visit your blog in the browser

# Next Steps

## Updating the CSS inside the PROJECT

If you want to regenerate `brand-styles.css` after editing `PROJECT_ROOT/sass/brand-style.scss`, you need to do the following steps

1. `cd $PROJECT_ROOT`
2. `npm run css-build`
3. This will replace the current `brand-style.css` css file inside `src/` with your version with the same name
4. Build and deploy the app

## Updating the CSS outside PROJECT_ROOT

If you want to compile `brand-style.css` from `PROJECT_ROOT/sass/brand-style.scss` outside the PROJECT_ROOT, follow [these intructions from Bulma](https://bulma.io/documentation/customize/with-node-sass/) with one minor change

1. Instead of using `mystyles.scss` from the Bulma website, start with `PROJECT_ROOT/sass/brand-style.scss` 

# Getting Oriented

[The Moogle blog](https://moogle.cc/blog/) is a single page React blog scaffolded using `create-react-app`. 

You can think of Moogle as the client for a headless Moogle CMS. The Moogle CMS consists of a series of APIs to download content and manage your backend. The two primary APIs - to get the list of blogposts and the content of single blogpost are given below.

### What this repo is not

This repo is the public facing portion of your blog. It presents a list of posts. Clicking on a linked post shows the full post. It does not include an Admin page for the blog. The admin page source code will be released separately.

## List of Blogposts

Moogle assumes that the list of available posts of a blog can be downloaded from `your-domain.com/index.json`. This setting is controlled by `$POSTS_URL` in `config.js`.

You can see what Moogle expects the content of `index.json` to look like @ https://blog.moogle.cc/index.json

## Blogpost data

Moogle pulls a blog post data in JSON format from following URL `your-domain.com/post?id=<post-id>`. This setting is controlled by `$POST_URL` in `config.js`.

Here is an [example JSON](https://blog.moogle.cc/post?domain=https://blog.moogle.cc&id=blogposts/1v6ouqlfo3mhn1mopg56ubbt2nqb2lvf6ri7ci01)


Here's a video showing you what post data looks like - https://youtu.be/QyeTGe8eaDI

So long as your API returns the same keys as the sample post, this react app should work out of the box.

# Working without Moogle Account

The simplest way to start using this app without creating a Moogle account is to make sure that

1. Your `index.json` and `constants.json` should match the structure of the output of ${POSTS_URL} and ${CONSTANTS_URL} respectively.
2. Your POST api, which returns the actual content of the blogpost, should match the structure of the output of ${POST_URL}

If you can ensure this, you should be able to use any backend you want.

For more advanced use cases, the source code is right here. Please fork the repo and make the changes you need to match your use case.

# Conclusion

That's all for now. See you in the issues list. Oh, and please keep the pull requests coming if you want to help grow this library.	