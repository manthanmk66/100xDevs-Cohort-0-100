/*
File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was

hello     world    my    name   is       raman
After the program runs, the output should be

hello world my name is raman

*/


//InBuild Function of JavaScript
const fs=require("fs")



const cleanfile=async (filepath)=>{
    const fileContent=fs.readFileSync(filepath,"utf-8");
    const cleanedContent=fileContent.split(/\s+/).join(' ');

    fs.writeFile(filepath,cleanedContent,"utf8",(err)=>{
        if(err){
            console.log("Soemthing went Wrong");
        }
        else{
            console.log("Successfully updated")
        }
    })
}
cleanfile("./demo.txt");
