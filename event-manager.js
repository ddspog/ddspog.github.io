/**
 * Event Manager: Created to restrain some events from trigger under some conditions
 *
 * Dennis Dantas
 */
var EventManager = (function(HandleConditions){
    var eventManagerInstance;
    var _createInstance = function(){
        var _click = new HandleConditions();
        var _touchstart = new HandleConditions();

        var __conditionOnEvent = function( special ){
            return function (handle){
                var old = handle.handler;
                var self = this;

                var verifier = special.getVerifier(self);
                var verify = verifier.verify;

                handle.handler = function( ev ) {
                    if(verify(self, ev)){
                        return old.apply(this, arguments);
                    } else {
                        return false;
                    }
                }
            };
        };
        var _addConditionToRun = function(listEvent, condition){
            if(listEvent.indexOf('click') != -1) {
                _click.addCondition(condition);
            } if(listEvent.indexOf('touchstart') != -1) {
                _touchstart.addCondition(condition);
            }
        };
        var _reconfigure = function(){
            $.event.special.click = {
                add: __conditionOnEvent(_click)
            };
            $.event.special.touchstart = {
                add: __conditionOnEvent(_touchstart)
            };
        };

        return {
            addConditionToRun: _addConditionToRun,
            reconfigure: _reconfigure
        };
    };

    return {
        getInstance: function(){
            if(!eventManagerInstance){
                eventManagerInstance = _createInstance();
            }
            return eventManagerInstance;
        }
    };
})
(/* HandleCondition private internal class */ function() {
    var __PreconditionVerifier = function (element, conditions) {
        var preconditions = [];

        conditions.forEach(function (entry) {
            if ($(element).inside(entry.scope))
                preconditions.push(entry);
        });

        var _verify = function (el, ev) {
            for (var i = 0; i < preconditions.length; i++) {
                if (!preconditions[i].pre(el, ev))
                    return false;
            }
            return true;
        };

        return {
            verify: _verify
        };
    };
    var _preconditions = [];

    var _addCondition = function (condition) {
        _preconditions.push({
            name: condition.name,
            pre: condition.pre,
            scope: condition.scope
        });
        return this;
    };
    var _getCondition = function (conditionName) {
        var indexOfElement = -1;
        for (var i = 0; i < _preconditions.length; i++) {
            if (_preconditions[i].name == conditionName) {
                indexOfElement = i;
                break;
            }
        }
        if (indexOfElement > -1)
            return _preconditions[indexOfElement];
        else
            return null;
    };
    var _removeCondition = function (conditionName) {
        var indexOfElement = _preconditions.indexOf(_getCondition(conditionName));
        if (indexOfElement != null)
            _preconditions.slice(indexOfElement, 1);
        return this;
    };
    var _resetConditions = function () {
        _preconditions = [];
        return this;
    };
    var _getVerifier = function (element) {
        return new __PreconditionVerifier(element, _preconditions);
    };

    return {
        addCondition: _addCondition,
        getCondition: _getCondition,
        removeCondition: _removeCondition,
        resetConditions: _resetConditions,
        getVerifier: _getVerifier
    };
})
    .getInstance();

// Utils:
var Square = function(coordinates){
    var _t = coordinates.top;
    var _b = coordinates.bottom;
    var _l = coordinates.left;
    var _r = coordinates.right;

    var _area = function(precision){
        var factor = (1 - precision) / 2;
        var dif_width = factor * (_r - _l),
            dif_height = factor * (_b - _t);
        return {
            top: _t + dif_height,
            bottom: _b - dif_height,
            left: _l + dif_width,
            right: _r - dif_width
        };
    };

    var _inside = function(measure, precision){
        var precision_area = _area(precision);
        return (measure.x < precision_area.right && measure.x > precision_area.left
        && measure.y < precision_area.bottom && measure.y > precision_area.top);
    };

    return {
        inside: _inside
    };
};

var Pre = (function(ShouldQuestion){
    var preconditionsInstance;
    var _createInstance = function(){
        return {
            should: ShouldQuestion
        };
    };
    return {
        getInstance: function(){
            if(!preconditionsInstance)
                preconditionsInstance = _createInstance();
            return preconditionsInstance;
        }
    };
})
(/* ShouldQuestion private internal class */ function(element){
    var _subject = element;
    var _operation = function(el, ev){
        return true;
    };
    var _ignore = function(el, ev){
        return false;
    };

    var _evaluate = function(){
        return function(){
            if(_ignore.apply(this, arguments))
                return true;
            else
                return _operation.apply(this, arguments);
        };
    };

    var _query = function () {
        return $(_subject);
    };

    return {
        not: function(){
            _evaluate = function(){
                return function(){
                    if(_ignore.apply(this, arguments))
                        return true;
                    else
                        return !_operation.apply(this, arguments);
                }
            };
            return this;
        },
        exist: function(){
            _operation = function(el, ev){
                return _query().length;
            };
            return _evaluate();
        },
        apply: function(config){
            _ignore = function(el, ev){
                var query = _query()[0];
                if(query){
                    return !(el.tagName === query.tagName &&
                    el.className === query.className);
                }
                return true;
            };
            var list_operation = [];
            if(config.on) list_operation.push(function(el, ev){
                for(var i = 0; i < config.on.length; i++){
                    if(ev.target.nodeName === config.on[i])
                        return true;
                }
                return false;
            });
            _operation = function(el, ev){
                for(var i = 0; i < list_operation.length; i++){
                    if(!list_operation[i](el, ev))
                        return false;
                }
                return true;
            };
            return _evaluate();
        },
        detail: function(){
            _operation = function(el, ev){
                var element_info = "Event of a " + el.tagName + "." + el.className +" element.\n";
                element_info += "Event it's on X:" + $(el).offset().left + "_" + ($(el).offset().left + $(el).width())
                    + " Y:" + $(el).offset().top + "_" + ($(el).offset().top + $(el).height()) + "\n";
                var event_info = "Triggered by a " + ev.target.nodeName + " element of "+ ev.type + "_" + ev.which + "_" + ev.metaKey+ " type.\n";
                if(ev.type === 'click') {
                    event_info += "Fired on X_" + ev.pageX + " Y_" + ev.pageY + " event.\n";
                    event_info += "With offset of X_" + ev.originalEvent.offsetX + " Y_" + ev.originalEvent.offsetY + " event.\n";
                } else if(ev.type === 'touchstart')
                    event_info += "Fired on X_" + ev.originalEvent.touches[0].pageX + " Y_" + ev.originalEvent.touches[0].pageY +" event.\n";
                console.log(element_info + event_info);
                return true;
            };
            return _evaluate();
        }
    };
})
    .getInstance();

(function( $ ){
    $.fn.restrain = function(listEvent, listCondition) {
        var self = this;
        this.each(function(){
            listCondition.forEach(function (condition){
                EventManager.addConditionToRun(listEvent, {
                    name: condition.name,
                    pre: condition.pre,
                    scope: $(self)
                });
            });
        });
        return this;
    };
    $.fn.reconfigureEvents = function(){
        EventManager.reconfigure();
        return this;
    };
    $.fn.inside = function (element) {
        if(typeof(element) === 'string'){
            var outside = $(element)[0];
            return $(this, outside).length
        } else {
            return $(this, element).length;
        }
    };
})( jQuery );