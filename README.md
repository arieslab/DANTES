<p><img src="https://github.com/arieslab/DANTES/blob/main/logotipo-dantes.png?raw=true" width="100"></p>

# DANTES
Detection ANd refactoring of TEst Smells

DANTES is a web tool designed to detect and refactor test smells in Java unit test code using JUnit. DANTES currently provides detection and refactoring coverage for 11 different types of test smells and is able to refactor a whole test class with a single button click.

## Dependencies
In order to use DANTES two dependencies are needed:
* Java: available in www.java.com
* NodeJS: available in www.nodejs.org

## Installing
The installation process for DANTES consists in the following steps:
* Download or clone the repository
* Move to the repository's folder
* Open terminal on the folder
* Run ````shell npm install````
* Run ````shell node app.js````
* Open a browser at http://localhost:3000/

As follows:
````shell
git clone https://github.com/arieslab/DANTES.git
cd DANTES
npm install
node app.js
````

## Using the tool
Here's how the page will look like. Marked in red circles from one to seven are some important points in the tool's page:
![image](https://github.com/arieslab/DANTES/assets/71935065/0c67a526-ddfa-4379-8dd7-cfb35bd7b684)

1. Here we have the main text box for the tool, here the user can write or paste the test code that the tool should analyze.
2. After clicking the green Submit button, the tool will take the code in the text box and detect test smells.
3. Click the upload a file when you want to paste the content of a file to the tool's text box.
4. This dropdown menu can change how the test smells detect are going to be organized: select "Order by Smell Type" to order alphabetically, or select "Order by Position in Code" to order the detected smell by order of appearance in the code
5. The tool will update this box with all the detected smell after a code is sent for analyzing
6. Here will be displayed the submitted code with the detected code smells highlighted in red
7. After a refactoring is made with DANTES, this box will be updated showing the refactored line in green.

After submitting test code, the box annotated with the number 5 will be updated like so:
![image](https://github.com/arieslab/DANTES/assets/71935065/5c554a73-5b73-4095-8f1d-7415c5cbc4fe)
1. Above the box, this line will appear if there was no problem with the detection and will inform how many test smells were found in the provided code.
2. Within the box, each line will correspond to a different test smell found in the code, for each test smell will be provided the name of the smell, the method in which it was found and which line.
3. For each test smell a green button will be generated to refactor this specific smell, clicking it will apply the refactoring strategy named.
4. Click this button to refactor all found test smells in the file.
