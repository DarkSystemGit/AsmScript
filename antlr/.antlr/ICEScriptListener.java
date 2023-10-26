// Generated from /workspaces/ICEScript/antlr/ICEScript by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link ICEScriptParser}.
 */
public interface ICEScriptListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link ICEScriptParser#script}.
	 * @param ctx the parse tree
	 */
	void enterScript(ICEScriptParser.ScriptContext ctx);
	/**
	 * Exit a parse tree produced by {@link ICEScriptParser#script}.
	 * @param ctx the parse tree
	 */
	void exitScript(ICEScriptParser.ScriptContext ctx);
	/**
	 * Enter a parse tree produced by {@link ICEScriptParser#header}.
	 * @param ctx the parse tree
	 */
	void enterHeader(ICEScriptParser.HeaderContext ctx);
	/**
	 * Exit a parse tree produced by {@link ICEScriptParser#header}.
	 * @param ctx the parse tree
	 */
	void exitHeader(ICEScriptParser.HeaderContext ctx);
	/**
	 * Enter a parse tree produced by {@link ICEScriptParser#meta}.
	 * @param ctx the parse tree
	 */
	void enterMeta(ICEScriptParser.MetaContext ctx);
	/**
	 * Exit a parse tree produced by {@link ICEScriptParser#meta}.
	 * @param ctx the parse tree
	 */
	void exitMeta(ICEScriptParser.MetaContext ctx);
	/**
	 * Enter a parse tree produced by {@link ICEScriptParser#scriptName}.
	 * @param ctx the parse tree
	 */
	void enterScriptName(ICEScriptParser.ScriptNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link ICEScriptParser#scriptName}.
	 * @param ctx the parse tree
	 */
	void exitScriptName(ICEScriptParser.ScriptNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link ICEScriptParser#include}.
	 * @param ctx the parse tree
	 */
	void enterInclude(ICEScriptParser.IncludeContext ctx);
	/**
	 * Exit a parse tree produced by {@link ICEScriptParser#include}.
	 * @param ctx the parse tree
	 */
	void exitInclude(ICEScriptParser.IncludeContext ctx);
	/**
	 * Enter a parse tree produced by {@link ICEScriptParser#function}.
	 * @param ctx the parse tree
	 */
	void enterFunction(ICEScriptParser.FunctionContext ctx);
	/**
	 * Exit a parse tree produced by {@link ICEScriptParser#function}.
	 * @param ctx the parse tree
	 */
	void exitFunction(ICEScriptParser.FunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link ICEScriptParser#func_params}.
	 * @param ctx the parse tree
	 */
	void enterFunc_params(ICEScriptParser.Func_paramsContext ctx);
	/**
	 * Exit a parse tree produced by {@link ICEScriptParser#func_params}.
	 * @param ctx the parse tree
	 */
	void exitFunc_params(ICEScriptParser.Func_paramsContext ctx);
	/**
	 * Enter a parse tree produced by {@link ICEScriptParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(ICEScriptParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link ICEScriptParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(ICEScriptParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link ICEScriptParser#assign_stmt}.
	 * @param ctx the parse tree
	 */
	void enterAssign_stmt(ICEScriptParser.Assign_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link ICEScriptParser#assign_stmt}.
	 * @param ctx the parse tree
	 */
	void exitAssign_stmt(ICEScriptParser.Assign_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link ICEScriptParser#ti_basic_stmt}.
	 * @param ctx the parse tree
	 */
	void enterTi_basic_stmt(ICEScriptParser.Ti_basic_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link ICEScriptParser#ti_basic_stmt}.
	 * @param ctx the parse tree
	 */
	void exitTi_basic_stmt(ICEScriptParser.Ti_basic_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link ICEScriptParser#any}.
	 * @param ctx the parse tree
	 */
	void enterAny(ICEScriptParser.AnyContext ctx);
	/**
	 * Exit a parse tree produced by {@link ICEScriptParser#any}.
	 * @param ctx the parse tree
	 */
	void exitAny(ICEScriptParser.AnyContext ctx);
	/**
	 * Enter a parse tree produced by {@link ICEScriptParser#add_assign_stmt}.
	 * @param ctx the parse tree
	 */
	void enterAdd_assign_stmt(ICEScriptParser.Add_assign_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link ICEScriptParser#add_assign_stmt}.
	 * @param ctx the parse tree
	 */
	void exitAdd_assign_stmt(ICEScriptParser.Add_assign_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link ICEScriptParser#sub_assign_stmt}.
	 * @param ctx the parse tree
	 */
	void enterSub_assign_stmt(ICEScriptParser.Sub_assign_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link ICEScriptParser#sub_assign_stmt}.
	 * @param ctx the parse tree
	 */
	void exitSub_assign_stmt(ICEScriptParser.Sub_assign_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link ICEScriptParser#mul_assign_stmt}.
	 * @param ctx the parse tree
	 */
	void enterMul_assign_stmt(ICEScriptParser.Mul_assign_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link ICEScriptParser#mul_assign_stmt}.
	 * @param ctx the parse tree
	 */
	void exitMul_assign_stmt(ICEScriptParser.Mul_assign_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link ICEScriptParser#div_assign_stmt}.
	 * @param ctx the parse tree
	 */
	void enterDiv_assign_stmt(ICEScriptParser.Div_assign_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link ICEScriptParser#div_assign_stmt}.
	 * @param ctx the parse tree
	 */
	void exitDiv_assign_stmt(ICEScriptParser.Div_assign_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link ICEScriptParser#inc_stmt}.
	 * @param ctx the parse tree
	 */
	void enterInc_stmt(ICEScriptParser.Inc_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link ICEScriptParser#inc_stmt}.
	 * @param ctx the parse tree
	 */
	void exitInc_stmt(ICEScriptParser.Inc_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link ICEScriptParser#dec_stmt}.
	 * @param ctx the parse tree
	 */
	void enterDec_stmt(ICEScriptParser.Dec_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link ICEScriptParser#dec_stmt}.
	 * @param ctx the parse tree
	 */
	void exitDec_stmt(ICEScriptParser.Dec_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link ICEScriptParser#if_stmt}.
	 * @param ctx the parse tree
	 */
	void enterIf_stmt(ICEScriptParser.If_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link ICEScriptParser#if_stmt}.
	 * @param ctx the parse tree
	 */
	void exitIf_stmt(ICEScriptParser.If_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link ICEScriptParser#while_stmt}.
	 * @param ctx the parse tree
	 */
	void enterWhile_stmt(ICEScriptParser.While_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link ICEScriptParser#while_stmt}.
	 * @param ctx the parse tree
	 */
	void exitWhile_stmt(ICEScriptParser.While_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link ICEScriptParser#var_stmt}.
	 * @param ctx the parse tree
	 */
	void enterVar_stmt(ICEScriptParser.Var_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link ICEScriptParser#var_stmt}.
	 * @param ctx the parse tree
	 */
	void exitVar_stmt(ICEScriptParser.Var_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link ICEScriptParser#return_stmt}.
	 * @param ctx the parse tree
	 */
	void enterReturn_stmt(ICEScriptParser.Return_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link ICEScriptParser#return_stmt}.
	 * @param ctx the parse tree
	 */
	void exitReturn_stmt(ICEScriptParser.Return_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link ICEScriptParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(ICEScriptParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link ICEScriptParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(ICEScriptParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link ICEScriptParser#boolexpr}.
	 * @param ctx the parse tree
	 */
	void enterBoolexpr(ICEScriptParser.BoolexprContext ctx);
	/**
	 * Exit a parse tree produced by {@link ICEScriptParser#boolexpr}.
	 * @param ctx the parse tree
	 */
	void exitBoolexpr(ICEScriptParser.BoolexprContext ctx);
	/**
	 * Enter a parse tree produced by {@link ICEScriptParser#methodcall}.
	 * @param ctx the parse tree
	 */
	void enterMethodcall(ICEScriptParser.MethodcallContext ctx);
	/**
	 * Exit a parse tree produced by {@link ICEScriptParser#methodcall}.
	 * @param ctx the parse tree
	 */
	void exitMethodcall(ICEScriptParser.MethodcallContext ctx);
	/**
	 * Enter a parse tree produced by {@link ICEScriptParser#methodparams}.
	 * @param ctx the parse tree
	 */
	void enterMethodparams(ICEScriptParser.MethodparamsContext ctx);
	/**
	 * Exit a parse tree produced by {@link ICEScriptParser#methodparams}.
	 * @param ctx the parse tree
	 */
	void exitMethodparams(ICEScriptParser.MethodparamsContext ctx);
	/**
	 * Enter a parse tree produced by {@link ICEScriptParser#value}.
	 * @param ctx the parse tree
	 */
	void enterValue(ICEScriptParser.ValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link ICEScriptParser#value}.
	 * @param ctx the parse tree
	 */
	void exitValue(ICEScriptParser.ValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link ICEScriptParser#identifier}.
	 * @param ctx the parse tree
	 */
	void enterIdentifier(ICEScriptParser.IdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link ICEScriptParser#identifier}.
	 * @param ctx the parse tree
	 */
	void exitIdentifier(ICEScriptParser.IdentifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link ICEScriptParser#number}.
	 * @param ctx the parse tree
	 */
	void enterNumber(ICEScriptParser.NumberContext ctx);
	/**
	 * Exit a parse tree produced by {@link ICEScriptParser#number}.
	 * @param ctx the parse tree
	 */
	void exitNumber(ICEScriptParser.NumberContext ctx);
}