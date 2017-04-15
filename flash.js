var BasicCard = function( text, pattern){
  this.front = text;
  this.back= pattern;


}




var  ClozeCard = function(text, pattern){
   this.fullText = text;
   this.cloze = pattern;
   this.posit = -2 ; 
   this.partial = "Opps!, This does not work!"; 

   this.clozeDeletionSUB = function( fullText, inPattern){
       var position = bruteforceMan(this.fullText, this.cloze); 
       if(position == -1){ this.posit = -1;} 
       if(position != -1 ){
	        this.posit = position;
	     	var lastWord = this.posit+this.cloze.length;
	        var temp1 = this.fullText.substring(0,this.posit);
	     	var temp2 = this.fullText.substring(lastWord,this.fullText.length )
	        var emptyWord = "";
	        for( var i = 0 ; i < this.cloze.length ; i++)
	            emptyWord += " _"
	        var partialText = temp1+ emptyWord +" "+ temp2;
	        this.partial = partialText;

            
       }
     } 
  
   this.clozeDeletionSUB(this.innerText,this.cloze );
  
   this.clozeDeletion= function (texts, key ){
            var reVal = null; 
            var index = bruteforceMan(texts, key); 
            if(index == -1){
            	 reVal = "Erorr";

             }
            if(index != -1 ){
                 var lastWord = index+key.length;
                 var temp1 = texts.substring(0,index);
	     	     var temp2 = texts.substring(lastWord,texts.length );
                 reVal = temp1+ temp2; 

            }

            return reVal;

   } 
    



} 






function bruteforceMan(text, pattern) 
{
  var n = text.length; 
  var m = pattern.length;
  var result = -1 ;
  for(i = 0; i < n; i++) {
    for(j = 0; j < m && i + j < n; j++) 
      if(text.charAt(i + j) != pattern.charAt(j)) break;
    
    if(j == m) result = i; 
  }
  
  return result ; 
  

}

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

console.log( firstPresident.front);
console.log( firstPresident.back);



var newcloze = new ClozeCard("George Washington was the first president of the United States.", "Washington");

console.log( newcloze.fullText);
console.log( newcloze.cloze);
console.log( newcloze.partial);
var textMethod = newcloze.clozeDeletion("This doesn't work. Goodbye Brother.", "Goodbye");  
console.log(textMethod);