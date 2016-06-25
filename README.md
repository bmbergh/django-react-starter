#Django React Starter

##What is Webpack?
Webpack is a module bundler: A tool that can analyze your project's structure, 
find JavaScript modules and other assets to bundle and pack them for the browser

##Webpack vs Grunt / Gulp
Webpack is different from task runners and build systems such as Grunt and Gulp 
because it's not a build tool itself, but it can replace them with advantages.

Webpack analyzes your project as a whole. Given a starting main file, 
Webpack looks through all of your project's dependencies (by following require 
and import statements in JavaScript), processes them using loaders and generates a bundled JavaScript file.

##Getting Started
Run this in your directory `git clone https://github.com/bmbergh/django-react-starter.git yourAppName`
Run `npm install` to install all the dependencies for this project.

This projected runs with just webpack no gulp or grunt needed. 
Look at the `package.json` file to see the commands you can run different uses.

##About npm start
`npm start` will start the project and is best for *development*.

**In `package.json` file**

`inline` option adds “Live reloading” for the entire page. `hot` option enables “Hot Module Reloading” that tries to reload just the component that’s changed (instead of the entire page). If we pass both options, then, when the source changes, the webpack-dev-server will try to HMR first. If that doesn’t work, then it will reload the entire page. This is being used in 
the `package.json` file so you won't have to remember that ;) 

`"start": "webpack-dev-server --progress --inline --hot"` 

##Conclusion
This should hopefully give you a better understanding of WebPack and help you get started. 
