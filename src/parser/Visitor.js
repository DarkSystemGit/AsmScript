import * as util from "../util.js";
import * as tree from "../tree.js";
export class Visitor {
  constructor(data) {
    this.data = data;
  }
  setData(elm) {
    this.data[elm[0]] = elm[1];
  }
  getData() {
    return this.data;
  }
  ArrayExpression(elm, parser) {
    var children = parser(elm.elements);
    //console.log(elm)
    return { node: "array", children, type: "array" };
  }
  AssignmentExpression(elm, parser) {
    var op = elm.operator.replace("=", "");
    if (op == "") op = undefined;
    //console.dir(parser(elm.left,false)[0].name,{depth:null})
    return {
      node: "assignment",
      children: parser(elm.right),
      op,
      name: parser(elm.left, false)[0].name,
    };
  }
  BinaryExpression(elm, parser) {
    var node = {
      children: [parser(elm.left), parser(elm.right)],
      operation: elm.operator,
      node: "",
    };
    var op = (op) => {
      var res = false;
      op.forEach((searchelm) => {
        if (elm.operator == searchelm) res = true;
      });
      return res;
    };
    if (op(["+", "-", "/", "*", "%", "**"])) {
      node.type = "number";
      node.node = "arthmeticOp";
    } else if (op(["==", "=", "===", "!=", "!==", "<=", "<", ">", ">="])) {
      node.type = "bool";
      node.node = "comparison";
    } else if (op(["&", "^", "|"])) {
      node.type = "binary";
      node.node = "bitwise";
    } else if (op(["||", "&&"])) {
      node.node = "logic";
      node.type = "bool";
    }
    return node;
  }
  BooleanLiteral(elm, parser) {
    return { node: "bool", value: elm.value };
  }
  CallExpression(elm, parser) {
    //console.dir(elm,{depth:null})

    var obj = { node: "funcCall" };
    obj.args = [];
    obj.name = parser(elm.callee, true).flat(Infinity).join(".");
    this.data.function = this.data.function || {};
    var func = tree.getFunction(
      obj.name,
      this.data.scope,
      this.data.function,
      this,
    );
    elm.arguments.forEach((arg) => {
      obj.args.push(parser(arg.expression));
    });
    if (func) {
      obj.type = func.type;
      //console.log(func)
    } else {
      util.error(
        "No such function: " + obj.name,
        "Access",
        elm.span,
        this.data,
      );
    }
    return obj;
  }
  ClassMethod(elm, parser) {
    var params = [];
    var data = this.data;
    //console.log(data)
    data.class = data.class || {};
    data.var = data.var || {};
    var oldScope = util.copy(data.scope);
    data.scope = `${oldScope}.class:${elm.key.value}`;
    elm.function.params.forEach((param, i) => {
      params.push({
        name: param.pat.value,
        type: util.getType(param.pat.typeAnnotation, data.file),
      });
      data.var[param.pat.value + `|${oldScope}.class:${elm.key.value}`] = {
        node: "var",
        type: util.getType(param.pat.typeAnnotation, data.file),
        children: [],
        scope: `${oldScope}.function:${elm.identifier.value}`,
      };
    });
    //console.log(data)
    data.function[`${elm.key.value}|${oldScope}`] = {
      node: "method",
      params,
      scope: oldScope,
      type: util.getType(elm.returnType, data.file),
      name: elm.key.value,
      children: parser(elm.body),
    };
    data.scope = oldScope;
    return { node: "" };
  }
  Computed(elm, parser) {
    return elm.expression.value;
  }
  EmptyStatement(elm, parser) {
    return {};
  }
  ForInStatement(elm, parser) {
    return {
      node: "forIn",
      children: parser(elm.body),
      iterator: parser(elm.left),
      obj: parser(elm.right),
    };
  }
  ForOfStatement(elm, parser) {
    return {
      node: "forOf",
      children: parser(elm.body),
      iterator: parser(elm.left),
      iterable: parser(elm.right),
    };
  }
  ForStatement(elm, parser) {
    return {
      node: "for",
      children: parser(elm.body),
      iterator: parser(elm.init),
      condition: parser(elm.test),
      update: parser(elm.update),
    };
  }
  FunctionDeclaration(elm, parser) {
    var params = [];
    var data = this.data;
    //console.log(data)
    data.function = data.function || {};
    data.var = data.var || {};
    var oldScope = util.copy(data.scope);
    data.scope = `${oldScope}.function:${elm.identifier.value}`;
    elm.params.forEach((param, i) => {
      params.push({
        name: param.pat.value,
        type: util.getType(param.pat.typeAnnotation, data.file),
      });
      data.var[
        param.pat.value + `|${oldScope}.function:${elm.identifier.value}`
      ] = {
        node: "var",
        type: util.getType(param.pat.typeAnnotation, data.file),
        children: [],
        scope: `${oldScope}.function:${elm.identifier.value}`,
      };
    });
    //console.log(data)
    data.function[`${elm.identifier.value}|${oldScope}`] = {
      node: "function",
      params,
      scope: oldScope,
      type: util.getType(elm.returnType, data.file),
      name: elm.identifier.value,
      children: parser(elm.body),
    };
    data.scope = oldScope;
    return data.function[`${elm.identifier.value}|${data.scope}`];
  }
  Identifier(elm, parser, ex) {
    if (ex == "memexp") {
      return elm.value;
    } else {
      this.data.var = this.data.var || {};
      var type = tree.getVar(
        elm.value,
        this.data.scope,
        this.data.var,
        elm.span,
        this.data,
      );
      if (type != undefined) type = type.type;
      else {
        type = "void";
      }
      return { node: "varAccess", children: [], name: elm.value, type };
    }
  }
  IfStatement(elm, parser) {
    var node = "if";
    var children = parser(elm.consequent);
    if (elm.alternate != null) {
      node = "ifElse";
      children = [parser(elm.consequent), parser(elm.alternate)];
    }
    return { node, condition: parser(elm.test), children };
  }
  MemberExpression(elm, parser, list) {
    var res = [
      parser(elm.object, "memexp"),
      parser(elm.property, "memexp"),
    ].flat(Infinity);
    if (list) return res;
    //console.log(res)
    return { node: "propertyAccess", property: res.join(".") };
  }
  NewExpression(elm, parser) {
    var params = [];
    elm.arguments.forEach((param) => {
      params.push(parser(param.expression));
    });
    return { node: "classInit", name: elm.callee.value, params };
  }
  NullLiteral(elm, parser) {
    return { node: "literal", type: "null" };
  }
  NumericLiteral(elm, parser) {
    return { node: "literal", type: "number", value: elm.value };
  }
  ObjectExpression(elm, parser) {
    var node = { node: "hashmap" };
    elm.properties.forEach((prop) => {
      node.children.push({ key: prop.key.value, value: parser(prop.value) });
    });
    return node;
  }
  ReturnStatement(elm, parser) {
    return { node: "return", children: parser(elm.argument) };
  }
  StringLiteral(elm, parser) {
    return { node: "literal", type: "string", value: elm.value };
  }
  TemplateElement(elm, parser) {
    return {
      node: "literal",
      type: "string",
      value: elm.cooked,
      tail: elm.tail,
    };
  }
  TemplateLiteral(elm, parser) {
    var inserts = parser(elm.expressions);
    var node = { node: "templateLit", type: "string", value: [] };
    parser(elm.quasis).forEach((str, i) => {
      var cleaned = util.copy(str);
      delete cleaned.tail;
      if (cleaned.value != "") node.value.push(cleaned);
      if (str.tail != true) node.value.push(inserts[i]);
    });
    return node;
  }
  ThisExpression(elm, parser) {
    return { node: "this" };
  }
  TryStatement(elm, parser) {
    var node = { node: "try", children: parser(elm.body) };
    if (elm.handler) node.catch = parser(elm.handler);
    if (elm.finalizer) node.finally = parser(elm.finalizer);
    return node;
  }
  UnaryExpression(elm, parser) {
    var node;
    var type;
    util.checkOp(
      ["~"],
      () => {
        node = "bitwise";
        type = "binary";
      },
      elm,
    );
    util.checkOp(
      ["delete"],
      () => {
        node = "delete";
      },
      elm,
    );
    util.checkOp(
      ["typeof"],
      () => {
        node = "typeof";
        type = "string";
      },
      elm,
    );
    util.checkOp(
      ["!"],
      () => {
        node = "logic";
        type = "bool";
      },
      elm,
    );
    util.checkOp(
      ["-"],
      () => {
        node = "literal";
        type = "number";
      },
      elm,
    );
    if (type == "number")
      return { node, type, value: parser(elm.argument).value };
    return {
      node,
      type,
      children: parser(elm.argument),
      operation: elm.operator,
    };
  }
  UpdateExpression(elm, parser) {
    var node = { node: "dec", type: "number", children: parser(elm.argument) };
    if (elm.operator == "++") node.node = "inc";
    return node;
  }
  VariableDeclaration(elm, parser) {
    //console.log(this)
    data = this.data;
    data.var = data.var || {};
    elm = elm.declarations[0];
    var name = elm.id.value;
    var children = parser(elm.init);
    if (elm.id.typeAnnotation) var type = parser(elm.id.typeAnnotation);
    if (data.var.hasOwnProperty(`${name}|${data.scope}`)) {
      if (data.var[`${name}|${data.scope}`].type != children.type) {
        if (data.var[`${name}|${data.scope}`] != undefined) {
          util.error(
            "Illegal Type Reassignment",
            "TypeError",
            elm.span,
            this.data,
          );
        }
      }
    }
    data.var[`${name}|${data.scope}`] = {
      node: "var",
      type: children.type || type,
      children,
      name,
      scope: data.scope,
    };
    return data.var[`${name}|${data.scope}`];
  }
  WhileStatement(elm, parser) {
    return {
      node: "while",
      condition: parser(elm.test),
      children: parser(elm.body),
    };
  }
}
