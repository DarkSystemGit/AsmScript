// Generated from ./antlr/grammars/TiB by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by TiBParser.

function TiBVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

TiBVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
TiBVisitor.prototype.constructor = TiBVisitor;

// Visit a parse tree produced by TiBParser#script.
TiBVisitor.prototype.visitScript = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TiBParser#token.
TiBVisitor.prototype.visitToken = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TiBParser#disp.
TiBVisitor.prototype.visitDisp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TiBParser#input.
TiBVisitor.prototype.visitInput = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TiBParser#store.
TiBVisitor.prototype.visitStore = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TiBParser#if_.
TiBVisitor.prototype.visitIf_ = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TiBParser#then.
TiBVisitor.prototype.visitThen = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TiBParser#end.
TiBVisitor.prototype.visitEnd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TiBParser#list.
TiBVisitor.prototype.visitList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TiBParser#space.
TiBVisitor.prototype.visitSpace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TiBParser#quote.
TiBVisitor.prototype.visitQuote = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TiBParser#letter.
TiBVisitor.prototype.visitLetter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TiBParser#colon.
TiBVisitor.prototype.visitColon = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TiBParser#semicolon.
TiBVisitor.prototype.visitSemicolon = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TiBParser#comma.
TiBVisitor.prototype.visitComma = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TiBParser#period.
TiBVisitor.prototype.visitPeriod = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TiBParser#open_bracket.
TiBVisitor.prototype.visitOpen_bracket = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TiBParser#close_bracket.
TiBVisitor.prototype.visitClose_bracket = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TiBParser#equals.
TiBVisitor.prototype.visitEquals = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TiBParser#number.
TiBVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TiBParser#pi.
TiBVisitor.prototype.visitPi = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TiBParser#e.
TiBVisitor.prototype.visitE = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TiBParser#i.
TiBVisitor.prototype.visitI = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TiBParser#newline.
TiBVisitor.prototype.visitNewline = function(ctx) {
  return this.visitChildren(ctx);
};



exports.TiBVisitor = TiBVisitor;