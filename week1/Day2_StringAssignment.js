/*

Assignment Details: 
Given a string s consisting of words and spaces, return the length of the last word in the string.
Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:
Input: s = " fly me to the moon "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3: 
Write a function to check if two strings are anagrams.
Input: isAnagram('listen', 'silent')
Output: true
Input: isAnagram('hello', 'world') 
Output: false
Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.

Assignment Requirements: 
Example:1
1. Split the string into an array of words.
2. Find the last word in the array.
3. Calculate the length of this word.

Example:2
1. Trim the String
2. Split the String into Words
3. Identify the Last Word
4. Calculate the Length of the Last Word
5. Return the length

Example:3
1. Remove spaces and convert all letters to the same case
2. Sort the Characters
3. Compare Sorted Strings
4. Return the Result

*/

//Example-1
/*
function lengthOfLastWord()
{
    let s = "Hello World"
    const array = s.split(" ");

    console.log("Length of the last word '" +array[array.length-1]+ "'  is "+array[(array.length)-1].length)
}

lengthOfLastWord()

//Example-2

function trimAndGetLength()
{
    let s =  " fly me to the moon "
    const trimString = s.trim()
    const trimArray = trimString.split(" ");
    console.log("Length of the last word '" +trimArray[trimArray.length-1]+"' is "+trimArray[(trimArray.length)-1].length)
}

trimAndGetLength() */

//Example-3

function isAnagram(string1, string2)
{
    let str1 = string1.trim().toLowerCase().split('').sort().join('')
    let str2 = string2.trim().toLowerCase().split('').sort().join('')

    // str1 = str1.sort()
    // str2 = str2.sort()

    if (str1===str2)
    {
        console.log("They are Anagrams")
    }
    else
    {
        console.log("They are NOT Anagrams")
    }
}

let string1 = "silent"
let string2 = "listen"
isAnagram(string1, string2)