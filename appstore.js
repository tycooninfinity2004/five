
    function tiy() {
       window.location.href="chatroom.apk";
    }
    
    function gpt() {
        window.location.href="TIY.apk";
        
    }
    
    function palmpay() {
        window.location.href="tiyweb.apk";
    }
    
    function driving() {
        window.location.href="drivingmaster1.apk";
    }
    

function showMenu(icon) {
  var menu = document.getElementById("menu");
  menu.style.display = "block";

  // Insert code to position the menu on top of the clicked icon
  
  var clickedIcon = document.getElementsByClassName("icon-" + iclickedIconcon)[0];
  var iconRect = clickedIcon.getBoundingClientRect();
  var menuWidth = menu.getBoundingClientRect().width;

  // Position the menu on top of the clicked icon
  var leftPosition = iconRect.left + (iconRect.width / 2) - (menuWidth / 2);
  menu.style.top = iconRect.top - 60 + "px"; // 60px is the height of the menu
  menu.style.left = leftPosition + "px";

  
  
  
  
}

function searchIcon() {
  var input, filter, container, icon, i, txtValue;
  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  container = document.getElementsByClassName('icon-container')[0];
  icon = container.getElementsByClassName('icon');
  for (i = 0; i < icon.length; i++) {
    txtValue = icon[i].textContent || icon[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      icon[i].style.display = "";
    } else {
      icon[i].style.display = "none";
    }
  }
}

function downloadAPK(filename) {
  // Create a temporary anchor element
  var link = document.createElement('a');
  link.href = filename;
  // Set the download attribute with the filename
  link.download = filename;
  // Append the anchor element to the body
  document.body.appendChild(link);
  // Trigger the click event on the anchor element
  link.click();
  // Remove the anchor element from the body
  document.body.removeChild(link);
}




window.addEventListener('load', function() {
  var popup = document.getElementById('popup');
  setTimeout(function() {
    popup.classList.remove('hidden');
    setTimeout(function() {
      popup.classList.add('hidden');
    }, 60000); // 10 seconds
  }, 2000); // 20 seconds
});

window.addEventListener('beforeunload', function() {
  sessionStorage.setItem('popupShown', 'true');
});

window.addEventListener('load', function() {
  if (sessionStorage.getItem('popupShown')) {
    var popup = document.getElementById('popup');
    popup.classList.remove('hidden');
  }
});
