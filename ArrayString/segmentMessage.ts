// Coding exercise
// You are developing a text messaging system that needs to handle message segmentation. 
// Given a message string and a maximum segment length k, 
// write a function that splits the message into segments while following these rules: 1) 
// Each segment must be exactly k characters long (except possibly the last segment) 2) 
// Words cannot be split across segments 3) If a word cannot fit in the current segment,
//  it should be moved to the next segment 4) Extra spaces between words should be removed, 
//  but segments should be padded with spaces at the end to maintain length k. 
//  If a single word is longer than k, return an empty array.
// EXAMPLE 1
// Input:
// message='The quick brown fox jumps', k=10

// Output:
// ['The quick ', 'brown fox ', 'jumps ']

// Explanation:
// Message is split into 3 segments of length 10, preserving words and padding with spaces

// EXAMPLE 2
// Input:
// message='DataStructures', k=8

// Output:
// []

// Explanation:
// Single word is longer than k characters, so return empty array

function segmentMessage(message: string, k: number) : string[]{
    if(message.length < 0 || k < 0) return []
    let words = message.split(' ')
    console.log('words', words)
    let res: string[] = []
    let curr = ''
    for(let word of words){
        if((curr + word).length + (curr ? 0: 1) > k){
            res.push(curr+word)
        }else{
            curr = curr + word + (curr ? ' ' : '') 
        }
    }

    return res
}
const message='The quick brown fox jumps', k=10
console.log(segmentMessage(message, k))