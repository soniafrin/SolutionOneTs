#Title: The power of slicing type "Omit" and "pick" keeps code DRY...

##Introduction: "pick" and "omit" helps to takes new types without rewriting the properties sevaral times and it gives the opprotunity to write code clean and not repeatative.  

##Body Paragraphs: if a master interface contains sensitive info like password, account no. and etc or if we need spefic small chuks of data we can easily keep or ingore data is needed to do.

###pick: ```Pick<type, keys>``` hepls to create a new type by selecting a tiny set of data.

###omit:  ```Omit<type, keys>``` does the opposite. it creates new type by taking all the data apart from the mentioned property in the code.


##Conclusion: "omit" is great for ignoring the sensitive data before sending to client and "pick" is great for when we dont need all data rather a tiny set of data. therefore, it stops repeating or rewriting same code several times.
