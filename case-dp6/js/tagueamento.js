var _gaq = _gaq || [];

function loadTracking() {
        window._gaq.push(['_setAccount', 'UA-171419676-1']);
        window._gaq.push(['_trackPageview']);

        (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
}

loadTracking();

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
        console.log( ga.q )
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
                eventAction: 'ver_mais_lorem',
                eventLabel: 'lorem'
            });

            console.log("Sent GA | Cat: analise | Action: ver_mais | Label: lorem");
            break;
        
        case 'ipsum':
            ga('send', {
                hitType: 'event',
                eventCategory: 'analise',
                eventAction: 'ver_mais_ipsum',
                eventLabel: 'ipsum'
            });

            console.log("Sent GA | Cat: analise | Action: ver_mais | Label: ipsum");
            break;

        case 'dolor':
            ga('send', {
                hitType: 'event',
                eventCategory: 'analise',
                eventAction: 'ver_mais_dolor',
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
