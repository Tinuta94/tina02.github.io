/* add a new delete button to the dom
 *
 */
function addEditButton() {
    let editButton = $('<button></button>').text('Edit');
  
    editButton.on('click', function(evnt) {
      //get the event target's grand-parent node
      //and remove the event target's parent
      //
      //<ul><li><button></button></li></ul>
      //
      //<li> is the parent of <button>
      //<ul> is the parent of <li>
      //<ul> is the grandparent of <li>
      let liText = $(this).parent().text();
      $(newItemText).val(liText)
    });
  
    return editButton;
  }
  
   function addDeleteButton() {
    let deleteButton = $('<button></button>').text('Delete');
  
    deleteButton.on('click', function(evnt) {
      //get the event target's grand-parent node
      //and remove the event target's parent
      //
      //<ul><li><button></button></li></ul>
      //
      //<li> is the parent of <button>
      //<ul> is the parent of <li>
      //<ul> is the grandparent of <li>
      $(this).parent().parent().remove();
    });
  
    return deleteButton;
  }
  
  
  
  /* 
   * add a new list item to the list
   *
   */
  function addListItem(itemText) {
    // let newElement = document.createElement('li')
    let newElement = $('<li></li>')
  
    // let newElement = document.createElement('span')
    let newSpan = textInput(itemText);
    
    // newSpan.innerText = itemText
  
    //add the new <span> and <button> tags to the 
    //new <li>
    //
    //end result is: <li><span></span><button></button></li>
    // newElement.appendChild(newSpan)
    // newElement.appendChild(addDeleteButton())
    let buttonDiv = $("<div></div>")
    buttonDiv.addClass("buttons")
  
    newElement.append(newSpan)
    // newElement.append(liInput())
    newElement.append(buttonDiv)
    buttonDiv.append(toggleEditSave())
    buttonDiv.append(addDeleteButton())
  
    return newElement;
  }
  
  // function liInput() {
  //   return $('<input></input>');
  // }
  
  function textInput(itemText) {
    return $('<span></span>').text(itemText);
  }
  
  
  /* add an event listener to the <form> tag so that 
   * when the submit button is pressed a new <li> is
   * added to the <ul> (our list of todo items)
   *
   *
   */
  $('#newItem').on('submit', function () {
    event.preventDefault()
    
    // Can't return a DOM object on Jquery object--> look up Jquery API
    $('#todoList').append(addListItem($('#newItemText').val()
    )
    )
  })
    //Prevent default keeps the web page from refreshing which
    //is the default behavior of the <form> tag
  
    function toggleEditSave() {
      let eSbutton = $('<button></button>').text('Edit');
      eSbutton.on('click', function(evnt) {
        if (eSbutton.text() === 'Edit') {
          eSbutton.text('Save')
          $("#addButton").css({"display": "none"});
        }
        else {
          eSbutton.text('Edit')
          $("#addButton").css({"display": "inline-block"});
          saveItem()      }
      })
      return eSbutton;
    }
    
  function saveItem() {
    return event.target.parentNode.parentNode.firstElementChild.innerHTML = document.querySelector('#newItemText').value
  }