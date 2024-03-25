//TASK 1: How to compare two JSON have the same properties without order?
let obj1={name:"person1",age:5}
let obj2={age:5,name:"person1"}                
                                             
var stringy1=JSON.stringify(obj1);           //converting to JSON format
var stringy2=JSON.stringify(obj2);
let val1,val2,count=0;                          
if(stringy1.length===stringy2.length)        //compare length
{
    let keysArray1 = Object.keys(stringy1);  //getting keys from stringy1
    
    for(i=0;i<stringy1.length;i++)    
    {
         val1=stringy1[keysArray1[i]];
         val2=stringy1[keysArray1[i]];
         if(val1===val2)                     //comparing stringy1 and stringy2
         {
            count+=1;                        //increasing value if equal
         }
    }
    if(count==stringy1.length)               //if count equal to stringy1's length then it is equal
         {
            console.log("The two JSON are equal");   
         }
         else{
            console.log("The two JSON are not equal");
        }
}
else{
    console.log("The two JSON are not equal");
}

//TASK 2: Using rest Countries api and displaying all Countries flag in console.
var request=new XMLHttpRequest(); //create a XMLHTTP request

request.open("GET","https://restcountries.com/v3.1/all",true) //opening connection to server

request.send();                   //initializing a bridge to the server

request.onload=function(){        //server response
    var data=request.response;
    var result= JSON.parse(data)
    for(var i=0;i<result.length;i++){
        console.log(result[i].flags.svg);   
    }
}

//TASK 3: Using rest Countries api and displaying all countries name, region, subregion and population in console.
var newrequest=new XMLHttpRequest(); //create a XMLHTTP request

newrequest.open("GET","https://restcountries.com/v3.1/all",true) //opening connection to server

newrequest.send();                   //initializing a bridge to the server

newrequest.onload=function(){        //server response
    var data=newrequest.response;
    var result= JSON.parse(data)
    for(var i=0;i<result.length;i++){
           console.log("Country name:"+" "+result[i].name.common,", Region:"+" "+result[i].region,", Subregion: "+" "+result[i].subregion,", Population: "+" "+result[i].population);
    }
}