import React from 'react';
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from "mdbreact";
import { useState } from 'react';

const tabs = [
  {
    "id": "1",
    "title": () => "Asta",
    "content": Asta
  },
  {
    "id": "2",
    "title": () => "Mercato",
    "content": Mercato
  },
  {
    "id": "3",
    "title": () => "Calcolo",
    "content": Calcolo
  },
  {
    "id": "4",
    "title": () => "Competizioni",
    "content": Competizioni
  },
  {
    "id": "5",
    "title": () => "Scadenze",
    "content": Scadenze
  },
  {
    "id": "6",
    "title": () => "Montepremi",
    "content": Montepremi
  }
]

export function RegolamentoPage() {

  const [activeItem, setActiveItem] = useState("1");

  return (
    <MDBContainer>
      <h1 className="text-center">Regolamento Fantacalcio 2020/2021</h1>
      <MDBNav tabs className="mt-4">
        {
          tabs.map(e =>
            <MDBNavItem>
              <MDBNavLink
                link
                to="#"
                active={activeItem === e.id}
                onClick={() => setActiveItem(e.id)}
                role="tab"
                children={<e.title />}
              />
            </MDBNavItem>
          )
        }

      </MDBNav>
      <MDBTabContent
        className="card"
        activeItem={activeItem}
      >
        {
          tabs.map(e =>
            <MDBTabPane tabId={e.id} role="tabpanel" children={<e.content />} />
          )
        }
      </MDBTabContent>
    </MDBContainer>
  );
}


function Asta() {
  return (
    <>
      <section class="mt-2">
        L'asta iniziale è il momento più importante della stagione. Qui vengono assegnati i 25 calciatori che costituiranno la rosa di ogni squadra.
    Ogni fantallentore ha a disposizione per l’asta iniziale <strong>1000</strong> FM (fantamilioni).
</section>
      <hr class="mt-4" />
      <section>
        <h2>Svolgimento asta</h2>
  I partecipanti scelgono l’ordine da seguire e ognuno, a turno, propone un giocatore partendo almeno da un 1 FM.
  La prima categoria è quella dei portieri poi, in ordine, ci sono quella della difesa, del centrocampo e per ultimo dell’attacco. L’asta per ogni categoria si conclude dopo che ogni fantallenatore ha esaurito il numero di calciatori obbligatorio per ogni ruolo.
  Alla fine dell’asta la rosa deve essere composta da:
  <ul>
          <li>3 PORTIERI</li>
          <li>6 DIFENSORI</li>
          <li>8 CENTROCAMPISTI</li>
          <li>6 ATTACCANTI</li>
        </ul>
  I ruoli dei giocatori sono quelli ufficiali pubblicati da Fantacalcio.it al seguente <a href="https://www.fantacalcio.it/quotazioni-fantacalcio">link</a>.
</section>
    </>
  );
}

function Mercato() {
  return (
    <>
      <section class="mt-2">
        Ogni fantallenatore ha a disposizione <span>15</span> cambi da sfruttare per tutta la stagione. Ogni giornata un fantallenatore può acquistare dei giocatori
      svincolati (cioè che non appartengono a nessun'altra fantasquadra) con le seguenti modalità:
    </section>
      <hr class="mt-4" />
      <section>
        <h2>Proposte</h2>
      Ogni fantallenatore durante i periodi specifici può proporre qualsiasi calciatore con l’unica condizione che non sia già presente in una delle rose della sua stessa lega.
      Per proporre un giocatore si deve scrivere un post apposito nel gruppo di Facebook, altrimenti la proposta non verrà considerata valida. Qualsiasi proposta fatta oltre i termini di scadenza non verrà considerata valida, l’eventuale post, infatti, verrà eliminato e non sarà considerata nemmeno come proposta per la settimana successiva; quindi, qualora si volesse ancora prendere il calciatore proposto in ritardo, dovrà  essere di nuovo proposto la giornata successiva durante il periodo consentito.
    </section>
      <hr class="mt-4" />
      <section>
        <h2>Asta</h2>
      Ogni fantallenatore che ha proposto un calciatore apre un’asta, dal momento che la proposta è stata effettuata,
      tutti i fantallenatori possono partecipare all’asta relativa al giocatore in questione entro i termini di scadenza (specificati alla fine di questa pagina).
      <ul class="mt-1 ">
          <li>Ogni rilancio deve essere un multiplo di 0.2€. Per esempio 0.6€ e 0.8€ sono rilanci validi mentre 0.55€ e 0.5€ non lo sono.</li>
          <li>L’asta viene fatta nei commenti sul post e verrà considerato l'ultimo commento valido in ordine cronologico.</li>
          <li>Qualora l’ultimo commento viene fatto nell’intervallo degli ultimi 10 minuti della chiusura dell’asta ogni fantallenatore ha diritto a 10  minuti aggiuntivi (a partire dall’orario dell’ultima offerta) per poter rispondere, così ad ogni rilancio ognuno ha a disposizione altri 10  minuti; se, dopo i 10 minuti, nessuno ha risposto allora sarà considerato acquistato dal fantallenatore che ha fatto l’ultimo commento. </li>
        </ul>
      </section>
      <hr class="mt-4" />
      <section>
        <h2>Memorizzazione del cambio sul sito</h2>
        Dopo che il calciatore è stato preso il fantallenatore deve comunicare il cambio sul gruppo facebook e memorizzarlo sul sito leghe.fantacalcio.it entro l’inizio del primo match.
        Ogni fantallenatore ha a disposizione 15 cambi, questo numero viene decrementato per ogni cambio effettutato. Il decremento dei cambi a disposizione
        non viene effettutato solo nel caso in cui il giocatore che viene tolto non è più presente nelle quotazioni (EX: quando un giocatore viene venduto in una squadra non di Serie A).
        <br />
        Nel caso in cui <strong>non viene memorizzato</strong> il cambio  o viene memorizzato in maniera <strong>errata</strong>, i soldi offerti per l'acquisto vengono comunque addebitati e viene scalato un cambio da quelli a disposizione.
    </section>
      <hr class="mt-4" />
      <section id="scad">
        <h2>Scadenze</h2>
        <ul class="list-group">
          <li class="list-group-item"><strong>Proposte</strong>: un giocatore può essere proposto nel periodo che intercorre tra la fine della giornata precedente e 4h prima l'inizio della giornata corrente.</li>
          <li class="list-group-item"><strong>Asta</strong>: l'asta si apre subito dopo che il giocatore viene proposto e si conclude 2h prima l'inizio della giornata corrente.</li>
          <li class="list-group-item"><strong>Comunicazione cambio</strong>: il cambio va comunicato dopo la fine dell'asta ed entro l'inizio della giornata corrente.</li>
        </ul>
      </section>
    </>
  );
}

function Calcolo() {
  return (
    <>
      <section class="mt-2">
        <h2>Formazione</h2>
        <p>
          Ogni fantallenatore deve pubblicare la formazione sull'apposita sezione del sito leghe.fantacalcio.it nel periodo che intercorre tra la fine dell’ultima partita della giornata precedente ed entro 1 minuto prima l’inizio della prima partita della giornata corrente.
          Qualsiasi invio della formazione comunicato oltre i termini di scadenza oppure in un qualsiasi altro posto che non sia il sito leghe.fantacalcio.it non sarà ritenuto valido.
        </p>
        <h4>Formazione non inserita</h4>
        <p>
          Nel caso in cui il fantallenatore non inserisce riceverà una penalizzazione di 3 punti in classifica e un’ammenda di 2€.
          La partita sarà disputata lo stesso e sarà utilizzata l’ultima formazione inserita.
        </p>
      </section>
      <hr class="mt-4" />
      <section>
        <h2>Calcolo punteggio</h2>
    L’esito, cioè il risultato finale della gara, viene calcolato secondo le modalità qui descritte:
    <ol>
      <li>Si considerano i voti assegnati dalla redazione <strong>Italia</strong> di Fantacalcio alle prestazioni dei calciatori della Serie A</li>
      <li>A questi vanno aggiunti bonus o sottratti malus in base ai criteri qui di seguito elencati</li>
    </ol>  
    <h4>Bonus/Malus sulla prestazione del singolo</h4>
    <ul>
          <li>+3 per ogni gol realizzato</li>
          <li>+3 per ogni rigore segnato</li>
          <li>-3 per ogni rigore sbagliato</li>
          <li>+3 per ogni rigore parato (portiere)</li>
          <li>-1 per ogni gol subito (portiere)</li>
          <li>-0,5 per ogni ammonizione</li>
          <li>-1 per ogni espulsione</li>
          <li>-2 per ogni autogol (giocatori di movimento), -1 per ogni autogol (portiere)</li>
        </ul>
        <h4>Modificatore difesa</h4>
    Oltre ai bonus e ai malus già citati verrà considerato come bonus il modificatore della difesa che si calcola solo se il portiere e almeno 4 difensori portano punteggio alla squadra. Si considerano il voto in pagella del portiere e i 3 migliori voti in pagella ottenuti dai difensori (non vanno considerati i bonus e i malus). Si calcola la media di questi 4 valori e i bonus saranno:
    <ul>
          <li>media ≥ 7 = +6 punti</li>
          <li>7 > media ≥ 6,5 = +3 punti</li>
          <li>6,5 > media ≥ 6 = +1 punti</li>
          <li>6 > media = +0 punti</li>
        </ul>
      </section>
      <hr class="mt-4" />
      <section>
        <h2>Rinvio partite</h2>
      Nel caso in cui vengano rinviate delle partite nel corso di una stessa giornata verranno seguiti i seguenti criteri:
      <ul>
          <li>nel caso in cui vengono rinviate 4 o più partite si attenderà il recupero di queste giornate per il calcolo dei punteggi</li>
          <li>se invece vengono rinviate massimo 3 partite verranno assegnati i voti politici (6 politico per tutti i giocatori, eccetto che per i portieri ai quali verrà assegnato 5 politico).</li>
        </ul>
  </section>
    </>
  )
}

function Competizioni() {
  return (
    <>
      <section class="mt-2">
        <p>
          Durante l'arco della stagione vengono disputate tre competizioni:
          <ul>
            <li>Campionato: bisogna inserire la formazione ed è attivo tutte le giornate</li>
            <li>Coppa: bisogna inserire la formazione ed è attivo solo alcune giornate</li>
            <li>Champions League: <strong>non</strong> bisogna inserire la formazione ed è attivo tutte le giornate</li>
          </ul>
        </p>
        <h2>Campionato</h2>
        Ogni squadra si scontrerà con la stessa squadra 5 volte, se moltiplichiamo per 7 (il numero di squadre con cui si può scontrare) otteniamo 35 incontri; 
        ma le giornate sono 37 quindi nella restanti 2 giornate verrà effettuato il "tutti contro tutti". 
      
        <h4 class="mt-2">Punti classifica</h4>
        La seguente tabella riassume tutte le fasce possibili e i relativi punteggi assegnati.
        <table class="table table-bordered text-center">
          <thead>
            <tr>
              <th></th>
              <th>DIFF > 0,5</th>
              <th>DIFF = +0,5</th>
              <th> -0,5 &le; DIFF &lt; 0 </th>
              <th>DIFF &lt; -0,5</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&le; 69,5</td>
              <td>2</td>
              <td>1</td>
              <td>1</td>
              <td>0</td>
            </tr>
            <tr>
              <td>70-79,5</td>
              <td>3</td>
              <td>2</td>
              <td>1</td>
              <td>0</td>
            </tr>
            <tr>
              <td>&le; 80-89,5</td>
              <td>4</td>
              <td>3</td>
              <td>2</td>
              <td>1</td>
            </tr>
            <tr>
              <td>90-94,5</td>
              <td>5</td>
              <td>4</td>
              <td>3</td>
              <td>2</td>
            </tr>
            <tr>
              <td>&ge; 95</td>
              <td>6</td>
              <td>5</td>
              <td>4</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
        <h4 class="mt-2">Tutti contro tutti</h4>  
      Le giornate del "tutti contro tutti" sono:
        <ul>
          <li>16a giornata</li>
          <li>31a giornata</li>
        </ul>
        Nel "tutti contro tutti" i punteggi vengono vengono assegnati rispettando i seguenti criteri:
        <ul>
          <li>&le; 69,5 = 2 punti</li>
          <li>70-79,5 = 3 punti</li>
          <li>80-89,5 = 4 punti</li>
          <li>90-94,5 = 5 punti</li>
          <li>&ge; 95 = 6 punti</li>
        </ul>
        <h4>Parità di punteggio nella classifica finale</h4>
        <p>
        Per determinare l'ordine di piazzamento si terrà conto del miglior piazzamento in Champions League. In caso di ulteriore parità allora 
        il montepremi sarà suddiviso in parti uguali tra le fantasquadre a pari punti, ecco alcuni esempi:
        <ul>
          <li>2 squadre al primo posto, allora queste due squadre si suddivideranno in parti uguali il montepremi del primo e del secondo posto mentre la squadra successiva riceverà il montepremi del terzo posto</li>
          <li>3 squadre al terzo posto, allora queste tre squadre si suddivideranno in parti uguali il montepremi del terzo posto</li>
        </ul>
        </p>
      </section>
      <hr class="mt-4" />
      <section>
        <h2>Coppa</h2>
  Nella coppa le fantasquadre vengono suddivisi in due gironi da 4. Verrà svolta una prima fase a gironi e una seconda fase a eliminazione diretta.
  
  
  <p>Nella fase a gironi vengono assegnati 3 punti per la vittoria, 1 per il pareggio e 0 per la sconfitta. Se la differenza tra i due risultati è di 0,5
  viene considerato pareggio.</p>
  <p>Qui di seguito l'elenco delle giornate in cui verrà disputata la coppa.</p>
  <h4 class="mt-2">Gironi</h4>
  <ul>
          <li>1a giornata andata COPPA = 11a giornata di CAMPIONATO</li>
          <li>2a giornata andata COPPA = 14a giornata di CAMPIONATO</li>
          <li>3a giornata andata COPPA = 17a giornata di CAMPIONATO</li>
          <li>1a giornata ritorno COPPA = 20a giornata di CAMPIONATO</li>
          <li>2a giornata ritorno COPPA = 23a giornata di CAMPIONATO</li>
          <li>3a giornata ritorno COPPA = 26a giornata di CAMPIONATO</li>
        </ul>
        <h4 class="mt-2">Fase a eliminazione diretta</h4>
        <ul>
          <li>Semifinali ANDATA = 29a giornata di CAMPIONATO</li>
          <li>Semifinali RITORNO = 32a giornata di CAMPIONATO</li>
          <li>Finale = 38a giornata di CAMPIONATO</li>
        </ul>

        <h4>Parità di punteggio nella classifica finale dei gironi di Coppa</h4>
        <p>
        Per determinare l'ordine di piazzamento si terrà conto nell’ordine dei seguenti criteri:
        <ol>
          <li>Del miglior piazzamento in Champions League</li>
          <li>Del migliore 11 in termini di quotazioni. Per calcolare il migliore 11 di ogni fantasquadra viene preso il miglior (in termini di quotazione) tra i seguenti moduli: 3-4-3, 3-5-2, 4-3-3, 4-4-2, 5-3-2, 5-4-1.</li>
          <li>Spareggio alla 27esima</li>
          <li>Spareggio alla 28esima</li>
          <li>Spareggio alla 29esima</li>
          <li>Sorteggio</li>
        </ol>
        </p>
        <h4>Parità di punteggio in semifinale di Coppa</h4>
        <p>
        Per determinare chi va in finale si terrà conto nell’ordine dei seguenti criteri:
        <ol>
          <li>Del miglior piazzamento in Champions League</li>
          <li>Del migliore 11 in termini di quotazioni. Per calcolare il migliore 11 di ogni fantasquadra vengono considerati i seguenti moduli: 3-4-3, 3-5-2, 4-3-3, 4-4-2, 5-3-2, 5-4-1; 
            per ogni modulo vengono inseriti i giocatori in ordine di quotazione e il modulo che 
          </li>
          <li >del sorteggio</li>
        </ol>
        </p>
        <h4>Parità di punteggio in finale di Coppa</h4>
        <p>
        Nel caso in cui le due finalista ottengono lo stesso punteggio allora il montepremi verrà suddiviso in parti uguali tra le due fantasquadre
        </p>
      </section>
      <hr class="mt-4" />
      <section>
        <h2>Champions League</h2>
        <p>
        Per stilare la classifica di Champions League vengono sommati i punteggi totalizzati da ogni fantasquadra ogni giornata di Campionato.
        </p>
        <h4>Parità di punteggio nella classifica finale</h4>
        <p>
        Nel caso in cui 2 o più fantasquadre totalizzano lo stesso punteggio allora il montepremi verrà suddiviso in parti uguali tra le fantasquadre a pari punti
        </p>
      </section>
      <hr class="mt-4" />
      <section>
      </section>
    </>
  )
}

function Scadenze() {
  return (
    <>
      <section class="mt-2">
        <h2>Pagamenti</h2>
        Le scadenze dei pagamenti sono entro le 24:00 dei seguenti giorni:
        <ul>
          <li>1 novembre 2020 dare 25€</li>
          <li>3 gennaio 2020 dare 25€</li>
          <li>28 febbraio 2021 dare 25€</li>
          <li>2 maggio 2021 dare 25€</li>
          <li>23 maggio 2021, completare tutti i pagamenti compresi quelli degli acquisti effettuati prima di questa data</li>
        </ul>
        <p>Nel caso in cui non vengono rispettate le scadenze verrà data una penalità di -4 punti in classifica.</p>
        <p><strong>
          Nel caso di impossibilità nel poter consegnare i soldi entro una scadenza fissata è possibile preavvisare in anticipo i componenti 
          della fantalega scrivendo un apposito post su Facebook per poter spostare di qualche settimana (max 2) la consegna dei soldi. Ovviamente non può essere 
          richiesto di spostare la data di scadenza dopo che quest'ultima è già scaduta.
      </strong></p>
      </section>
    </>
  )
}

function Montepremi() {
  return (
    <>
      <section class="mt-2">
        <h2>Campionato</h2>
        <ul>
          <li>1° CLASSIFICATO = 400€</li>
          <li>2° CLASSIFICATO = 200€</li>
          <li>3° CLASSIFICATO = 100€</li>
        </ul>
      </section>
      <hr class="mt-4" />
      <section>
        <h2>Coppa</h2>
        <ul>
          <li>Vincitore della finale = riceve l'intero somma proveniente dagli acquisti effettuati durante il campionato</li>
        </ul>
      </section>
      <hr class="mt-4" />
      <section>
        <h2>Champions League</h2>
        <ul>
          <li>1° CLASSIFICATO = 100€</li>
        </ul>
      </section>
    </>
  )
}