# listSelectable
Tool for working with lists and menus

# About
This small extension will help you quickly and conveniently work with lists

# Example

<pre>
  $('your_selector').listSelectable({
    hoverClass: 'hoverClass',
    selectedClass: 'selectedClass',
    multiselect: false,
    thisparent: true,
    notoverselected: false,
    allowdiselect: true,
    autohide: true,
    select: $.noop,
    diselect: $.noop,
    selecting: $.noop,
    mouseover: $.noop,
    mouseleave: $.noop
  });
</pre>

# Properties
  <p><b>hoverClass</b> - name of the class that will be assigned to the element when hovering,</p>
  <p><b>selectedClass</b> - name of the class that will be assigned to the element after selecting,</p>
  <p><b>multiselect</b> - allows you to select multiple items in the list,</p>
  <p><b>thisparent</b> - current selector is the wrapper of the list items, otherwise it is the element of the list itself,</p>
  <p><b>notoverselected</b> - Don't hover the selected item,</p>
  <p><b>allowdiselect</b> - enable unselection,</p>
  <p><b>autohide</b> - hide list after selecting,</p>
  <p><b>select</b> - (callback) your function after selection,</p>
  <p><b>diselect</b> - (callback) your function after unselection,</p>
  <p><b>selecting</b> - (callback) your function at the moment selection,</p>
  <p><b>mouseover</b> - (callback) your function hovering over an item in a list,</p>
  <p><b>mouseleave</b> - (callback) your function hovering leave an item in a list</p>
  
  # Author
  Timur, creater of the <a href="https://devdesire.com">devdesire.com</a> using this extension
