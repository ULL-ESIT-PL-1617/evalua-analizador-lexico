// Transform a token object into an exception object and throw it.
//  http://stackoverflow.com/questions/17857670/javascript-prototype-throw-the-error-as-object-object-object-has-no-method
// Thanks Eliasib for pointing the error
Object.constructor.prototype.error = function (message, t) {
    t = t || this;
    t.name = "SyntaxError";
    t.message = message;
    throw t;
};

function main() {
    var parse = make_parse();

    var source = _____.value;
    var string, tree;
    try {
        tree = parse(source);
        string = JSON.stringify(tree, ['key', 'name', 'message',
             'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
    } catch (e) {
        string = JSON.stringify(e, ['name', 'message', 'from', 'to', 'key',
                'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
    }
    ______.innerHTML = string.replace(/&/g, '&amp;').replace(/[<]/g, '&lt;');
};

window.onload = function() {
  PARSE.onclick = main;
}
