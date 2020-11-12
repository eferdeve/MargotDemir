class Anime {
    constructor() {
        // Variables
        this.allo = $('.allo');
        this.presentContent = $('.text-show-presentation');
        this.sophroContent = $('.text-show-sophro');
        this.brainGymContent = $('.text-show-brain-gym');
        this.sensContent = $('.text-show-sens');
        this.allo2 = $('.allo2');
        this.allo3 = $('.allo3');
        this.allo4 = $('.allo4');
        this.hideText = $('.text-hide');
        this.wrapper = $('#wrapper');

        //Events
        // Section Presentation
        $('.text-deploy').click(this.presentation.bind(this));
        // Section Atelier de Sophrologie-Relaxation
        $('.handle-text').click(this.sophro.bind(this));
        // Section Brain Gym
        $('.handle-text-brain-gym').click(this.brainGym.bind(this));
        //Section Atelier des Sens
        $('.handle-text-sens').click(this.atelierSens.bind(this));
        //Section Gallery
        $('.gallery-show').click(this.gallery.bind(this));
        // Section Gallery bouton réduire
        $('.return-gallery').click(this.reductWindow.bind(this));
    }

    // Methods
    presentation() {
        this.allo.hide();
        this.presentContent.slideDown(1500);
        this.expandWrapper();
        this.close();
    }

    sophro() {
        this.allo2.hide();
        this.sophroContent.slideDown(1500);
        this.expandWrapper()
        this.close();
    }

    brainGym() {
        this.allo3.hide();
        this.brainGymContent.slideDown(1500);
        this.expandWrapper()
        this.close();
    }

    atelierSens() {
        this.allo4.hide();
        this.sensContent.slideDown(1500);
        this.expandWrapper()
        this.close();
    }

    gallery() {
        $('.gallery-show').hide();
        $('.return-gallery').fadeIn(500);
        this.expandWrapper();
        this.close();
    }

    // Expansion du wrapper
    expandWrapper() {
        this.wrapper.css('height', '130%');
    };

    // Bouton close
    close() {
        this.hideText.click(() => {
            this.presentContent.hide();
            this.sophroContent.hide();
            this.brainGymContent.hide();
            this.sensContent.hide();
            this.allo.fadeIn(1000);
            this.allo2.fadeIn(1000);
            this.allo3.fadeIn(1000);
            this.allo4.fadeIn(1000);
            this.wrapper.css('height', '82%');
        })
    }

    // Réduction vua bouton de la gallery
    reductWindow() {
        this.wrapper.css('height', '82%');
        $('.return-gallery').hide();
        $('.gallery-show').fadeIn(500);
        this.presentContent.hide();
        this.sophroContent.hide();
        this.brainGymContent.hide();
        this.sensContent.hide();
        this.allo.fadeIn(1000);
        this.allo2.fadeIn(1000);
        this.allo3.fadeIn(1000);
        this.allo4.fadeIn(1000);
    }
}
