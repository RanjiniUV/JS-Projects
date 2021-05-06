# JS-Projects
# PROJECT : DISPLAY PROGESSIVELY RENDERNG GRID OF VIRTUAL CARDS

# OPEN THE WEBSITE USING THE LINK BELOW.
https://ranjinirao91.wixsite.com/portfolio

## Requirements

For development, you will only need Node.js installed on your environement.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v13.10.1
    $ npm --version
    6.14.2

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## Install

    $ git clone https://github.com/RanjiniUV/JS-Projects.git
    $ cd PROJECT
    $ npm install

## Simple build for production and development environment

    $ npm run build


## Start & watch

    $ npm start



## Update sources

Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    $ git pull
    $ npm prune
    $ npm install


## Run on local host

The built package must run on the local host http://localhost/8080


## Few important things regarding the project are mentioned below.

Regarding the search functionality, since there was no mention of the consumption of Elder Scrolls Legends search API, the search is currently localised.
