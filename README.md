

# Prerequisites

* Install node (v. 5 or later)
* An AWS account on Lambda, Alexa


## Setting up your skill

* Log into the [Alexa Developer Portal](https://developer.amazon.com/alexa)

<img src="images/alexa-skills-portal.png" width="100%"/>

# Getting started

* Clone this repository
* run `npm install`

# Setting up your keys

Create a file called `.env` to store all the various keys you'll need, like this:

```
AWS_KEY=<your aws key>
APP_ID=<your app id>
```

In your program, you'll refer to these as `process.env.AWS_KEY`, `process.env.APP_ID`, etc.  

Note that we add the `.env` to `.gitignore` so that you don't accidentally check your keys into your github repo, which would be bad!
