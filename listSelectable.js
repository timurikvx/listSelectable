(function($){
    
    jQuery.fn.listSelectable = function(options){
        options = $.extend({
            hoverClass: 'hoverClass',
            selectedClass: 'selectedClass',
            multiselect: false,
            thisparent: true,
            notoverselected: false,
            allowdiselect: true,
            showselect: true,
            autohide: true,
            select: $.noop,
            diselect: $.noop,
            selecting: $.noop,
            mouseover: $.noop,
            mouseleave: $.noop
        }, options);
        var elements;
        var parentelement;
        if(options.thisparent){
            elements = this.children();
            parentelement = this;
        }else{
            elements = this;
            parentelement = this.parent();
        }
        var mouseover = function(){
            if($(this).hasClass(options.selectedClass) & options.notoverselected){
                return;
            }
            $(this).addClass(options.hoverClass);
        };
        var mouseout = function(){
            $(this).removeClass(options.hoverClass);
        };
        var mouseclick = function(){
            var current = this;
            if(!options.multiselect){
                elements.each(function(){
                    if(current === this){
                        return true;
                    };
                    $(this).removeClass(options.selectedClass);
                });
                if(options.autohide){
                    parentelement.hide(300);
                }
            }
            if(!options.allowdiselect & $(this).hasClass(options.selectedClass)){
                return;
            }
            if(options.autohide){
                return true;
            }
            $(this).toggleClass(options.selectedClass);
            if($(this).hasClass(options.selectedClass) & options.notoverselected){
                $(this).removeClass(options.hoverClass);
            }
            if($(this).hasClass(options.selectedClass)){
                options.selecting(this, true);
            }else{
                options.selecting(this, false);
            }
        };
        return elements.each(function(){
            $(this).unbind();
            $(this).bind('mouseover', mouseover);
            $(this).bind('mouseover', function(){
                options.mouseover(this);
            });
            $(this).bind('mouseout', mouseout);
            $(this).bind('mouseout', function(){
                options.mouseleave(this);
            });
            $(this).bind('click', mouseclick);
            $(this).bind('click', function(){
                if(options.allowdiselect){
                    if($(this).hasClass(options.selectedClass) | options.autohide){
                        options.select(this);
                    }else{
                        options.diselect(this);
                    }
                }else{
                    options.select(this);
                }
            });
        }); 
    };

})(jQuery);