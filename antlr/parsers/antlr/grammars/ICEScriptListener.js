// Generated from ./antlr/grammars/ICEScript by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by ICEScriptParser.
function ICEScriptListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ICEScriptListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ICEScriptListener.prototype.constructor = ICEScriptListener;

// Enter a parse tree produced by ICEScriptParser#script.
ICEScriptListener.prototype.enterScript = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#script.
ICEScriptListener.prototype.exitScript = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#header.
ICEScriptListener.prototype.enterHeader = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#header.
ICEScriptListener.prototype.exitHeader = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#meta.
ICEScriptListener.prototype.enterMeta = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#meta.
ICEScriptListener.prototype.exitMeta = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#scriptName.
ICEScriptListener.prototype.enterScriptName = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#scriptName.
ICEScriptListener.prototype.exitScriptName = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#include.
ICEScriptListener.prototype.enterInclude = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#include.
ICEScriptListener.prototype.exitInclude = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#functionDef.
ICEScriptListener.prototype.enterFunctionDef = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#functionDef.
ICEScriptListener.prototype.exitFunctionDef = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#func_params.
ICEScriptListener.prototype.enterFunc_params = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#func_params.
ICEScriptListener.prototype.exitFunc_params = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#func_identifier.
ICEScriptListener.prototype.enterFunc_identifier = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#func_identifier.
ICEScriptListener.prototype.exitFunc_identifier = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#statement.
ICEScriptListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#statement.
ICEScriptListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#assign_stmt.
ICEScriptListener.prototype.enterAssign_stmt = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#assign_stmt.
ICEScriptListener.prototype.exitAssign_stmt = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#ti_basic_stmt.
ICEScriptListener.prototype.enterTi_basic_stmt = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#ti_basic_stmt.
ICEScriptListener.prototype.exitTi_basic_stmt = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#any.
ICEScriptListener.prototype.enterAny = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#any.
ICEScriptListener.prototype.exitAny = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#add_assign_stmt.
ICEScriptListener.prototype.enterAdd_assign_stmt = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#add_assign_stmt.
ICEScriptListener.prototype.exitAdd_assign_stmt = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#sub_assign_stmt.
ICEScriptListener.prototype.enterSub_assign_stmt = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#sub_assign_stmt.
ICEScriptListener.prototype.exitSub_assign_stmt = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#mul_assign_stmt.
ICEScriptListener.prototype.enterMul_assign_stmt = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#mul_assign_stmt.
ICEScriptListener.prototype.exitMul_assign_stmt = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#div_assign_stmt.
ICEScriptListener.prototype.enterDiv_assign_stmt = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#div_assign_stmt.
ICEScriptListener.prototype.exitDiv_assign_stmt = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#inc_stmt.
ICEScriptListener.prototype.enterInc_stmt = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#inc_stmt.
ICEScriptListener.prototype.exitInc_stmt = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#dec_stmt.
ICEScriptListener.prototype.enterDec_stmt = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#dec_stmt.
ICEScriptListener.prototype.exitDec_stmt = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#if_stmt.
ICEScriptListener.prototype.enterIf_stmt = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#if_stmt.
ICEScriptListener.prototype.exitIf_stmt = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#if_else_stmt.
ICEScriptListener.prototype.enterIf_else_stmt = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#if_else_stmt.
ICEScriptListener.prototype.exitIf_else_stmt = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#while_stmt.
ICEScriptListener.prototype.enterWhile_stmt = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#while_stmt.
ICEScriptListener.prototype.exitWhile_stmt = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#for_stmt.
ICEScriptListener.prototype.enterFor_stmt = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#for_stmt.
ICEScriptListener.prototype.exitFor_stmt = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#var_stmt.
ICEScriptListener.prototype.enterVar_stmt = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#var_stmt.
ICEScriptListener.prototype.exitVar_stmt = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#return_stmt.
ICEScriptListener.prototype.enterReturn_stmt = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#return_stmt.
ICEScriptListener.prototype.exitReturn_stmt = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#expression.
ICEScriptListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#expression.
ICEScriptListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#math.
ICEScriptListener.prototype.enterMath = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#math.
ICEScriptListener.prototype.exitMath = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#boolexpr.
ICEScriptListener.prototype.enterBoolexpr = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#boolexpr.
ICEScriptListener.prototype.exitBoolexpr = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#methodcall.
ICEScriptListener.prototype.enterMethodcall = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#methodcall.
ICEScriptListener.prototype.exitMethodcall = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#methodparams.
ICEScriptListener.prototype.enterMethodparams = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#methodparams.
ICEScriptListener.prototype.exitMethodparams = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#value.
ICEScriptListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#value.
ICEScriptListener.prototype.exitValue = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#identifier.
ICEScriptListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#identifier.
ICEScriptListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#number.
ICEScriptListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#number.
ICEScriptListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#list.
ICEScriptListener.prototype.enterList = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#list.
ICEScriptListener.prototype.exitList = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#string.
ICEScriptListener.prototype.enterString = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#string.
ICEScriptListener.prototype.exitString = function(ctx) {
};


// Enter a parse tree produced by ICEScriptParser#type.
ICEScriptListener.prototype.enterType = function(ctx) {
};

// Exit a parse tree produced by ICEScriptParser#type.
ICEScriptListener.prototype.exitType = function(ctx) {
};



exports.ICEScriptListener = ICEScriptListener;