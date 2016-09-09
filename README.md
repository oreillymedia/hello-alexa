

# Getting started

* Install node (v. 5 or later)
* Clone this repository
* run `npm install`

# Setting up your keys

Create a file called `.env` to store all the various keys you'll need, like this:

```
AWS_KEY=<your aws key>
APP_ID=<your app id>
```

In your program, you'll be able to refec to these values like this `process.env.AWS_KEY`.  Note that we add the `.env` to `.gitignore` so that you don't accidentally check your keys into your github repo, which would be bad!
