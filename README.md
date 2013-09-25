# [APIs.is](http://docs.apis.is) - Documentation

This repository holds documentation for the [APIs.is project](https://github.com/kristjanmik/apis).

Since you're here (and still reading), you probably already know what this is all about, and ready to get down to business, but in order to simplify all our lives check out these few pointers.

[![Build Status](https://travis-ci.org/kristjanmik/apis-docs.png?branch=master)](https://travis-ci.org/kristjanmik/apis-docs)

## Getting started

First of all, this is running on a pretty simple node server using [jade](http://jade-lang.com/) for templating and [less](http://lesscss.org/) for styles. To get it up and running, simply clone this repo to your local directory, install packages and start the app.

```
$ git clone git://github.com/kristjanmik/apis-docs.git
$ npm install
$ npm start
```

If you prefer to start it up without supervisor, simply use the good old

```
$ node app.js
```

## What files to edit

Assuming you're planning to either update current documentation or adding documentation for a new endpoint, you'll need to know that each endpoint has an individual [jade](http://jade-lang.com/) file within `./app/views/apis/` which is included into `./app/views/home.jade`.

## Adding a new Endpoint

### Step by step

1. View current endpoint docs for structure and layout.
2. Create a new *.jade file within `./app/views/apis/`, preferrably using the same name as the endpoint in question.
3. Include your new file into `./app/views/home.jade`
