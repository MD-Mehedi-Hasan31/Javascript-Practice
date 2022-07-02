1. `console.log`(); we use it to show something in console.

2. <u>variable</u>: its a container. if we want  to take  water we need glass to take it, like  that, we want to take any value we need a container and that is variable.

   

   **There are some rules to declare variable.**

   - We can't use  special character  without "_" (underscore) and $(Dollar sign).
     like. #,@,%,^,&.
   - We can't keep  space, if the variable  name contain two words.
   - If  the  variable name contain multiple word, we have to write it camel  case format.
     like. studentName.

<img src="/home/mehedi/All Code/Javascript/picture/ss-1%.png" alt="a" style="zoom:33%;" /> <img src="/home/mehedi/All Code/Javascript/picture/ss2^.png" style="zoom:33%;" /><img src="/home/mehedi/All Code/Javascript/picture/ss3&.png" style="zoom:33%;" />

<img src="/home/mehedi/All Code/Javascript/picture/ss4*.png" style="zoom:33%;" />

3. If you get *undefined* output  that  means  you  don't initialize any value in this  variable. 
4. You will  get  *null* output  if  you initialize  *null*. 

#### **Lets Discuss about  some operator:**

There are five types of operator:

1. Arithmetic Operator.
2. Comparison Operator.
3. Logical Operator.
4. Assignment Operator.
5. Conditional Operator.

- <u>**Arithmetic  Operator:**</u>   +, -, *,  /, %, this are arithmetic operator. In programming we use % to finding **Remainder***. There are another two types of operator that is **++,--.** 

**++**  means adding 1 itself and it also called increment. and **--**  means subtract  1 from itself and it also called decrement.

- <u>***Comparison Operator:***</u>   It  use for comparing two value. **==, !=, >, <, >=, <=**  those  are comparison operator. 

another two types  of comparison operator is === and !==.

**The difference between ==, === & != , !== is:** 

​					`var a=10;`

​					 `var b='10';`

​					`if(a==b){`
​						       `console.log('true');`

​						`}` 										

​		We declare two variable  that  is a&b,  **<u>a</u>**  contain a ***number*** type  value.  **<u>b</u>** contain ***string*** type value, but it will show  

***true***. but how? two variable convert  into one  type, than it will compare with each other. For removing  this problem here has another type operator ***===***, which i mention in above. if we write this condition  `if(a===b)` it will not execute if block because the  **===** check vale and data type also. **!=**  and **!==** is also like that.

- **<u>Logical Operator:</u>**   &&, ||, ! this are  logical operator. 

  Generally we  use **&&**  between two or more expression. If both expression is true than it show **true**  else  it show  **false**.

  **||** it also use  between two expression, if one expression is **true** than full expression  is **true**, and  if all expression is  **false** than full expression is  **false**. 

  **!** it  change  the  result. that  means if  the result  is **false** it  will be **true**, and  **true** will be **false** 

- <u>**Assignment Operator:**</u>  =, +=, -=, *=, /=, %= those are assignment operator. 

  = we know about it. 

  +=, -=, *=, /=, %= those  are shortcut  of **a=a+1;** **a=a-1;** **a=a+1;** **a=a/2;** **a=a%2;**

  

​	

- <u>**Conditional Operator:**</u>   It also called ternary  operator. It's a shortcut form of  `if(){ } else{}` condition.

  var a=10;

  `if(a%2==0){`

  `console.log("Even")`

  `}`

  `else{` 

  ` console.log('Odd');` 

  `}`

  **short form is:**

  ​			`a%2==0? 'Even' : 'Odd';`

  ![](/home/mehedi/All Code/Javascript/picture/ternery.png)

  

1. 









