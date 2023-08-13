<template>
    <div id="uitleg" class="rounded-xl opacity-1 w-2/3 p-10 shadow-2xl bg-sky-900">
        <div class="flex flex-row w-full justify-between">
            <h3 class="text-5xl text-white font-bold w-fit">Hoe werkt het dashboard?</h3>
            <span class="w-fit bg-white px-5 py-3 rounded-full m-0 text-3xl font-bold hover:scale-90 shadow-2xl text-slate-900">Sluiten</span>
        </div>
        <h4 class="text-2xl text-white font-bold mt-4">Unique Visitors / Unieke Bezoekers</h4>
        <p class="text-white font-base text-xl">Deze aantallen zijn bezoekers die nog niet eerder jouw website hebben bezocht. Het zijn mensen die voor het eerst zijn gekomen naar jouw website. Dit is handig om mensen te onderscheiden, zodat bijvoorbeeld wij, of jij zelf niet wordt meegeteld in het aantal bezoekers.</p>
        <hr class="my-4">
        <h4 class="text-2xl text-white font-bold">Total Visits / Totale Bezoekers</h4>
        <p class="text-white font-base text-xl">Dit is het gecombineerde aantal bezoekers, de nieuwe bezoekers, maar ook de mensen die regelmatig naar jouw website komen. Dit gaat per 'sessie', als een klant bijvoorbeeld 5 pagina's bezoekt, is het nog steeds 1 bezoeker. </p>
        <hr class="my-4">
        <h4 class="text-2xl text-white font-bold">Total Pageviews / Totale pagina weergaves</h4>
        <p class="text-white font-base text-xl">Dit is het aantal hoe vaak alle pagina's gecombineerd zijn weergegeven, zo kan jouw ook zien welke pagina's het meeste aandacht krijgt van jouw bezoekers.</p>
        <hr class="my-4">
        <h4 class="text-2xl text-white font-bold">Views per visit / Weergaves per bezoek</h4>
        <p class="text-white font-base text-xl">Dit aantal is het gemiddelde aantal weergaves van pagina's per bezoek. Dit nummer laat zien of mensen verder willen kijken dan de home-pagina, en of ze geinteresseerd blijven. </p>
        <hr class="my-4">
        <h4 class="text-2xl text-white font-bold">Bounce Rate / Bouncepercentage</h4>
        <p class="text-white font-base text-xl">Een 'Bounce' is als een bezoeker meteen weer van site afgaat, en niet verder kijkt op de website, het doel is om dit nummer zo laag mogelijk te houden. Hoe lager het percentage, hoe meer mensen blijven doorklikken op jouw website.</p>
        <hr class="my-4">
        <h4 class="text-2xl text-white font-bold">Visit Duration / Bezoek duur</h4>
        <p class="text-white font-base text-xl">Dit laat zien hoelang mensen op jouw website blijven, gaan ze meteen weer weg? Of nemen ze wel de tijd om je webiste goed door te kijken.</p>
        <hr class="my-4">
        <h4 class="text-2xl text-white font-bold">Top Sources / Beste Bronnen</h4>
        <p class="text-white font-base text-xl">Hier zie je hoevaak, en waar mensen vandaan komen als ze je website gaan bezoeken. Zo kan je zien of mensen via bijvoorbeeld Facebook, Instagram, Google, of simpelweg via het intypen van je domeinnaam (direct visits) op je website terecht komen. </p>
        <hr class="my-4">
        <h4 class="text-2xl text-white font-bold">Top Pages / Beste pagina's</h4>
        <p class="text-white font-base text-xl">Hier kan je gemakkelijk zien welke pagina's het meeste bezocht worden, en welke ze het interessants vinden. Hier kan je weer op inspelen op bijvoorbeel Social Media.</p>
        <hr class="my-4">
        <h4 class="text-2xl text-white font-bold">Cities / Plaatsen</h4>
        <p class="text-white font-base text-xl">Hier zie je ongeveer waar mensen vandaan komen, dit zal niet altijd kloppen, omdat het om de locatie gaat dat dat provider meegeeft. Dit kan bijvoorbeeld de dichtsbijzijnde datacenter van de provider zijn.</p>
        <hr class="my-4">
        <h4 class="text-2xl text-white font-bold">Devices / Apparaten</h4>
        <p class="text-white font-base text-xl">Hier kan je snel zien op welk apparaat de website het meest wordt gebruikt, bijvoorbeeld op de laptop, de tablet, of de mobiel.</p>
        <hr class="my-4">
        <h4 class="text-2xl text-white font-bold">Filteren</h4>
        <p class="text-white font-base text-xl">Rechtsboven kan je filteren welke data je wilt zien, bijvoorbeeld van de afgelopen 7 dagen. Ook kan je het vergelijken met de 'compare' functie.</p>
        
    </div>
</template>

<style>
    #uitleg{
        min-height: 400px;
        position: absolute;
        z-index: 99;
        top: 110%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

</style>