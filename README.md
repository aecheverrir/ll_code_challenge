### To Get Started

#### Pre-requisites
1. NodeJS installed globally in the system.
https://nodejs.org/en/download/

2. Latest Chrome browser installed.

3. Latest JDK (required to set up the selenium server)

#### Setup Scripts
* Clone the repository into a folder
* Go inside the folder and run following command from terminal/command prompt
```
npm install 
```
* All the dependencies from package.json and ambient typings would be installed in node_modules folder.

#### Run Scripts

* set up the selenium server 

```
npm run webdriver-update
``` 

* Then start your selenium server
```
npm run webdriver-start
```

* This will create an output folder named 'typeScript' and transpile the .ts files to .js.
```
npm run build
```

* Finally, the test command will launch the Chrome Browser and runs the scripts.
```
npm test
```

---

# ll_code_challenge

[Instructions](#instructions)<br />

Clone the repo and push up your changes and share link.

Using Protractor + CucumberJS + TypeScript.

Fork this Repo<br />
Create a branch and name it with your "{firstname_lastname}_LL_challenge"<br />
Make sure to update your README to show how to run your scripts<br />
Fulfill the following two scenarios<br />
Once complete push your branch up

Feature: Automate<br /> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As an Engr. Candidate<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I need to automate  http://www.way2automation.com/angularjs-protractor/webtables/<br /> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;So I can show my automation capabilities<br />
    
Scenario: Add a user and validate the user has been added to the table<br />

Scenario: Delete user User Name: novak and validate user has been deleted<br />
