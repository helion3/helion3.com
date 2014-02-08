/**
 * A super-simple DOM helper lib.
 *
 * @author Mike Botsko
 *
 * Contains methods useful for this project, built to mimic
 * jQuery - developers who are familiar with jQuery will
 * have no trouble adapting to this.
 *
 * Works with all browser versions of the past few years.
 */
simpleDOM = function( selector ){

    var _raw_selector = selector;

    var _matches = [];
    if( typeof selector === "object" ){
        _matches = [selector];
    }
    if( typeof selector === "string" ){
        _matches = document.querySelectorAll(_raw_selector);
    }


    var Api = {

        /**
         * Iterates every matching element and applies
         * a function
         * @param  {[type]} closure [description]
         * @return {[type]}         [description]
         */
        each: function( closure ){
            if( typeof closure === "function" ){
                for( var n = 0, l = _matches.length; n < l; n++ ){
                    closure(_matches[n]);
                }
            }
        },


        /**
         * Adds a new CSS class to each element
         *
         * @param className
         * @returns simpleDOM
         */
        addClass: function( className ){
            for( var n = 0, l = _matches.length; n < l; n++ ){
                _matches[n].className += " " + className;
            }
            return this;
        },


        /**
         * Removes a CSS class name from an element
         * @param className
         * @returns simpleDOM
         */
        removeClass: function( className ){
            var regex = new RegExp('(?:^|\\s)'+className+'(?!\\S)');
            for( var n = 0, l = _matches.length; n < l; n++ ){
                _matches[n].className = _matches[n].className.replace( regex , '' );
            }
            return this;
        },

        /**
         * Determine if an element has a CSS class name.
         *
         * @todo Only works for the first element matched by
         * the selector. Will not currently work on subsequent
         * elements
         *
         * @param className
         * @returns boolean
         */
        hasClass: function( className ){
            var regex = new RegExp('(?:^|\\s)'+className+'(?!\\S)');
            if( _matches.length >= 1 ){
                return this.get(0).className.match( regex );
            }
            return false;
        },


        /**
         * Binds eventHandler of eventType to all elements
         * matching selector.
         *
         * @param eventType
         * @param eventHandler
         * @returns simpleDOM
         */
        bind: function( eventType, eventHandler ){

            for( var n = 0, l = _matches.length; n < l; n++ ){
                var eventElem = _matches[n];
                if(eventElem.addEventListener){
                    eventElem.addEventListener(eventType, eventHandler, false);
                } else {
                    eventElem.attachEvent('on'+eventType, eventHandler);
                }
            }
            return this;
        },


        /**
         * Unbinds an event from all elements matching selector.
         *
         * @param eventType
         * @param eventHandler
         * @returns {*}
         */
        unbind: function( eventType, eventHandler ){

            for( var n = 0, l = _matches.length; n < l; n++ ){
                var eventElem = _matches[n];
                if(eventElem.removeEventListener){
                    eventElem.removeEventListener(eventType, eventHandler, false);
                } else {
                    eventElem.detachEvent('on'+eventType, eventHandler);
                }
            }
            return this;
        },


        /**
         * Set css attribute values
         *
         * @param att
         * @param val
         * @returns simpleDOM
         */
        css: function( att, val ){
            for( var n = 0, l = _matches.length; n < l; n++ ){
                _matches[n].style[att] = val;
            }
            return this;
        },


        /**
         * Short-cut for hiding an element
         *
         * @returns simpleDOM
         */
        hide: function(){
            this.css('display', 'none');
            return this;
        },


        /**
         * Short-cut for showing a hidden element
         *
         * @returns simpleDOM
         */
        show: function(){
            this.css('display', 'block');
            return this;
        },


        /**
         * Add a new HTML attribute attr with value val
         *
         * @param attr
         * @param val
         * @returns simpleDOM
         */
        addAttr: function( attr, val ){
            for( var n = 0, l = _matches.length; n < l; n++ ){
                var newAttr = document.createAttribute(attr);
                newAttr.value = val;
                _matches[n].setAttributeNode(newAttr);
            }
            return this;
        },


        /**
         * Returns the current value of an HTML attribute
         *
         * @param attr
         * @returns {string}
         */
        attr: function( attr ){
            return this.get(0).getAttribute(attr);
        },


        /**
         * Removes an HTML attribute
         * @param attr
         * @returns simpleDOM
         */
        removeAttr: function( attr ){
            for( var n = 0, l = _matches.length; n < l; n++ ){
                _matches[n].removeAttribute(attr);
            }
            return this;
        },


        /**
         * Returns the direct element
         * @param k
         * @returns {*}
         */
        get: function(k){
            return _matches[k];
        }
    };

    // Build and return a complete objects
    var returnObj = {};
    for (var k = 0; k < _matches.length; k++ ){
        returnObj[k] = _matches[k];
    }
    for (var attrname in Api){
        returnObj[attrname] = Api[attrname];
    }
    return returnObj;

};