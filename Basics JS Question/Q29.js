// Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

let fileExtension = (userInput) => {
    console.log(userInput.split(".").pop());
}

console.log(fileExtension("a.txt"));