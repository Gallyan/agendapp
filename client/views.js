/*
* routes : fonctions de gestion des vues
*/

//index : redirige vers la liste
index = function(ctx, next){
    page("/event");
};

//affiche la liste des événements
evtList = function(ctx, next){    
    Session.set('currentView', 'listeEvt');
    Session.set('evtEnCours', undefined);
    Session.set('titreEncours', '');
    displayView('listeEvt');
};

//edition evt : gère également la confirmation du code d'admin
evtEdit = function(ctx, next){
    var evtCodeEditionContest = ctx.params.code;
    var evtCourantId = ctx.params.evt;
    //console.log('evt / code confirm :', evtCourantId, evtCodeEditionContest);

    // test de validation (au cas où)
    Meteor.call('verifCodeConfirm', evtCourantId, evtCodeEditionContest, function(error, result) {
        if (error)
        {
            flash("Vous ne pouvez pas modifier cet événement!", 'warning');
            page('/event');
        }
        else
        {
            if (result)
            {
                flash("Votre événement est validé !", 'info');
            } else {
                //console.log('Evénement déjà valide');
            }
            Session.set('evtEnCours', evtCourantId);
            Session.set('codeedition', evtCodeEditionContest);
            displayView('nouvelEvt');
        }
    });
};

//revoi du mail d'admin
evtSend = function(ctx, next){
    var evtCourantId = ctx.params.evt;
    Session.set('evtEnCours', evtCourantId);
    displayView('renvoyerMailAdmin');
}

//affichage des detail d'un evt
evtShow = function(ctx, next){
    Meteor.call('fetchOneEvt', ctx.params.evt, function(error, result) {
        if (result) {
            Session.set('evtEnCours', ctx.params.evt);
            //console.log("displaying evt" + ctx.params.evt);
            displayView('detailEvt');
        };
    });
};

//nouvel evt
evtNew = function(ctx, next){
    //vide le formulaire et l'affiche
    //console.log('new event');
    Session.set('evtEnCours', undefined);
    displayView('nouvelEvt');
};

evtThanks = function(ctx, next){
    Session.set('evtEnCours', ctx.params.evt);
    displayView('thanks');
}