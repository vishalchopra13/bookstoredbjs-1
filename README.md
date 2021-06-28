# Bookstore-js-1
Simple Book Store Database Management admin panel using JavaScript and HTML5 local storage.

Bookstore Local stoarge database management module.

This is a simple JavaScript program and does not have advanced functionality. However, Singleton pattern have been used.

You are free to make changes to it.

    https://github.com/pythonvishal/bookstore-js-1/blob/master/bookstore/js/bookstore.js

# Features:

# 1. Add books to the the database, use the below commmand

        Bookstore.addbooks(isbn, name, author, year, price, stock);
  
  
# 2. Search for a book using the ISBN number

        Bookstore.search(isbn);
  
  This search function will return the objects containing the books info. If book is not in the database then it will return false.
  
  
# 3. Update a book

        Bookstore.update(isbn).value(isbn, name, author, year, price, stock);
  
  
# 4. Update only the available stock

       Bookstore.updateStock(isbn, newStock);
  
  
# 5. Delete a book from the database using the ISBN number

       Bookstore.delete(isbn);
  
  
# 6. listdata:- This contains the entire copy of the books array. So that the original array will not change by mistake.

  To get the clone: 
  
       Bookstore.listdata();
  
  
# 7. clearDatabase

  If you want to clear all the data, then use the below command
  
       Bookstore.clearDatabase();



Thanks, I hope you will like my this project. This is my first project and also the contribution.

Module url:  https://github.com/vishalchopra13/bookstore-js-1/blob/master/bookstore/js/bookstore.js

My email hello@vishalchopra.me
