const grammar = {
    script: "import* (function||statement||class)",
    import: "IMPORT identfier EOL",
    identfier: /^[-\w\s.]+$/,
    function: "FUNCTION identfier funcPrams ':' type statement",
    type: "['object','void','string','number','bool','array']"
}
const tokens = {
    import: 'import',
    eol: ';',
    function: 'function'
}
