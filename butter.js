AFRAME.registerComponent("cheesypuffs", {

    init: function () {
        cookie=5;
        this.el.addEventListener('collide', function (e) {  
            e.detail.target.el.remove(); 
            cookie-=1;
            cookiesRemaining = document.getElementById('spacesweb');
            cookiesRemaining.setAttribute('text', { value: String(cookie) });
            if (cookie == 0) {
                gameOverText = document.getElementById('ratcakes');
                gameOverText.setAttribute('text', { value: 'You WON!' });
        
              }
        });
    },
});
