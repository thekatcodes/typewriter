const sentence = "hello there from lighthouse labs";
let timeoutDelay = 0;

for (const char of sentence) {
    setTimeout(() => {
        // print the char here
        process.stdout.write(char)
    }, timeoutDelay) // <= 1s delay to make it noticeable. Can dial it down later.
    
    timeoutDelay += 500;
}