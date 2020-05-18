
var qTitle=document.getElementById("questionTitle");

var option1=document.getElementById("op1");

var option2=document.getElementById("op2");

var option3=document.getElementById("op3");

var option4=document.getElementById("op4");

var Sc=document.getElementById("sp2");

var Ul=document.getElementById("ull");

var btn=document.getElementById("butt");


var app ={
    
    questions:[
        
    {q:'HTML is what type of language ?',options:['Scripting Language','Markup Language','Programming Language','Network Protocol'],answer:2},
    {q:'Who is Known as the father of World Wide Web (WWW) ?',options:['Robert Cailliau','Tim Thompson','Charles Darwin','Tim Berners-Lee'],answer:4},
    {q:'What tag is used to display a picture in a HTML page?',options:['picture','image','img','src'],answer:3},
    {q:'HTML web pages can be read and rendered by?',options:['CompilerB','Server','Web Browser','Interpreter'],answer:3},
    {q:'HTML stands for !',options:['Hyper Text Markup Language','Hige  Text Markup Language','Hyper Tabular  Markup Language','None of these'],answer:1}

    
   

        
        ],
        index:0,
            load:function(){
                
             /*   qTitle.innerHTML=this.questions[this.index].q;
                op1.innerHTML=this.questions[this.index].options[0];
                 op2.innerHTML=this.questions[this.index].options[1];
                op3.innerHTML=this.questions[this.index].options[2];
                op4.innerHTML=this.questions[this.index].options[3];
                Sc.innerHTML=this.questions.length+"/"+this.score;*/

                
                if(this.index<=this.questions.length-1){
                        qTitle.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                           this.scoreCard();
                        }
                        else{

                        qTitle.innerHTML="Quiz Over.........!!!" ;
                            
                        option1.style.display="none";
                            
                        option2.style.display="none";
                            
                        option3.style.display="none";
                            
                        option4.style.display="none";
                            
                        btn.style.display="none";
                        }
                
                
                
                
                
                
            },
            check:function(ele){
                   
                         var id=ele.id.split('');
                         console.log(id);
                         if(id[id.length-1]==this.questions[this.index].answer){
                         	this.score++;
                         	ele.className="correct";
                         	ele.innerHTML="Correct";
                         	this.scoreCard();
                         }
                         else{
                         	ele.className="wrong";
                         	ele.innerHTML="Wrong";
                         }
                }, score: 0,
     scoreCard:function(){
                	Sc.innerHTML=this.questions.length+"/"+this.score;
                },
    next:function(){
                    this.index++;
                    this.load();
                 },
    
      notClickAble:function(){
                       for(let i=0;i<Ul.children.length;i++){
                       	    Ul.children[i].style.pointerEvents="none";
                       }
                },   
    
    
    clickAble:function(){
                       for(let i=0;i<Ul.children.length;i++){
                       	    Ul.children[i].style.pointerEvents="auto";
                       	    Ul.children[i].className="";

                       }
                }
    
        
    
    
        }
        
        
        
    
    
            window.onload=app.load();



           function button(ele){
           	     app.check(ele);
           	     app.notClickAble();
           }

    function  next(){
              app.next();
              app.clickAble();
         } 

    
    
    
    

















