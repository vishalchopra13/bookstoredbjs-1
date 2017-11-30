// BooksStore js module
var Bookstore = (function(){

	// Private variables and functions
	var books = [];

	// Default error
	var INVALID = ['Sorry Item alreay exist!','ISBN not found!'];
	// On an iteration over array, if passed paramenter (like isbn) does not exist in the array, then f = 0
	var f = 0;

	// books constructor
	function Addbooks(isbn, name, author, year, price, stock){
		this.isbn = isbn;
		this.name = name;
		this.author = author;
		this.year = year;
		this.price = price;
		this.stock = stock;
	}

	// Save the data to the local storage
	function save(){
		localStorage.setItem('BookStore', JSON.stringify(books));
	}

	// Load the data from the local store
	function load(){
		books = JSON.parse(localStorage.getItem('BookStore'));
		if(books === null || books === undefined){
			books = [];
		}
		return books;
	}
	load();

	// Public variables and functions
	var obj = {};

	obj.addbooks = function(isbn, name, author, year, price, stock){
		for(var i = 0; i < books.length; i++){
			if(books[i].isbn === isbn){
				return INVALID[0];
			}
		}
		var book = new Addbooks(isbn, name, author, year, price, stock);
		books.push(book);
		save(); // save the changes
	};

	obj.search = function(isbn){
		for(var i = 0; i < books.length; i++){
			if(books[i].isbn === isbn){
				return books[i];
			}
		}
		return false;;
	};

	obj.update = function(isbn){
		//return 'Provide a valid isbn';
		var index;
		for(var i = 0; i < books.length; i++){
			if(books[i].isbn === isbn){
				index = i;
				break;
			}
		}
		return{
			value: function(isbn, name, author, year, price, stock){
				if(index === undefined || index === null){
					return INVALID[1];
				} else {
				books[index] = new Addbooks(isbn, name, author, year, price, stock);
				save(); // save the changes
				}
			}
		}
	};

	obj.updateStock = function(isbn, newStock){
		for(var i = 0; i < books.length; i++){
			if(books[i].isbn === isbn){
				books[i].stock = newStock;
				f = 1;
				break;
			}
		}
		if(f == 0) {return INVALID[1]};
		save(); // save the changes
		return;
	};

	obj.delete = function(isbn){
		for(var i = 0; i < books.length; i++){
			if(books[i].isbn === isbn){
				books.splice(i, 1);
				f = 1;
				break;
			}
		}
		if(f == 0){
			return INVALID[1];
		}
		save(); // save the changes
	};

	obj.listdata = function(){
		var dataCopy = [];
		for(var i in books){
			var data = books[i];
			var objCopy = {};

			for(var j in data){
				objCopy[j] = data[j];
			}
			dataCopy.push(objCopy);
		}
		return dataCopy;
	};

	obj.clearDatabase = function(){
		books = [];
		save(); // save the changes
	};

	obj.logBooks = function(){
		return load();
	};

	return obj;
})();