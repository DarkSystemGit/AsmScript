// Generated from ./antlr/grammars/ICEScript by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by ICEScriptParser.

function ICEScriptVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

ICEScriptVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
ICEScriptVisitor.prototype.constructor = ICEScriptVisitor;

// Visit a parse tree produced by ICEScriptParser#script.
ICEScriptVisitor.prototype.visitScript = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#header.
ICEScriptVisitor.prototype.visitHeader = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#meta.
ICEScriptVisitor.prototype.visitMeta = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#scriptName.
ICEScriptVisitor.prototype.visitScriptName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#include.
ICEScriptVisitor.prototype.visitInclude = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#functionDef.
ICEScriptVisitor.prototype.visitFunctionDef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#func_params.
ICEScriptVisitor.prototype.visitFunc_params = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#func_identifier.
ICEScriptVisitor.prototype.visitFunc_identifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#statement.
ICEScriptVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#assign_stmt.
ICEScriptVisitor.prototype.visitAssign_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#ti_basic_stmt.
ICEScriptVisitor.prototype.visitTi_basic_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#any.
ICEScriptVisitor.prototype.visitAny = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#add_assign_stmt.
ICEScriptVisitor.prototype.visitAdd_assign_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#sub_assign_stmt.
ICEScriptVisitor.prototype.visitSub_assign_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#mul_assign_stmt.
ICEScriptVisitor.prototype.visitMul_assign_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#div_assign_stmt.
ICEScriptVisitor.prototype.visitDiv_assign_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#inc_stmt.
ICEScriptVisitor.prototype.visitInc_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#dec_stmt.
ICEScriptVisitor.prototype.visitDec_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#if_stmt.
ICEScriptVisitor.prototype.visitIf_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#if_else_stmt.
ICEScriptVisitor.prototype.visitIf_else_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#while_stmt.
ICEScriptVisitor.prototype.visitWhile_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#for_stmt.
ICEScriptVisitor.prototype.visitFor_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#var_stmt.
ICEScriptVisitor.prototype.visitVar_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#return_stmt.
ICEScriptVisitor.prototype.visitReturn_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#expression.
ICEScriptVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#math.
ICEScriptVisitor.prototype.visitMath = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#boolexpr.
ICEScriptVisitor.prototype.visitBoolexpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#methodcall.
ICEScriptVisitor.prototype.visitMethodcall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#methodparams.
ICEScriptVisitor.prototype.visitMethodparams = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#value.
ICEScriptVisitor.prototype.visitValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#identifier.
ICEScriptVisitor.prototype.visitIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#number.
ICEScriptVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#list.
ICEScriptVisitor.prototype.visitList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#string.
ICEScriptVisitor.prototype.visitString = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ICEScriptParser#type.
ICEScriptVisitor.prototype.visitType = function(ctx) {
  return this.visitChildren(ctx);
};



exports.ICEScriptVisitor = ICEScriptVisitor;