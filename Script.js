document.addEventListener('DOMContentLoaded', function() {
    var subMenus = document.querySelectorAll('.menu > li');

    subMenus.forEach(function(menu) {
        menu.addEventListener('click', function() {
            var subMenu = this.querySelector('.submenu');
            subMenu.classList.toggle('active');
        });

        // Prevent event propagation when clicking on submenu items
        var subMenuItems = menu.querySelectorAll('.submenu li');
        subMenuItems.forEach(function(item) {
            item.addEventListener('click', function(event) {
                event.stopPropagation();
            });
        });
    });
});
