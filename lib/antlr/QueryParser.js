// Generated from build/Query.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var QueryListener = require('./QueryListener').QueryListener;
var grammarFileName = "Query.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u001d\u0094\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u00023\n\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0007\u0002;\n\u0002\f\u0002\u000e\u0002>\u000b\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003E\n\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004R",
    "\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0005\u000e}\n\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u008c\n\u0014",
    "\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0002\u0003\u0002\u0018\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,\u0002\u0002\u0092",
    "\u00022\u0003\u0002\u0002\u0002\u0004D\u0003\u0002\u0002\u0002\u0006",
    "Q\u0003\u0002\u0002\u0002\bS\u0003\u0002\u0002\u0002\nV\u0003\u0002",
    "\u0002\u0002\fZ\u0003\u0002\u0002\u0002\u000e^\u0003\u0002\u0002\u0002",
    "\u0010b\u0003\u0002\u0002\u0002\u0012f\u0003\u0002\u0002\u0002\u0014",
    "j\u0003\u0002\u0002\u0002\u0016n\u0003\u0002\u0002\u0002\u0018r\u0003",
    "\u0002\u0002\u0002\u001a|\u0003\u0002\u0002\u0002\u001c~\u0003\u0002",
    "\u0002\u0002\u001e\u0080\u0003\u0002\u0002\u0002 \u0082\u0003\u0002",
    "\u0002\u0002\"\u0084\u0003\u0002\u0002\u0002$\u0086\u0003\u0002\u0002",
    "\u0002&\u008b\u0003\u0002\u0002\u0002(\u008d\u0003\u0002\u0002\u0002",
    "*\u008f\u0003\u0002\u0002\u0002,\u0091\u0003\u0002\u0002\u0002./\b\u0002",
    "\u0001\u0002/3\u0005\u0004\u0003\u000201\u0007\u0003\u0002\u000213\u0005",
    "\u0002\u0002\u00052.\u0003\u0002\u0002\u000220\u0003\u0002\u0002\u0002",
    "3<\u0003\u0002\u0002\u000245\f\u0004\u0002\u000256\u0007\u0004\u0002",
    "\u00026;\u0005\u0002\u0002\u000578\f\u0003\u0002\u000289\u0007\u0005",
    "\u0002\u00029;\u0005\u0002\u0002\u0004:4\u0003\u0002\u0002\u0002:7\u0003",
    "\u0002\u0002\u0002;>\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002",
    "<=\u0003\u0002\u0002\u0002=\u0003\u0003\u0002\u0002\u0002><\u0003\u0002",
    "\u0002\u0002?@\u0007\u0006\u0002\u0002@A\u0005\u0002\u0002\u0002AB\u0007",
    "\u0007\u0002\u0002BE\u0003\u0002\u0002\u0002CE\u0005\u0006\u0004\u0002",
    "D?\u0003\u0002\u0002\u0002DC\u0003\u0002\u0002\u0002E\u0005\u0003\u0002",
    "\u0002\u0002FR\u0005\b\u0005\u0002GR\u0005\n\u0006\u0002HR\u0005\f\u0007",
    "\u0002IR\u0005\u000e\b\u0002JR\u0005\u0010\t\u0002KR\u0005\u0012\n\u0002",
    "LR\u0005\u0014\u000b\u0002MR\u0005\u0016\f\u0002NR\u0005\u0018\r\u0002",
    "OR\u0005\u001c\u000f\u0002PR\u0005\u001a\u000e\u0002QF\u0003\u0002\u0002",
    "\u0002QG\u0003\u0002\u0002\u0002QH\u0003\u0002\u0002\u0002QI\u0003\u0002",
    "\u0002\u0002QJ\u0003\u0002\u0002\u0002QK\u0003\u0002\u0002\u0002QL\u0003",
    "\u0002\u0002\u0002QM\u0003\u0002\u0002\u0002QN\u0003\u0002\u0002\u0002",
    "QO\u0003\u0002\u0002\u0002QP\u0003\u0002\u0002\u0002R\u0007\u0003\u0002",
    "\u0002\u0002ST\u0007\b\u0002\u0002TU\u0005\u001e\u0010\u0002U\t\u0003",
    "\u0002\u0002\u0002VW\u0005\u001a\u000e\u0002WX\u0007\t\u0002\u0002X",
    "Y\u0005\u001a\u000e\u0002Y\u000b\u0003\u0002\u0002\u0002Z[\u0005\u001a",
    "\u000e\u0002[\\\u0007\n\u0002\u0002\\]\u0005\u001a\u000e\u0002]\r\u0003",
    "\u0002\u0002\u0002^_\u0005\u001a\u000e\u0002_`\u0007\u000b\u0002\u0002",
    "`a\u0005&\u0014\u0002a\u000f\u0003\u0002\u0002\u0002bc\u0005\u001a\u000e",
    "\u0002cd\u0007\f\u0002\u0002de\u0005&\u0014\u0002e\u0011\u0003\u0002",
    "\u0002\u0002fg\u0005\u001a\u000e\u0002gh\u0007\r\u0002\u0002hi\u0005",
    "&\u0014\u0002i\u0013\u0003\u0002\u0002\u0002jk\u0005\u001a\u000e\u0002",
    "kl\u0007\u000e\u0002\u0002lm\u0005&\u0014\u0002m\u0015\u0003\u0002\u0002",
    "\u0002no\u0005\u001a\u000e\u0002op\u0007\u000f\u0002\u0002pq\u0005\u001e",
    "\u0010\u0002q\u0017\u0003\u0002\u0002\u0002rs\u0005\u001a\u000e\u0002",
    "st\u0007\u0010\u0002\u0002tu\u0005\u001e\u0010\u0002u\u0019\u0003\u0002",
    "\u0002\u0002v}\u0005 \u0011\u0002w}\u0005\"\u0012\u0002x}\u0005$\u0013",
    "\u0002y}\u0005&\u0014\u0002z}\u0005\u001e\u0010\u0002{}\u0005\u001c",
    "\u000f\u0002|v\u0003\u0002\u0002\u0002|w\u0003\u0002\u0002\u0002|x\u0003",
    "\u0002\u0002\u0002|y\u0003\u0002\u0002\u0002|z\u0003\u0002\u0002\u0002",
    "|{\u0003\u0002\u0002\u0002}\u001b\u0003\u0002\u0002\u0002~\u007f\u0007",
    "\u001c\u0002\u0002\u007f\u001d\u0003\u0002\u0002\u0002\u0080\u0081\u0007",
    "\u0011\u0002\u0002\u0081\u001f\u0003\u0002\u0002\u0002\u0082\u0083\u0007",
    "\u001a\u0002\u0002\u0083!\u0003\u0002\u0002\u0002\u0084\u0085\u0007",
    "\u001b\u0002\u0002\u0085#\u0003\u0002\u0002\u0002\u0086\u0087\u0007",
    "\u0019\u0002\u0002\u0087%\u0003\u0002\u0002\u0002\u0088\u008c\u0005",
    "(\u0015\u0002\u0089\u008c\u0005*\u0016\u0002\u008a\u008c\u0005,\u0017",
    "\u0002\u008b\u0088\u0003\u0002\u0002\u0002\u008b\u0089\u0003\u0002\u0002",
    "\u0002\u008b\u008a\u0003\u0002\u0002\u0002\u008c\'\u0003\u0002\u0002",
    "\u0002\u008d\u008e\u0007\u0012\u0002\u0002\u008e)\u0003\u0002\u0002",
    "\u0002\u008f\u0090\u0007\u0015\u0002\u0002\u0090+\u0003\u0002\u0002",
    "\u0002\u0091\u0092\u0007\u0014\u0002\u0002\u0092-\u0003\u0002\u0002",
    "\u0002\t2:<DQ|\u008b"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'not'", "'and'", "'or'", "'('", "')'", "'tagged'", 
                     "'='", "'!='", "'<'", "'>'", "'<='", "'>='", "'=~'", 
                     "'~='", null, null, null, null, null, null, null, null, 
                     null, "'true'", "'false'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, "STRING", "FLOAT", 
                      "HEX", "LONG", "BIGN", "CHAR_U", "CHAR_NAMED", "CHAR_ANY", 
                      "NIL", "TRUE", "FALSE", "NAME", "WS" ];

var ruleNames =  [ "predicate", "primary", "simple", "tagged", "equal", 
                   "not_equal", "lesser", "greater", "lesser_equal", "greater_equal", 
                   "like", "regex_match", "value", "field", "string", "r_true", 
                   "r_false", "nil", "number", "r_float", "bign", "r_long" ];

function QueryParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

QueryParser.prototype = Object.create(antlr4.Parser.prototype);
QueryParser.prototype.constructor = QueryParser;

Object.defineProperty(QueryParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

QueryParser.EOF = antlr4.Token.EOF;
QueryParser.T__0 = 1;
QueryParser.T__1 = 2;
QueryParser.T__2 = 3;
QueryParser.T__3 = 4;
QueryParser.T__4 = 5;
QueryParser.T__5 = 6;
QueryParser.T__6 = 7;
QueryParser.T__7 = 8;
QueryParser.T__8 = 9;
QueryParser.T__9 = 10;
QueryParser.T__10 = 11;
QueryParser.T__11 = 12;
QueryParser.T__12 = 13;
QueryParser.T__13 = 14;
QueryParser.STRING = 15;
QueryParser.FLOAT = 16;
QueryParser.HEX = 17;
QueryParser.LONG = 18;
QueryParser.BIGN = 19;
QueryParser.CHAR_U = 20;
QueryParser.CHAR_NAMED = 21;
QueryParser.CHAR_ANY = 22;
QueryParser.NIL = 23;
QueryParser.TRUE = 24;
QueryParser.FALSE = 25;
QueryParser.NAME = 26;
QueryParser.WS = 27;

QueryParser.RULE_predicate = 0;
QueryParser.RULE_primary = 1;
QueryParser.RULE_simple = 2;
QueryParser.RULE_tagged = 3;
QueryParser.RULE_equal = 4;
QueryParser.RULE_not_equal = 5;
QueryParser.RULE_lesser = 6;
QueryParser.RULE_greater = 7;
QueryParser.RULE_lesser_equal = 8;
QueryParser.RULE_greater_equal = 9;
QueryParser.RULE_like = 10;
QueryParser.RULE_regex_match = 11;
QueryParser.RULE_value = 12;
QueryParser.RULE_field = 13;
QueryParser.RULE_string = 14;
QueryParser.RULE_r_true = 15;
QueryParser.RULE_r_false = 16;
QueryParser.RULE_nil = 17;
QueryParser.RULE_number = 18;
QueryParser.RULE_r_float = 19;
QueryParser.RULE_bign = 20;
QueryParser.RULE_r_long = 21;

function PredicateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_predicate;
    return this;
}

PredicateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PredicateContext.prototype.constructor = PredicateContext;

PredicateContext.prototype.primary = function() {
    return this.getTypedRuleContext(PrimaryContext,0);
};

PredicateContext.prototype.predicate = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PredicateContext);
    } else {
        return this.getTypedRuleContext(PredicateContext,i);
    }
};

PredicateContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterPredicate(this);
	}
};

PredicateContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitPredicate(this);
	}
};



QueryParser.prototype.predicate = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new PredicateContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 0;
    this.enterRecursionRule(localctx, 0, QueryParser.RULE_predicate, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 48;
        switch(this._input.LA(1)) {
        case QueryParser.T__3:
        case QueryParser.T__5:
        case QueryParser.STRING:
        case QueryParser.FLOAT:
        case QueryParser.LONG:
        case QueryParser.BIGN:
        case QueryParser.NIL:
        case QueryParser.TRUE:
        case QueryParser.FALSE:
        case QueryParser.NAME:
            this.state = 45;
            this.primary();
            break;
        case QueryParser.T__0:
            this.state = 46;
            this.match(QueryParser.T__0);
            this.state = 47;
            this.predicate(3);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 58;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 56;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new PredicateContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, QueryParser.RULE_predicate);
                    this.state = 50;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 51;
                    this.match(QueryParser.T__1);
                    this.state = 52;
                    this.predicate(3);
                    break;

                case 2:
                    localctx = new PredicateContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, QueryParser.RULE_predicate);
                    this.state = 53;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 54;
                    this.match(QueryParser.T__2);
                    this.state = 55;
                    this.predicate(2);
                    break;

                } 
            }
            this.state = 60;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function PrimaryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_primary;
    return this;
}

PrimaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimaryContext.prototype.constructor = PrimaryContext;

PrimaryContext.prototype.predicate = function() {
    return this.getTypedRuleContext(PredicateContext,0);
};

PrimaryContext.prototype.simple = function() {
    return this.getTypedRuleContext(SimpleContext,0);
};

PrimaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterPrimary(this);
	}
};

PrimaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitPrimary(this);
	}
};




QueryParser.PrimaryContext = PrimaryContext;

QueryParser.prototype.primary = function() {

    var localctx = new PrimaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, QueryParser.RULE_primary);
    try {
        this.state = 66;
        switch(this._input.LA(1)) {
        case QueryParser.T__3:
            this.enterOuterAlt(localctx, 1);
            this.state = 61;
            this.match(QueryParser.T__3);
            this.state = 62;
            this.predicate(0);
            this.state = 63;
            this.match(QueryParser.T__4);
            break;
        case QueryParser.T__5:
        case QueryParser.STRING:
        case QueryParser.FLOAT:
        case QueryParser.LONG:
        case QueryParser.BIGN:
        case QueryParser.NIL:
        case QueryParser.TRUE:
        case QueryParser.FALSE:
        case QueryParser.NAME:
            this.enterOuterAlt(localctx, 2);
            this.state = 65;
            this.simple();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SimpleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_simple;
    return this;
}

SimpleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleContext.prototype.constructor = SimpleContext;

SimpleContext.prototype.tagged = function() {
    return this.getTypedRuleContext(TaggedContext,0);
};

SimpleContext.prototype.equal = function() {
    return this.getTypedRuleContext(EqualContext,0);
};

SimpleContext.prototype.not_equal = function() {
    return this.getTypedRuleContext(Not_equalContext,0);
};

SimpleContext.prototype.lesser = function() {
    return this.getTypedRuleContext(LesserContext,0);
};

SimpleContext.prototype.greater = function() {
    return this.getTypedRuleContext(GreaterContext,0);
};

SimpleContext.prototype.lesser_equal = function() {
    return this.getTypedRuleContext(Lesser_equalContext,0);
};

SimpleContext.prototype.greater_equal = function() {
    return this.getTypedRuleContext(Greater_equalContext,0);
};

SimpleContext.prototype.like = function() {
    return this.getTypedRuleContext(LikeContext,0);
};

SimpleContext.prototype.regex_match = function() {
    return this.getTypedRuleContext(Regex_matchContext,0);
};

SimpleContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

SimpleContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

SimpleContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterSimple(this);
	}
};

SimpleContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitSimple(this);
	}
};




QueryParser.SimpleContext = SimpleContext;

QueryParser.prototype.simple = function() {

    var localctx = new SimpleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, QueryParser.RULE_simple);
    try {
        this.state = 79;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 68;
            this.tagged();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 69;
            this.equal();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 70;
            this.not_equal();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 71;
            this.lesser();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 72;
            this.greater();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 73;
            this.lesser_equal();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 74;
            this.greater_equal();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 75;
            this.like();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 76;
            this.regex_match();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 77;
            this.field();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 78;
            this.value();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TaggedContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_tagged;
    return this;
}

TaggedContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TaggedContext.prototype.constructor = TaggedContext;

TaggedContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

TaggedContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterTagged(this);
	}
};

TaggedContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitTagged(this);
	}
};




QueryParser.TaggedContext = TaggedContext;

QueryParser.prototype.tagged = function() {

    var localctx = new TaggedContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, QueryParser.RULE_tagged);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 81;
        this.match(QueryParser.T__5);
        this.state = 82;
        this.string();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EqualContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_equal;
    return this;
}

EqualContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EqualContext.prototype.constructor = EqualContext;

EqualContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

EqualContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterEqual(this);
	}
};

EqualContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitEqual(this);
	}
};




QueryParser.EqualContext = EqualContext;

QueryParser.prototype.equal = function() {

    var localctx = new EqualContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, QueryParser.RULE_equal);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 84;
        this.value();
        this.state = 85;
        this.match(QueryParser.T__6);
        this.state = 86;
        this.value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Not_equalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_not_equal;
    return this;
}

Not_equalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Not_equalContext.prototype.constructor = Not_equalContext;

Not_equalContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

Not_equalContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterNot_equal(this);
	}
};

Not_equalContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitNot_equal(this);
	}
};




QueryParser.Not_equalContext = Not_equalContext;

QueryParser.prototype.not_equal = function() {

    var localctx = new Not_equalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, QueryParser.RULE_not_equal);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 88;
        this.value();
        this.state = 89;
        this.match(QueryParser.T__7);
        this.state = 90;
        this.value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LesserContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_lesser;
    return this;
}

LesserContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LesserContext.prototype.constructor = LesserContext;

LesserContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

LesserContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

LesserContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterLesser(this);
	}
};

LesserContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitLesser(this);
	}
};




QueryParser.LesserContext = LesserContext;

QueryParser.prototype.lesser = function() {

    var localctx = new LesserContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, QueryParser.RULE_lesser);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 92;
        this.value();
        this.state = 93;
        this.match(QueryParser.T__8);
        this.state = 94;
        this.number();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GreaterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_greater;
    return this;
}

GreaterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GreaterContext.prototype.constructor = GreaterContext;

GreaterContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

GreaterContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

GreaterContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterGreater(this);
	}
};

GreaterContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitGreater(this);
	}
};




QueryParser.GreaterContext = GreaterContext;

QueryParser.prototype.greater = function() {

    var localctx = new GreaterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, QueryParser.RULE_greater);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 96;
        this.value();
        this.state = 97;
        this.match(QueryParser.T__9);
        this.state = 98;
        this.number();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Lesser_equalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_lesser_equal;
    return this;
}

Lesser_equalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Lesser_equalContext.prototype.constructor = Lesser_equalContext;

Lesser_equalContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

Lesser_equalContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

Lesser_equalContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterLesser_equal(this);
	}
};

Lesser_equalContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitLesser_equal(this);
	}
};




QueryParser.Lesser_equalContext = Lesser_equalContext;

QueryParser.prototype.lesser_equal = function() {

    var localctx = new Lesser_equalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, QueryParser.RULE_lesser_equal);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 100;
        this.value();
        this.state = 101;
        this.match(QueryParser.T__10);
        this.state = 102;
        this.number();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Greater_equalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_greater_equal;
    return this;
}

Greater_equalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Greater_equalContext.prototype.constructor = Greater_equalContext;

Greater_equalContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

Greater_equalContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

Greater_equalContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterGreater_equal(this);
	}
};

Greater_equalContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitGreater_equal(this);
	}
};




QueryParser.Greater_equalContext = Greater_equalContext;

QueryParser.prototype.greater_equal = function() {

    var localctx = new Greater_equalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, QueryParser.RULE_greater_equal);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        this.value();
        this.state = 105;
        this.match(QueryParser.T__11);
        this.state = 106;
        this.number();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LikeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_like;
    return this;
}

LikeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LikeContext.prototype.constructor = LikeContext;

LikeContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

LikeContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

LikeContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterLike(this);
	}
};

LikeContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitLike(this);
	}
};




QueryParser.LikeContext = LikeContext;

QueryParser.prototype.like = function() {

    var localctx = new LikeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, QueryParser.RULE_like);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 108;
        this.value();
        this.state = 109;
        this.match(QueryParser.T__12);
        this.state = 110;
        this.string();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Regex_matchContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_regex_match;
    return this;
}

Regex_matchContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Regex_matchContext.prototype.constructor = Regex_matchContext;

Regex_matchContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

Regex_matchContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

Regex_matchContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterRegex_match(this);
	}
};

Regex_matchContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitRegex_match(this);
	}
};




QueryParser.Regex_matchContext = Regex_matchContext;

QueryParser.prototype.regex_match = function() {

    var localctx = new Regex_matchContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, QueryParser.RULE_regex_match);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 112;
        this.value();
        this.state = 113;
        this.match(QueryParser.T__13);
        this.state = 114;
        this.string();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.r_true = function() {
    return this.getTypedRuleContext(R_trueContext,0);
};

ValueContext.prototype.r_false = function() {
    return this.getTypedRuleContext(R_falseContext,0);
};

ValueContext.prototype.nil = function() {
    return this.getTypedRuleContext(NilContext,0);
};

ValueContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

ValueContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

ValueContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitValue(this);
	}
};




QueryParser.ValueContext = ValueContext;

QueryParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, QueryParser.RULE_value);
    try {
        this.state = 122;
        switch(this._input.LA(1)) {
        case QueryParser.TRUE:
            this.enterOuterAlt(localctx, 1);
            this.state = 116;
            this.r_true();
            break;
        case QueryParser.FALSE:
            this.enterOuterAlt(localctx, 2);
            this.state = 117;
            this.r_false();
            break;
        case QueryParser.NIL:
            this.enterOuterAlt(localctx, 3);
            this.state = 118;
            this.nil();
            break;
        case QueryParser.FLOAT:
        case QueryParser.LONG:
        case QueryParser.BIGN:
            this.enterOuterAlt(localctx, 4);
            this.state = 119;
            this.number();
            break;
        case QueryParser.STRING:
            this.enterOuterAlt(localctx, 5);
            this.state = 120;
            this.string();
            break;
        case QueryParser.NAME:
            this.enterOuterAlt(localctx, 6);
            this.state = 121;
            this.field();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_field;
    return this;
}

FieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldContext.prototype.constructor = FieldContext;

FieldContext.prototype.NAME = function() {
    return this.getToken(QueryParser.NAME, 0);
};

FieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterField(this);
	}
};

FieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitField(this);
	}
};




QueryParser.FieldContext = FieldContext;

QueryParser.prototype.field = function() {

    var localctx = new FieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, QueryParser.RULE_field);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 124;
        this.match(QueryParser.NAME);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_string;
    return this;
}

StringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringContext.prototype.constructor = StringContext;

StringContext.prototype.STRING = function() {
    return this.getToken(QueryParser.STRING, 0);
};

StringContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterString(this);
	}
};

StringContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitString(this);
	}
};




QueryParser.StringContext = StringContext;

QueryParser.prototype.string = function() {

    var localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, QueryParser.RULE_string);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 126;
        this.match(QueryParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function R_trueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_r_true;
    return this;
}

R_trueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
R_trueContext.prototype.constructor = R_trueContext;

R_trueContext.prototype.TRUE = function() {
    return this.getToken(QueryParser.TRUE, 0);
};

R_trueContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterR_true(this);
	}
};

R_trueContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitR_true(this);
	}
};




QueryParser.R_trueContext = R_trueContext;

QueryParser.prototype.r_true = function() {

    var localctx = new R_trueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, QueryParser.RULE_r_true);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        this.match(QueryParser.TRUE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function R_falseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_r_false;
    return this;
}

R_falseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
R_falseContext.prototype.constructor = R_falseContext;

R_falseContext.prototype.FALSE = function() {
    return this.getToken(QueryParser.FALSE, 0);
};

R_falseContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterR_false(this);
	}
};

R_falseContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitR_false(this);
	}
};




QueryParser.R_falseContext = R_falseContext;

QueryParser.prototype.r_false = function() {

    var localctx = new R_falseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, QueryParser.RULE_r_false);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 130;
        this.match(QueryParser.FALSE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NilContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_nil;
    return this;
}

NilContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NilContext.prototype.constructor = NilContext;

NilContext.prototype.NIL = function() {
    return this.getToken(QueryParser.NIL, 0);
};

NilContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterNil(this);
	}
};

NilContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitNil(this);
	}
};




QueryParser.NilContext = NilContext;

QueryParser.prototype.nil = function() {

    var localctx = new NilContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, QueryParser.RULE_nil);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
        this.match(QueryParser.NIL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.r_float = function() {
    return this.getTypedRuleContext(R_floatContext,0);
};

NumberContext.prototype.bign = function() {
    return this.getTypedRuleContext(BignContext,0);
};

NumberContext.prototype.r_long = function() {
    return this.getTypedRuleContext(R_longContext,0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitNumber(this);
	}
};




QueryParser.NumberContext = NumberContext;

QueryParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, QueryParser.RULE_number);
    try {
        this.state = 137;
        switch(this._input.LA(1)) {
        case QueryParser.FLOAT:
            this.enterOuterAlt(localctx, 1);
            this.state = 134;
            this.r_float();
            break;
        case QueryParser.BIGN:
            this.enterOuterAlt(localctx, 2);
            this.state = 135;
            this.bign();
            break;
        case QueryParser.LONG:
            this.enterOuterAlt(localctx, 3);
            this.state = 136;
            this.r_long();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function R_floatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_r_float;
    return this;
}

R_floatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
R_floatContext.prototype.constructor = R_floatContext;

R_floatContext.prototype.FLOAT = function() {
    return this.getToken(QueryParser.FLOAT, 0);
};

R_floatContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterR_float(this);
	}
};

R_floatContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitR_float(this);
	}
};




QueryParser.R_floatContext = R_floatContext;

QueryParser.prototype.r_float = function() {

    var localctx = new R_floatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, QueryParser.RULE_r_float);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 139;
        this.match(QueryParser.FLOAT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_bign;
    return this;
}

BignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BignContext.prototype.constructor = BignContext;

BignContext.prototype.BIGN = function() {
    return this.getToken(QueryParser.BIGN, 0);
};

BignContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterBign(this);
	}
};

BignContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitBign(this);
	}
};




QueryParser.BignContext = BignContext;

QueryParser.prototype.bign = function() {

    var localctx = new BignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, QueryParser.RULE_bign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 141;
        this.match(QueryParser.BIGN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function R_longContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QueryParser.RULE_r_long;
    return this;
}

R_longContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
R_longContext.prototype.constructor = R_longContext;

R_longContext.prototype.LONG = function() {
    return this.getToken(QueryParser.LONG, 0);
};

R_longContext.prototype.enterRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.enterR_long(this);
	}
};

R_longContext.prototype.exitRule = function(listener) {
    if(listener instanceof QueryListener ) {
        listener.exitR_long(this);
	}
};




QueryParser.R_longContext = R_longContext;

QueryParser.prototype.r_long = function() {

    var localctx = new R_longContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, QueryParser.RULE_r_long);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        this.match(QueryParser.LONG);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


QueryParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 0:
			return this.predicate_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

QueryParser.prototype.predicate_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		case 1:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.QueryParser = QueryParser;
