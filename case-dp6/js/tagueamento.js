// aguardando o carregamento da pagina
document.addEventListener("DOMContentLoaded", function(event) {

    // funcao pro clique no menu Contato
    function contactHandler() {
        ga('send', {
            hitType: 'event',
            eventCategory: 'menu',
            eventAction: 'entre_em_contato',
            eventLabel: 'link_externo'
        });

        console.log("Sent GA | Cat: Menu | Action: Contato | Label: Link Externo");
    }

    // funcao pro clique no menu Download
    function downloadHandler() {
        ga('send', {
            hitType: 'event',
            eventCategory: 'menu',
            eventAction: 'download_pdf',
            eventLabel: 'download_pdf'
        });

        console.log("Sent GA | Cat: Menu | Action: Contato | Label: Link Externo");
    }

    // adicionando listeners pra quando os elementos forem clicados
    document.getElementById('link-contact').addEventListener("click", contactHandler);
    document.getElementById('link-download').addEventListener("click", downloadHandler);
});

// lidando com evento onClick dos botoes analytics
function analyticsHandler(buttonId){
    switch(buttonId) {
        case 'lorem':
            ga('send', {
                hitType: 'event',
                eventCategory: 'analise',
                eventAction: 'ver_mais',
                eventLabel: 'lorem'
            });

            console.log("Sent GA | Cat: analise | Action: ver_mais | Label: lorem");
            break;
        
        case 'ipsum':
            ga('send', {
                hitType: 'event',
                eventCategory: 'analise',
                eventAction: 'ver_mais',
                eventLabel: 'ipsum'
            });

            console.log("Sent GA | Cat: analise | Action: ver_mais | Label: ipsum");
            break;

        case 'dolor':
            ga('send', {
                hitType: 'event',
                eventCategory: 'analise',
                eventAction: 'ver_mais',
                eventLabel: 'dolor'
            });

            console.log("Sent GA | Cat: analise | Action: ver_mais | Label: dolor");
            break;
    }
}

function contactFormHandler(fieldID) {
    ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: fieldID,
        eventLabel: 'preencheu'
    });

    console.log(fieldID);
}

function sentHandler() {
    ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: 'enviado',
        eventLabel: 'enviado'
    });

    console.log('enviado');
}
