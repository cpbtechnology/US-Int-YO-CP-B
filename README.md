# generator-cpb

A CP+B Boilerplate generator built on [Yeoman](http://yeoman.io).

## Steps for Updating (until this becomes automated)
Updating the boilerplate requires you first install the Yeoman Generator repo from and link it on NPM. You're smart though, you can handle it.

1.  Create a folder to house the Yeoman Generator
2.  Clone the Yeoman Generator repo into this folder (clone git@github.com:yeoman/generators.git)
3.  In Terminal, move to the newly created and folder
4.  In Terminal type: `npm link`
5.  Clone the CP+B Boilerplate Repo
6.  Rename `US-Int-YO-CP-B` to `generator-cpb`
7.  In Terminal, move to the generator-cpb folder
8.  In Terminal type: `npm link generator-cpb`
9.  (OPTIONAL) Create a bew folder and type `yo cpb`, the Boilerplate should be Created.
10.  Edit your favorite Files. Remember: If you add or remove files make sure to edit App/index.js to reflect these changes.
11.  Test your new creation! Go to a new foler and run `yo cpb`. Your changes should show up if all goes well.
12.  If everything is in a solid spot: Update /package.json to increase version number
13.  Commit + Push + Pull Request
14.  Once the Pull Request has been reviewed and accepted: `npm publish` to update npm
15.  run: `npm update -g generator-cpb` to update the generator.

For more info please read the Yeoman wiki section on testing generators:
https://github.com/yeoman/generator/wiki/Testing-generators

## Getting Started


### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-cpb  from npm, run:

```
$ npm install -g generator-cpb
```

Finally, initiate the generator:

```
$ yo cpb 
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).

## Modules

### What is a module?
A Module is a set of reusable code which we commonly use on projects.
Think of it like a plugin.

### How do I contribute a module?
Simply add the module to the modules.json files within `app/templates/modules.json`. 

A module added will look something like this:
`{
"name": "Example CP+B Module",
 "value": "MyGitHubUsername@MyModuleRepoName",
 "cpb-module": [
   {
     "module": "source/my-first-module.html",
     "cpb": "source/my-first-module.html" 
   }, {
     "module": "source/css/app/02.widgets.myFirstModule.scss",
     "cpb": "source/css/app/02.widgets.myFirstModule.scss" 
   }
 ]
}`

To break this down a bit:
	NAME: Name of your Module
	Value:	This contains where we need to look to find your module.
			To do this, we need your github name and the repo name in the format of:
			githubname@reponame
	CPB-Module:	This is the code needed to make your module work.
				The formatting of which should be:
				{
					"module": "LOCATION IN THE MODULE WHERE THE FILE EXISTS",
					"cpb": "LOCATION IN BOILERPLATE WHERE FILE SHOULE EXIST"
				}

### How do I build a module?
Check out the `cpb-module` generator. This will give you the basic boilerplate for creating a module.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
