// var value1=prompt("Enter your anwser") //>=
// if(value1>=69)
// {
//     alert("Correct Answer")
// }
// else{
//     alert("Wrong Anser")
// }
// var value1=prompt("Enter your anwser") //<=
// if(value1<=69)  
// {
//     alert("Correct Answer")
// }
// else{
//     alert("Wrong Anser")
// }
// var value=prompt("Enter number of order") //>
// if(value>15)
// {
//     alert("Can't be taken")
// }


// var a=(parseInt(prompt("Enter a value")));
// var b=(parseInt(prompt("Enter a value")));
// var c=(parseInt(prompt("Enter a value")));

// if((a>b)&&(a>c))
// {
//     console.log("A is greater")

// }
// else if((b>a)&&(b>c))
// {
//     console.log("B is greater")
// }
// else if((c>a)&&(c>b))
// {
//     console.log("c is greater")
// }


// var input1= parseInt(prompt("Enter a value"));
// var input2= parseInt(prompt("Enter a value"));
// document.write("1.Add<br>2.Sub<br>3.Modulus")
// var choice= parseInt(prompt("Enter a choice"));
// switch(choice)
// {
//     case 1:
//         var total=input1+input2;
//         alert("Addition:"+total);
//         break;
//     case 2:
//         var total=input1-input2;
//         alert("Subration:"+total);
//     case 3:
//         var total=input1%input2;
//         alert("Percentage:"+total)    

// }


// var end=10;
// for(let i=1; i<=end; i++) //loop even number assending 
// {
//     if(i%2==0)
//     {
//     document.write(i);
//     }
// }
// for(let i=1; i<=end; i++) //loop add number assending
// {
//     if(i%2!=0)
//     {
//     document.write(i);
//     }
// }
// for(let i=1; end>=i; end--) //loop add number desending
// {
//     if(end%2!=0)
//    { 
//     document.write(end);
//    } 
// }
// for(let i=1; end>=i; end--) //loop even number desending
// {
//     if(end%2==0)
//    { 
//     document.write(end);
//    } 
// }

// let n=5;  // nested for
// for(let i=0; i<=n; i++)
// {
//     for(let j=0; j<=n; j++)
//     {
//         console.log(i+""+j)
//     }
// }

// let n=10  //break continue
// for(let i=0; i<=n; i++)
// {
//     if(i==5)
//     {
//         continue;
//     }
//     document.write(i)
// }

// function printData() //define a function no arg no return
// {
//     document.write("Welcome to my world")
// }
// printData()

// function printData(Studentname,age) //define a function with arg no return
// {
//     document.write("Hi my name is"+Studentname+"My age is"+age)
// }
// printData("Ram","20")

// function printData() //define a function no arg with return
// {
//     return("Welcome to my world")
// }
// document.write(printData())

// function printData(name) //define a function with arg with return
// {
//     return("You can call me as "+name)
// }
// document.write(printData("Dhakshan"))


// function greet()  // Task1
// {
//     return"Hello! Have a nice day";
// }
// document.write(greet())


// var a=10 //Task 2
// var b=200
// function additional()
// {
//     return(a+b)
// }
// document.write(additional())


// function get(NationBird)   // Task 3
// {
//     return("The national bird of india is "+NationBird)
// }
// document.write(get("Peacock"))


// function greetWithName(personName) //Task 4
// {
//     return("Hi "+personName)
// }
// document.write(greetWithName("Aravindh Kumar"))


// var a=4   //Task 5
// var b=2
// var c=a+b
// function average()
// {
//     document.write(c/2)
// }
// average()


// var a=5    //Task 6
// var b=60
// function covertMinutesToSeconds(minutues)
// {
//     document.write(a*b)
// }
// covertMinutesToSeconds()


// var num1=100    //Task 7
// var num2=200
// var num3=300
// if(num1>num2 && num1>num3)
// {
//     document.write("A is greater")
// }
// else if(num2>num1 && num2>num3)
// {
//     document.write("B is greater")
// }
// else if(num3>num1 && num3>num2)
// {
//     document.write("C is greater")
// }



// var side1=parseInt(prompt());   //Task 8
// var side2=parseInt(prompt());
// var side3=parseInt(prompt());
// if (side1==side2 && side1==side3 && side2==side3)
// {
//     alert("Equilateral")
// }
// else if(side1==side2 || side2==side3 || side1==side3)
// {
//     alert("Isoseles")
// }
// else{
//     alert("Scalene")
// }

// let a=parseInt(prompt(20));  //task 9
// let b=parseInt(prompt(60));
// let num=parseInt(prompt(45));
// if (a<=num && b>=num){
//     alert('Between the range');
// }
// else
// {
//     alert('Outside the range')
// }


// let num1=parseInt(prompt());   //Task 10
// let num2=parseInt(prompt());
// let choice=parseInt(prompt("Enter a choice"));
// let total
// function evalNumber()
// {
// switch(choice)
// {
//     case 1:
//         total=num1+num2;
//     alert("Addition"+total);
//     break;
//     case 2:   
//     total=num1-num2;
//     alert("Subraction"+total);
//     break;
//     case 3:
//         total=num1*num2;
//     alert("Multiply"+total);
//     break;
//     case 4:
//         total=num1/num2;
//     alert("Divide"+total);
//     break;
//     case 5:
//         total=num1%num2;
//     alert("Modulus"+total);
//     break;
// }
// }
// evalNumber()


// var a=3  // control statement and loop Task1
// var b=-7
// var c=2
// var d=a*b*c
// if (d<0)
// alert("The sign is-")
// else {
//   alert("The sign is +")
// }

// for (let i=0; i<=15; i++)  // control statement and loop Task2
// { 
//   if(i%2==0){
//   document.write(i+"is even <br>")
//   }
//   else{
//     document.write(i+"is odd <br>")
//   }
// }




function pName()
{
  var productName=document.getElementById("product").value;
  var span1=document.getElementById("sp1");
  if(productName.length>2)
  {
    span1.innerHTML="Available in Ajio store";
  }
  else {
    span1.innerHTML="Type a product";
  }
}
function nItems()
{
  var numberItems=document.getElementById("nof").value; 
}
function mPrice()
{
  var mPrice=document.getElementById("mrp").value;


  var aDiscount=document.getElementById("discount").value=mPrice*(15/100);
  var gSt=document.getElementById("gst").value=mPrice*(6/100);
  var discount1=parseInt(aDiscount);
  var gst1=parseInt(gSt);
  var summary=document.getElementById("sum").value=mPrice-gst1;
  var summary1=parseInt(summary);

  var tprice=document.getElementById("tprice").value=mPrice-discount1+gst1;
}

