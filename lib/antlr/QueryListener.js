// Generated from build/Query.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by QueryParser.
function QueryListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

QueryListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
QueryListener.prototype.constructor = QueryListener;

// Enter a parse tree produced by QueryParser#predicate.
QueryListener.prototype.enterPredicate = function(ctx) {
};

// Exit a parse tree produced by QueryParser#predicate.
QueryListener.prototype.exitPredicate = function(ctx) {
};


// Enter a parse tree produced by QueryParser#primary.
QueryListener.prototype.enterPrimary = function(ctx) {
};

// Exit a parse tree produced by QueryParser#primary.
QueryListener.prototype.exitPrimary = function(ctx) {
};


// Enter a parse tree produced by QueryParser#simple.
QueryListener.prototype.enterSimple = function(ctx) {
};

// Exit a parse tree produced by QueryParser#simple.
QueryListener.prototype.exitSimple = function(ctx) {
};


// Enter a parse tree produced by QueryParser#tagged.
QueryListener.prototype.enterTagged = function(ctx) {
};

// Exit a parse tree produced by QueryParser#tagged.
QueryListener.prototype.exitTagged = function(ctx) {
};


// Enter a parse tree produced by QueryParser#equal.
QueryListener.prototype.enterEqual = function(ctx) {
};

// Exit a parse tree produced by QueryParser#equal.
QueryListener.prototype.exitEqual = function(ctx) {
};


// Enter a parse tree produced by QueryParser#not_equal.
QueryListener.prototype.enterNot_equal = function(ctx) {
};

// Exit a parse tree produced by QueryParser#not_equal.
QueryListener.prototype.exitNot_equal = function(ctx) {
};


// Enter a parse tree produced by QueryParser#lesser.
QueryListener.prototype.enterLesser = function(ctx) {
};

// Exit a parse tree produced by QueryParser#lesser.
QueryListener.prototype.exitLesser = function(ctx) {
};


// Enter a parse tree produced by QueryParser#greater.
QueryListener.prototype.enterGreater = function(ctx) {
};

// Exit a parse tree produced by QueryParser#greater.
QueryListener.prototype.exitGreater = function(ctx) {
};


// Enter a parse tree produced by QueryParser#lesser_equal.
QueryListener.prototype.enterLesser_equal = function(ctx) {
};

// Exit a parse tree produced by QueryParser#lesser_equal.
QueryListener.prototype.exitLesser_equal = function(ctx) {
};


// Enter a parse tree produced by QueryParser#greater_equal.
QueryListener.prototype.enterGreater_equal = function(ctx) {
};

// Exit a parse tree produced by QueryParser#greater_equal.
QueryListener.prototype.exitGreater_equal = function(ctx) {
};


// Enter a parse tree produced by QueryParser#like.
QueryListener.prototype.enterLike = function(ctx) {
};

// Exit a parse tree produced by QueryParser#like.
QueryListener.prototype.exitLike = function(ctx) {
};


// Enter a parse tree produced by QueryParser#regex_match.
QueryListener.prototype.enterRegex_match = function(ctx) {
};

// Exit a parse tree produced by QueryParser#regex_match.
QueryListener.prototype.exitRegex_match = function(ctx) {
};


// Enter a parse tree produced by QueryParser#value.
QueryListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by QueryParser#value.
QueryListener.prototype.exitValue = function(ctx) {
};


// Enter a parse tree produced by QueryParser#field.
QueryListener.prototype.enterField = function(ctx) {
};

// Exit a parse tree produced by QueryParser#field.
QueryListener.prototype.exitField = function(ctx) {
};


// Enter a parse tree produced by QueryParser#string.
QueryListener.prototype.enterString = function(ctx) {
};

// Exit a parse tree produced by QueryParser#string.
QueryListener.prototype.exitString = function(ctx) {
};


// Enter a parse tree produced by QueryParser#r_true.
QueryListener.prototype.enterR_true = function(ctx) {
};

// Exit a parse tree produced by QueryParser#r_true.
QueryListener.prototype.exitR_true = function(ctx) {
};


// Enter a parse tree produced by QueryParser#r_false.
QueryListener.prototype.enterR_false = function(ctx) {
};

// Exit a parse tree produced by QueryParser#r_false.
QueryListener.prototype.exitR_false = function(ctx) {
};


// Enter a parse tree produced by QueryParser#nil.
QueryListener.prototype.enterNil = function(ctx) {
};

// Exit a parse tree produced by QueryParser#nil.
QueryListener.prototype.exitNil = function(ctx) {
};


// Enter a parse tree produced by QueryParser#number.
QueryListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by QueryParser#number.
QueryListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by QueryParser#r_float.
QueryListener.prototype.enterR_float = function(ctx) {
};

// Exit a parse tree produced by QueryParser#r_float.
QueryListener.prototype.exitR_float = function(ctx) {
};


// Enter a parse tree produced by QueryParser#bign.
QueryListener.prototype.enterBign = function(ctx) {
};

// Exit a parse tree produced by QueryParser#bign.
QueryListener.prototype.exitBign = function(ctx) {
};


// Enter a parse tree produced by QueryParser#r_long.
QueryListener.prototype.enterR_long = function(ctx) {
};

// Exit a parse tree produced by QueryParser#r_long.
QueryListener.prototype.exitR_long = function(ctx) {
};



exports.QueryListener = QueryListener;