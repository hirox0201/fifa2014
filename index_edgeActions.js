
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_touch_a}","click",function(sym,e){sym.getSymbol("info_a").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touch_b}","click",function(sym,e){sym.getSymbol("info_b").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touch_c}","click",function(sym,e){sym.getSymbol("info_c").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touch_d}","click",function(sym,e){sym.getSymbol("info_d").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touch_e}","click",function(sym,e){sym.getSymbol("info_e").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touch_f}","click",function(sym,e){sym.getSymbol("info_f").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touch_g}","click",function(sym,e){sym.getSymbol("info_g").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_touch_h}","click",function(sym,e){sym.getSymbol("info_h").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_say1}","click",function(sym,e){sym.getSymbol("info_a").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_say2}","click",function(sym,e){sym.getSymbol("info_b").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_say3}","click",function(sym,e){sym.getSymbol("info_c").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_say4}","click",function(sym,e){sym.getSymbol("info_d").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_say5}","click",function(sym,e){sym.getSymbol("info_e").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_say6}","click",function(sym,e){sym.getSymbol("info_f").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_say7}","click",function(sym,e){sym.getSymbol("info_g").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_say8}","click",function(sym,e){sym.getSymbol("info_h").play();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'player1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.play(0);});
//Edge binding end
})("player1");
//Edge symbol end:'player1'

//=========================================================

//Edge symbol: 'player2'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5000,function(sym,e){sym.play(0);});
//Edge binding end
})("player2");
//Edge symbol end:'player2'

//=========================================================

//Edge symbol: 'player3'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4067,function(sym,e){sym.play(0);});
//Edge binding end
})("player3");
//Edge symbol end:'player3'

//=========================================================

//Edge symbol: 'player4'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4867,function(sym,e){sym.play(0);});
//Edge binding end
})("player4");
//Edge symbol end:'player4'

//=========================================================

//Edge symbol: 'run_a'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_a_1}","click",function(sym,e){sym.getSymbol("info_a01").play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.play(0);});
//Edge binding end
})("run_a");
//Edge symbol end:'run_a'

//=========================================================

//Edge symbol: 'info_a01'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_close}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1300,function(sym,e){sym.stop();});
//Edge binding end
})("info_a");
//Edge symbol end:'info_a'

//=========================================================

//=========================================================

//Edge symbol: 'info_a01'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_close}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1300,function(sym,e){sym.stop();});
//Edge binding end
})("info_b");
//Edge symbol end:'info_b'

//=========================================================

//=========================================================

//Edge symbol: 'info_a01'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_close}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1300,function(sym,e){sym.stop();});
//Edge binding end
})("info_c");
//Edge symbol end:'info_c'

//=========================================================

//=========================================================

//Edge symbol: 'info_a01'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_close}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1300,function(sym,e){sym.stop();});
//Edge binding end
})("info_d");
//Edge symbol end:'info_d'

//=========================================================

//=========================================================

//Edge symbol: 'info_a01'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_close}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1300,function(sym,e){sym.stop();});
//Edge binding end
})("info_e");
//Edge symbol end:'info_e'

//=========================================================

//=========================================================

//=========================================================

//Edge symbol: 'info_a01'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_close}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1300,function(sym,e){sym.stop();});
//Edge binding end
})("info_f");
//Edge symbol end:'info_f'

//=========================================================

//=========================================================

//=========================================================

//Edge symbol: 'info_a01'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_close}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1300,function(sym,e){sym.stop();});
//Edge binding end
})("info_g");
//Edge symbol end:'info_g'

//=========================================================

//=========================================================

//=========================================================

//Edge symbol: 'info_a01'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_close}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1300,function(sym,e){sym.stop();});
//Edge binding end
})("info_h");
//Edge symbol end:'info_h'
})(jQuery,AdobeEdge,"EDGE-16538052");