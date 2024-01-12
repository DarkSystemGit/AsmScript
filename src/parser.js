const grammar = {
    script: "import* (function||statement||class)",
    import: "IMPORT identfier EOL",
    identfier: /^[-\w\s.]+$/,
    function: "FUNCTION identfier funcPrams ':' type statement",
    type: "'object','void','string','number','bool','array'",
    funcPrams:"'('(identfier ':' type)? (',' identfier ':' type)*')'",
    statement:"'{' statement '}',"
}
const tokens = {
    import: 'import',
    eol: ';',
    function: 'function'
}