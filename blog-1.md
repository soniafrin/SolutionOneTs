#Title: The "Type Safety Hole" -> "any" and the safe choice of unpredictable data "Unknown" and type narrowing concept 

##Introduction: "trust me i know better than you" is type "any". Eventhough, unknown also hold any type, however, unknow is much safer due to it's restrictive behabiour. Allthough, we can't do anything with "unknown" directly, type narrowing comes here with defining the type explicitly using logic.

##Body Paragraphs:
###any: we lose all the access or benefit of typescript while using any and thats when it called a hole becasue it doesnt check property, as a result it risking the access of any property even ones that doesnt exist and it potentially it infect other strictly typed code with bugs and sometimes it leads to crashe on runtime. such as, if we call a .map() method and the variable is string the code will crush and there would be no working before running.
```let data : any = "progamming hero" ; data.push(10)``` would crashe on runtime without any compiler error.

###unknown: The restrictive character of unknown value wont let perform any operations like calling method or accessing property untill type is proved. using uknown type is beneficial for the data coming from API or user input where we are not 100% sure of data type. 
```let data: unknown = "typescript"; data.push(10);```

###type narrowing: with a check/condition, the compliler narrow the type within block of code by using typeof, instanceof, truthiness and custom type guards.
```function data(input: unknown){if(typeof input === "string"){console.log(input.toUpperCase())}else if(typeof input === "number"){console.log(input.toFixed())}}```

##Conclusion: "unknown" is safer with type narrowing as it perform checks wherein "any" doesnt perform check without compiler error.
