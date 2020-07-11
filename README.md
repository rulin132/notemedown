# Prerequisites
This tutorial will need you to have a few simple things set up already. Don't worry, nothing special, just the basics, and I'll link it all below for you to see, and make sure you have, before moving on.

* [AWS account](https://aws.amazon.com/console/)
* [Node.js and npm](https://nodejs.org/en/download/)
* [Serverless Framework](https://www.serverless.com/)

1. Install and configure the Serverless Framework
$ npm install -g serverless
Note: Prefix the command with sudo if you're running this command on Linux.
$ sls config credentials --provider aws --key PUBLIC_KEY --secret SECRET_KEY
Make sure to add your IAM User's public and secret key instead of the placeholders I specified above. If you skipped this part above, here's the official guide in the AWS docs.

3. Installing dependencies
npm install

Ready to deploy!
Switch back to the terminal window. By running one simple command your app will be deployed.
$ sls deploy


# nodejs-aws-lambda-travisci
This is a `Node.js` boilerplate/startKit for project needed to integrate CI/CD process within `github` -> `travisCI` -> `aws lambda`. 
 
Remark
 - all directory inside `./lambda` will execute `yarn install` and `yarn deploy` action
 - the lambda deployment process is ruled by [AWS Lambda Deploy(Zip)](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-create-deployment-pkg.html)
 - please spend some time to understand `IAM` and `policy` in `AWS`, which may safe/destroy you in security level


## Step 1 - creating a lambda function
creating a lambda function, `notemedown`

![image](https://user-images.githubusercontent.com/5538753/60311897-c3715880-998b-11e9-9d53-d3e4ed070773.png)


## Step 2 - create and set up deployment user
create user with policy `lambda full access`, getting the __**access_id**__ and __**secret**__ from `IAM`

![image](https://user-images.githubusercontent.com/5538753/60277835-eae70780-9930-11e9-9307-602c86734d30.png)

and setup ENV variable

```
$ export AWS_ACCESS_KEY_ID="yourkey"
$ export AWS_SECRET_ACCESS_KEY="yoursecret"
```

## Step 3 - local configuration

### Step 3.1 - set up lambda name
set up lambda function name on

 - `./lambda/notemedown`
 - set your name here: `./lambda/notemedown/package.json`

![image](https://user-images.githubusercontent.com/5538753/60279628-0273bf80-9934-11e9-91ec-a3b1f8262ec8.png)


### Step 3.2 - set up lambda region
and setup region

![image](https://user-images.githubusercontent.com/5538753/60312018-44305480-998c-11e9-904c-a71528852cae.png)


### Step 3.3 - set up TravisCI
and setup region

![image](https://user-images.githubusercontent.com/5538753/60312018-44305480-998c-11e9-904c-a71528852cae.png)


## Step 4 - run
clone this project [https://github.com/p-tool/nodejs-aws-lambda-travisci](https://github.com/p-tool/nodejs-aws-lambda-travisci) and run

```
$ npm run deploy
// or yarn deploy
```

## Conclusion
Live note-me-down travisCI [https://travis-ci.org/github/rulin132/notemedown](https://travis-ci.org/github/rulin132/notemedown), which is connected to the sample Github Repo [https://github.com/rulin132/notemedown)


## Reference
 - https://github.com/marcenacp/hello-world-lambda
 - https://github.com/p-tool/nodejs-aws-lambda-travisci
 - https://docs.travis-ci.com/user/deployment/lambda/
 - https://travis-ci.org/p-tool/nodejs-aws-lambda-travisci
