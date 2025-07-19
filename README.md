<p><img src="https://github.com/arieslab/DANTES/blob/main/logotipo-dantes.png?raw=true" width="528"></p>
<!--# DANTES-->

[Read this in Portuguese / Ler em Português](README.pt.md)

## Detection ANd refactoring of TEst Smells (DANTES)

DANTES is a web tool designed to detect and refactor test smells in Java unit test code using JUnit. Currently, DANTES offers detection and refactoring coverage for 11 different types of test smells and is capable of refactoring an entire test class with a single button click.

## Dependencies
To use DANTES, you need to have the following dependencies installed:
* Java: available at www.java.com
* NodeJS: available at em www.nodejs.org

## Installation
O processo de instalação consiste nos seguintes passos:
* Download or clone the repository
* Navigate to the project folder
* Open a terminal in the project folder
* Run the command ````npm install```` in the terminal
* Run the command ````node app.js```` in the terminal
* Open a browser at the address http://localhost:3000/

````shell
git clone https://github.com/arieslab/DANTES.git
cd DANTES
npm install
node app.js
````

## Using the Tool
When opening the tool's page, this should be its structure. Marked in red circles numbered from one to nine are some important points of the tool:
![image](https://github.com/arieslab/DANTES/assets/71935065/e7850030-e2e1-425d-8b24-54a37207c79c)

1. This is the main text box of the tool; here the user can write or paste the test code they wish to submit for analysis;
2. With this button, the user can switch the theme between light and dark;
3. The "Detect" button must be clicked for the tool to perform test smell detection on the provided code;
4. The user can click the "Upload a file" button to choose a file and copy its content directly into the text box;
5. In this dropdown menu, the user can select different ways to sort the display of the found test smells:
   * Select "Order by Position in Code" to sort according to the order of appearance of the smells in the code;
   * Select "Order by Smell Type" to sort by the alphabetical order of the test smell names;
6. After the test smells are detected, this box will be updated with a list of all found test smells;
7. This box will display the code submitted for analysis, with the lines containing test smells marked in red;
8. After a refactoring is performed, the refactored code will be displayed in this box, with the refactored lines marked in green;
9. The user can click this button to copy the entire content of the displayed code to the clipboard.

After submitting the code and performing the detection, the box marked with number 6 will be updated as such:
![image](https://github.com/arieslab/DANTES/assets/71935065/9f01309a-21da-4593-a539-481c40882075)

1. Above the box, this line is updated to display how many test smells were found in the submitted file or if there was any errors during execution;
2. Inside the box, each line corresponds to an occurrence of a test smell found in the code. The line details the type of smell, the method where it was found, and the line number;
3. For each smell, a green button is provided for the refactoring to be performed for that smell. To execute it, simply press the button, and the tool will perform the refactoring named on the button;
4. By clicking this button, all test smells found in the code will be refactored at once.