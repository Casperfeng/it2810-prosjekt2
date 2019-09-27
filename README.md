# IT2810-prosjekt2

## Introduksjon
Seasonal Art (S. Art) er en single page application (SPA) der brukeren kan trykke på valgene i menyen til høyre og få ulike kombinasjoner av kunstverk bestående av et bilde, dikt og lydopptak.

## Teknologi

### React
Løsningen vår benytter seg av React med både klasser og funksjonelle komponenter implementert med JSX og ECMAScript 6 syntax. Vi benytter hovedsaklig funksjonelle komponenter.

### Ajax
SVG-bilder og dikt lastes inn med den innebygde fetch-funksjonen i JavaScript. Dataene er lagret i en egen public mappe som blir hentet med fetch. Filene lastes kun ned når de blir brukt. Når dataen er hentet blir den lagret (i en array), og man trenger ikke å hente dataene flere ganger. 

## HTML Web Storage
Vi bruker localstorage til å lagre hvilket kunstverk brukeren var på sist, slik at dersom brukeren refresher eller åpner fanen på nytt vil det samme kunstverket bli vist på nettsiden. Vi bruker sessionstorage til å lagre utstillingshistorien til brukeren, slik at brukeren kan gå fram og tilbake i historien ved å trykke på pilene øverst til høyre. Historien vil tømmes dersom brukeren refresher eller åpner fanen på nytt.

## Responsiv Web Design
Nettsiden har et responsivt webdesign og er testet på ulike enheter i både landscape og portrait orientasjon. Vi bestemte oss for å følge mobile-first design regelen - å designe nettsiden først for mobile-enheter og deretter utvide til å støttes på større skjermer som pc-er. Det er flere fordeler med denne måten å style en nettside. 

For å få dette til brukte vi viewport, media queries, skalerende svg-bilder og fleksibelt layout til dette. Nettsiden er testet i FireFox og Chrome. Enheter som har blitt testet på:

Phones:
* Samsung Galaxy S5, S6, S7 Edge, S8 og S9/S9+
* iPhone 6/7/8, X/XS og 6/7/8 Plus

Tablets:
* iPad
* Kindle Fire HDX

Desktops:
* Surface Book 2 13.5”
* Macbook Pro 13”/15”
* HP Spectre 15.6”

Under utviklingen testet vi hyppig ved hjelp av inspector-vinduet i FireFox og Chrome. Her valgte vi ulike skjermstørrelser (forhåndsbestemte valg av nettleserne, f.eks. Samsung Galaxy S9) og byttet på orientasjonen. I tillegg hadde de valget “Responsive” der man kunne velge skjermstørrelser selv. Ved å markere de relevante delene av HTML-dokumentet kunne vi se hvordan f.eks. CSS Grid og Flexbox fungerte og om de fungerte som forventet. Her kunne vi også se om generert padding og margin var som forventet. Etter nettsiden var deployet åpnet vi den på våre fysiske enheter (blant annet mobilene, nettbrettene og pc-ene våre) i Default Browser, FireFox og Chrome.


Container’s layout bruker CSS Grid for å plassere bildet, tekst og lyd-spilleren. Layoutet er forskjellig mellom landscape- og portrait-orientasjon (gjort med Media Queries). Grunnen til at vi brukte CSS Grid er fordi vi ønsket et to-dimensjonalt layout. I tillegg var det mer praktisk med tanke på forskjellig layouts ved landscape- og portrait-orientasjon. CSS Grid er dessuten mer leselig enn hardkodet CSS Flexbox.

SideNav’s, Header’s og Tabs’ layout bruker CSS Flexbox siden vi ønsket enkle en-dimensjonale layouts for hver av dem.

## Testing
Som nevnt tidligere har nettsiden blitt testet med flere ulike enheter. I tillegg til dette er det implementert screenshot tester for komponentene, og en test i App for å se om Header- og Container-komponentene blir lastet riktig.

## React komponent Hierarki
Tidligere har forskjellen mellom klasse-baserte komponenter og funksjonelle komponenter vært at den ene hadde mulighet til å oppbevare state, mens den andre ikke hadde det. Nå som funksjonelle komponenter kan aksessere state ved bruk av hooks er forskjellen minimal. Vi bestemte oss for å bruke funksjonelle komponenter med hooks for de fleste komponentene, og klasse-basert komponent for HistoryMenu komponenten.

* App - tar seg av mye av state management og datahentingen. Har også ansvar for å sende data videre til andre komponenter som props.  
* Header - oppbevarer og sender data videre til Menu komponenten som props. 
* Menu - oppbevarer HistoryMenu, BurgerMenu og SideNav. Tar seg av logikken rundt BurgerMenu og SideNav.
* BurgerMenu - meny som animeres når den trykkes på.
* SideNav - tar seg av valg av kategorier.
* HistoryMenu - tar seg av undo og redo av tidligere valg gjort av brukeren. 
* Container - brukes for å vise data sendt fra App (svg, lyd og dikt) sendt fra App. 
* Tabs - lar brukere velge mellom 4 ulike tabs. Ved endringer blir funksjoner i App kalt, og state endrer seg.

Alle komponentene kommuniserer fram og tilbake med App-komponenten.

BILDE HER

## Media Credits
Creative Commons 4.0

Bilders:
* https://www.svgrepo.com/svg/277761/snowman-cold
* https://www.svgrepo.com/svg/211816/igloo
* https://www.svgrepo.com/svg/36170/snowflake
* https://www.svgrepo.com/svg/4866/winter-hat
* https://www.svgrepo.com/svg/53719/sun
* https://www.svgrepo.com/svg/13518/ice-cream
* https://www.svgrepo.com/svg/130282/palm-tree
* https://www.svgrepo.com/svg/81390/beach-ball
* https://www.svgrepo.com/svg/212032/leaf-autumn
* https://www.svgrepo.com/svg/54362/rake
* https://www.svgrepo.com/svg/200478/basket-pumpkin
* https://www.svgrepo.com/svg/191989/witch-halloween

Dikt:

Lyd:


## Credits

