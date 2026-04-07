# README EN:

# Fotodokumentace-app

# 📸 Photo Archiving (Google Apps Script Web App)

A simple and effective web application (PWA) for collecting and archiving photos from events organized by the client.

The application serves lecturers, allowing them to upload photos directly from their mobile phones into structured folders on Google Drive. The solution is built on Google Apps Script, is free to operate, and optimized for mobile data usage.

---

## 🚀 Key Features

* **No Authentication Required:** The app is accessible via a public link (or QR code) to anyone with access (deployment setting "Access: Anyone").
* **Smart Storage:** Automatically creates/locates folders on Google Drive:
* `Root Folder` -> `Group Folder` -> `Date - Event Name`.


* **Group Autocomplete:** The list of groups is dynamically loaded from a Google Sheet (administrators can easily add new groups without modifying the code).
* **Data Optimization (Client-side Compression):** Photos are resized and compressed directly in the user's browser before uploading.
* Max resolution: 1920px (Full HD).
* Compression: JPEG 70%.
* *Result: Instead of uploading 100 MB, the upload is reduced to approx. 5 MB.*


* **Responsive Design:** The UI is built on **Tailwind CSS** and fine-tuned for mobile phones (including specific fixes for iPhone/iOS inputs).
* **Brand Colors:** The design respects the client's visual identity (Orange/Green).

---

## 🛠️ Tech Stack

* **Backend:** Google Apps Script (.gs)
* **Frontend:** HTML5, JavaScript (ES6), Tailwind CSS (via CDN).
* **Database:** Google Sheets (for the group list).
* **File Storage:** Google Drive.

---

## ⚙️ Configuration and Installation

If you need to deploy the application to a new Google Workspace account, follow these steps:

### 1. Google Environment Preparation

1. Create a **Root Folder** on Google Drive (e.g., "PHOTO_DOCUMENTATION"). Copy its **ID** from the URL.

# README CZ:
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

