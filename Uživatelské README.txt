1. NÁVOD: Nahrávání fotek z akcí – Mezi námi
Tento nástroj slouží k rychlé a bezpečné archivaci fotek z vašich setkání. Funguje na mobilu i počítači.
Postup:
1. Otevřete odkaz: Klikněte na odkaz (nebo naskenujte QR kód), který jste obdrželi. Otevře se oranžovo-zelený formulář.
2. Vyberte skupinu: Klikněte do pole "Název skupiny". Začněte psát název (např. "Průho...") a našeptávač vám nabídne správnou možnost. Kliknutím ji vyberte.
   * Tip: Na pravé straně řádku je malá šipka, která také otevře seznam.
3. Zadejte název akce: Napište stručný popis (např. "Vánoční tvoření" nebo "Čtení").
4. Zkontrolujte datum: Automaticky je nastaveno dnešní datum. Pokud nahráváte fotky zpětně, datum změňte.
5. Vyberte fotky: Klikněte na velký obdélník s ikonou mraku.
   * Můžete vybrat až 15 fotek najednou.
   * Aplikace fotky automaticky zmenší (šetří vaše data), takže nahrávání je rychlé.
6. Odešlete: Klikněte na tlačítko ODESLAT FOTKY.
   * Počkejte, dokud se neobjeví zelená hláška "Úspěch! Uloženo...".
Poznámka: Pokud by se nahrávání zaseklo nebo selhalo (červená hláška), zkontrolujte připojení k internetu a zkuste to znovu.
________________
________________




B) Technické README (Pro Admina)
TECHNICKÁ DOKUMENTACE APLIKACE "ARCHIVACE FOTEK"
Jak to funguje: Aplikace je tzv. "Google Apps Script Web App". Běží na serverech Google a je propojena s vaším Diskem a Tabulkami. Je bezúdržbová a zdarma.
Kde jsou data:
1. Seznam skupin: Google Tabulka (List "SKUPINY", sloupec A). Zde můžete dopisovat nové řádky.
2. Uložiště fotek: Hlavní složka na Google Disku. Zde vznikají podsložky pro každou skupinu.
⚠️ KRITICKÁ PRAVIDLA (NEUMAZAT / NEMĚNIT):
1. Nepřejmenovávejte list "SKUPINY" v Google Tabulce. Skript tento název hledá. Pokud ho změníte, formulář přestane fungovat.
2. Nemažte hlavní složku ani hlavní tabulku. Pokud je smažete, aplikace ztratí propojení.
3. Nemenťe vlastníka skriptu: Skript běží pod účtem, který ho nasadil (Deploy). Pokud se tomuto účtu změní heslo nebo se smaže, aplikace přestane fungovat.
Řešení problémů:
* Chyba oprávnění: Pokud aplikace hlásí chybu autorizace, musí se správce přihlásit do editoru skriptů a spustit funkci naprázdno, aby obnovil povolení.
* Změny v kódu: Pokud upravíte kód (Code.gs nebo Index.html), změna se neprojeví hned. Musíte v editoru kliknout na Nasazení (Deploy) -> Nové nasazení (New deployment) -> Nasadit. Teprve pak uvidí změnu i uživatelé.
