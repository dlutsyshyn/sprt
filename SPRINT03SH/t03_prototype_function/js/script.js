Object.prototype.removeDuplicates = function(){
        var h = this.split(" ")
        let u = /[\w.?]/;
        let b = [];
         for (var x = 0;x< h.length; x++){
             if(!b.includes(h[x]) && u.test(h[x])){
                 b.push(h[x]);
             } 
            }
    return b.join(" ");
    }  

let str = "Giant Spiders?       What’s next? Giant Snakes?"; 
console.log(str);

str = str.removeDuplicates();

console.log(str);

str = str.removeDuplicates(); 

console.log(str);

str = ". . . . ? . . . . . . . . . . . "; 
console.log(str);

str = str.removeDuplicates();
console.log(str);