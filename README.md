# Fotodokumentace-app-Mezi-n-mi-o.p.s.

# 📸 Archivace Fotek - Mezi námi (Google Apps Script Web App)

Jednoduchá a efektivní webová aplikace (PWA) pro sběr a archivaci fotografií z akcí neziskové organizace **Mezi námi**.

Aplikace slouží lektorům k nahrávání fotografií přímo z mobilního telefonu do strukturovaných složek na Google Drive. Řešení je postaveno na Google Apps Script, je bezplatné na provoz a optimalizované pro mobilní data.

---

## 🚀 Klíčové Funkce

* **Autentizace nepožadována:** Aplikace je přístupná přes veřejný odkaz (nebo QR kód) pro kohokoliv, kdo ho má (nastavení "Access: Anyone").
* **Chytré úložiště:** Automaticky vytváří/vyhledává složky na Google Drive:
    * `Hlavní složka` -> `Složka Skupiny` -> `Datum - Název akce`.
* **Našeptávač skupin:** Seznam skupin se dynamicky načítá z Google Tabulky (administrátor může snadno přidávat nové skupiny bez zásahu do kódu).
* **Optimalizace dat (Client-side Compression):** Fotky jsou před odesláním zmenšeny a komprimovány přímo v prohlížeči uživatele.
    * Max rozlišení: 1920px (Full HD).
    * Komprese: JPEG 70%.
    * *Výsledek: Místo 100 MB se nahrává např. 5 MB.*
* **Responzivní design:** UI je postaveno na **Tailwind CSS** a laděno pro mobilní telefony (včetně fixů pro iPhone/iOS inputy).
* **Brandové barvy:** Design respektuje vizuální identitu klienta (Oranžová/Zelená).

---

## 🛠️ Technický Stack

* **Backend:** Google Apps Script (.gs)
* **Frontend:** HTML5, JavaScript (ES6), Tailwind CSS (přes CDN).
* **Databáze:** Google Sheets (pro seznam skupin).
* **File Storage:** Google Drive.

---

## ⚙️ Konfigurace a Instalace

Pokud potřebujete aplikaci nasadit na nový Google Workspace účet, postupujte takto:

### 1. Příprava Google prostředí
1.  Vytvořte **Hlavní složku** na Google Drive (např. "FOTODOKUMENTACE"). Zkopírujte si její **ID** z URL

