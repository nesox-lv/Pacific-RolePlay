const contentData = {
    'bienvenue': {
        title: "👋 Bienvenue",
        text: `
            <h4>Mais qu'est-ce que ce Wiki ?</h4>
            <p>Ce Wiki a pour but d'être un précieux support pour vos sessions de jeu sur le serveur. Règlement, lore, informations : tout se trouve ici. Prenez le temps de bien le consulter.</p>
            
            <h4>Comment naviguer à travers le Wiki ?</h4>
            <p>Sur votre gauche, vous trouverez une barre de navigation. Elle comporte des catégories ainsi que des sous-catégories. Vous trouverez ci-dessous les posts importants que nous vous conseillons vivement de consulter en premier lieu.</p>
        `
    },

    'lore': {
        title: "🌎 Lore Global",
        text: `
            <p><b>Lore du serveur GTA Roleplay : 2025</b></p>
            <p>Après la guerre dévastatrice qui opposa les États-Unis au Mexique, l’Amérique tente tant bien que mal de se relever. Les villes portent encore les cicatrices des affrontements, et la population, épuisée, cherche un nouveau souffle.</p>
            
            <h4>Un nouveau départ politique</h4>
            <p>Dans ce contexte fragile, le gouverneur par intérim prend une décision radicale : organiser des élections municipales afin de remettre entre les mains du peuple une partie du pouvoir décisionnel. Convaincu que San Andreas est devenue une cause perdue, un territoire trop instable et trop coûteux à gérer, il souhaite s’en délester au plus vite en transférant la responsabilité à ses dirigeants locaux.</p>
            
            <div class="info-box">
                <h4>Gestion locale</h4>
                <p>Les mairies de Los Santos et de Blaine County se retrouvent investies d’un pouvoir considérable. Elles devront désormais assurer seules la gestion complète de l’État : encadrement des entreprises, organisation des événements publics, redressement économique, maintien de l’ordre, et supervision du système judiciaire.</p>
            </div>

            <h4>L'ascension criminelle</h4>
            <p>Dans les rues du South, le chaos laissé par la guerre a ouvert la voie à de nouvelles ambitions criminelles. Des groupes émergent de l’ombre, profitant de la confusion pour étendre leur influence. Le territoire devient un échiquier mouvant où chacun tente de prendre sa place.</p>
        `
    },

    'reglement_general': {
        title: "🗃️ Règlement Général",
        text: `
            <h4>Bienvenue sur la page du règlement</h4>
            <p>Vous trouverez ici les règles qui régissent notre serveur. Veuillez les lire attentivement pour garantir une expérience de jeu agréable et harmonieuse pour tous.</p>
            <div class="info-box important">
                Tout manquement aux règles pourra entraîner des sanctions, allant d'un simple avertissement jusqu'à un bannissement définitif. Ce règlement est susceptible d'être modifié à tout moment.
            </div>
            <p>Nous vous remercions de respecter ces règlements pour maintenir une bonne ambiance sur le serveur.</p>
        `
    },

    'reglement_rp': {
        title: "📗 Règlement RP",
        text: `
            <h4>Cohérence Personnage</h4>
            <p>Il est strictement interdit de faire un personnage de moins de 18 ans sous peine de sanctions.</p>

            <h4>Arnaques</h4>
            <p>Les arnaques doivent impérativement mener à une scène pour la victime. Un vol est autorisé jusqu'à <b>50 % de l'argent</b>.</p>

            <h4>Langage HRP</h4>
            <p>Interdiction de s'exprimer avec des propos déformant l'immersion. Exemples : "wesh", "je suis dans ma tête", "regarde tes mails".</p>

            <h4>Masques & Reconnaissance</h4>
            <p>Sous un masque, il est impossible de reconnaître une voix. L'identification doit se faire par la tenue, l'accent ou les plaques.</p>

            <h4>Police & EMS</h4>
            <p>Respect du <b>Fear RP</b> obligatoire face à la police. Les EMS sont liés au serment d'Hippocrate et doivent soigner tout le monde.</p>
            
            <h4>Argent suspect</h4>
            <ul>
                <li>-2500$ : Non suspect.</li>
                <li>3000$ : Attire l'attention du LSPD.</li>
                <li>+10 000$ : Très suspect, risque de perquisition.</li>
            </ul>
        `
    },

    'reglement_hrp': {
        title: "📕 Règlement HRP",
        text: `
            <h4>Changement de Personnage</h4>
            <p>Obligation de passer par un ticket Discord pour tout changement.</p>

            <h4>Modération</h4>
            <p>En cas de problème, utilisez les tickets. Interdiction formelle de MP un membre du staff.</p>

            <h4>Discrimination / Harcèlement</h4>
            <p>Tout propos raciste, sexiste ou harcèlement entraîne un <b>bannissement permanent</b>.</p>

            <h4>StreamHack</h4>
            <p>Totalement interdit de visionner un stream en étant en jeu. Bannissement immédiat et irrévocable.</p>

            <h4>Paramètres de Jeu</h4>
            <p>Utilisation de packs "No Night", "No Fog", "No Rain" strictement interdite.</p>
        `
    },

    'reglement_911': {
        title: "🚨 Règlement 911",
        text: `
            <h4>Comportement</h4>
            <p>Interdiction d'avoir un comportement toxique ou haineux. Le double vocal est strictement interdit.</p>

            <h4>Utilisation du REC (Bodycam)</h4>
            <p>L’enregistrement vidéo à des fins RP est réservé à la Police sous conditions : Bodycam visible + <code>/me allume sa bodycam</code>. Aucun son autorisé avant l'activation.</p>

            <h4>Force de l'ordre</h4>
            <ul>
                <li>Riposte proportionnée à l'attaque.</li>
                <li>Interdiction de PIT (percuter) les motos, quads, vélos.</li>
                <li>Réglementation PPA stricte (ex: 1-5 agents = 1 arme lourde).</li>
            </ul>

            <div class="info-box">
                <h4>Radio</h4>
                <p>INTERDIT dans les souterrains, sous l'eau ou lorsque vous êtes braqués.</p>
            </div>
        `
    },

    'reglement_illegal': {
        title: "💀 Règlement Illégal",
        text: `
            <h4>Groupes & Taille</h4>
            <p>Max 15 membres pour Gangs/Orgas. Les Cliques (PF) sont limitées à 6 joueurs et n'ont accès qu'à la weed.</p>

            <h4>Quartiers & QG</h4>
            <p>Interdiction d'attaquer les QG. Le QG n'est pas une zone safe pour se cacher d'une poursuite.</p>

            <h4>Braquages</h4>
            <p>Limite de 1 supérette/jour par groupe. Obligation d'attendre 5 min l'intervention de la police avant de partir.</p>

            <h4>GunFight</h4>
            <p>Les armes blanches sont à favoriser. Interdiction de "save" une arme sur un membre mort. Le "Revenge RP" est interdit.</p>

            <div class="info-box important">
                <h4>Wipe & Quitter un groupe</h4>
                <p>Wipe complet obligatoire pour passer du légal à l'illégal. Si vous quittez un groupe officiel, wipe obligatoire et délai de 1 semaine avant d'en rejoindre un autre.</p>
            </div>
        `
    },

    'lexique': {
        title: "📝 Lexique",
        text: `
            <p><b>Mass RP :</b> Considérer la zone comme peuplée (PNJ invisibles).</p>
            <p><b>PowerGaming :</b> Faire des actions impossibles (ex: rouler après un vol plané de 50m).</p>
            <p><b>MetaGaming :</b> Utiliser des infos HRP (Discord/Stream) en jeu.</p>
            <p><b>Fear RP :</b> Simuler la peur face à une menace réelle.</p>
            <p><b>Bunny Hop :</b> Sauter pour courir plus vite (INTERDIT).</p>
            <p><b>RP SEX :</b> Strictement interdit. Bannissement permanent.</p>
        `
    },

    'touches': {
        title: "⌨️ Touches",
        text: `
            <h4>Commandes Essentielles</h4>
            <ul>
                <li><b>F1 :</b> Inventaire</li>
                <li><b>F2 :</b> Téléphone</li>
                <li><b>F3 :</b> Animations</li>
                <li><b>X :</b> Lever les mains</li>
                <li><b>/me :</b> Action physique</li>
                <li><b>/pmms :</b> Gestion audio</li>
            </ul>
        `
    },

    'boutique': {
        title: "🛒 Boutique Serveur",
        text: `
            <p>Soutenez <b>Pacific Roleplay</b> et obtenez des avantages exclusifs en jeu. Tous les fonds servent à payer l'hébergement et le développement.</p>
            
            <div class="info-box important">
                ⚠️ Une fois l'achat effectué, ouvrez un ticket "Donation" sur Discord pour recevoir vos biens.
            </div>

            <div class="shop-grid">
                
                <div class="shop-card">
                    <img src="https://videos.openai.com/az/vg-assets/task_01kj8j5761fhfbskf7ese1abgz%2F1771961520_img_0.webp?se=2026-03-08T00%3A00%3A00Z&sp=r&sv=2026-02-06&sr=b&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-03-03T12%3A59%3A29Z&ske=2026-03-10T13%3A04%3A29Z&sks=b&skv=2026-02-06&sig=LlMlxdzvOn1xFAuRM0mk4HdzWxmQWMa348lRGkyvK8g%3D&ac=oaivgprodscus2" class="shop-img" alt="VIP Gold">
                    <div class="shop-content">
                        <div class="shop-title">Pack VIP Gold</div>
                        <div class="shop-price">10.00€ / mois</div>
                        <div class="shop-desc">Priorité file d'attente, Double XP métier, Salaire x1.5, Véhicule exclusif "Neon Sport".</div>
                        <a href="#" class="btn-buy">ACHETER</a>
                    </div>
                </div>

                <div class="shop-card">
                    <img src="https://videos.openai.com/az/vg-assets/task_01kj8j5761fhfbskf7ese1abgz%2F1771961520_img_0.webp?se=2026-03-08T00%3A00%3A00Z&sp=r&sv=2026-02-06&sr=b&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-03-03T12%3A59%3A29Z&ske=2026-03-10T13%3A04%3A29Z&sks=b&skv=2026-02-06&sig=LlMlxdzvOn1xFAuRM0mk4HdzWxmQWMa348lRGkyvK8g%3D&ac=oaivgprodscus2" class="shop-img" alt="Pack Import">
                    <div class="shop-content">
                        <div class="shop-title">Pack Import</div>
                        <div class="shop-price">25.00€</div>
                        <div class="shop-desc">Importez le véhicule de votre choix (sous validation staff). Customisation offerte.</div>
                        <a href="#" class="btn-buy">ACHETER</a>
                    </div>
                </div>

                <div class="shop-card">
                    <img src="https://videos.openai.com/az/vg-assets/task_01kj8j5761fhfbskf7ese1abgz%2F1771961520_img_0.webp?se=2026-03-08T00%3A00%3A00Z&sp=r&sv=2026-02-06&sr=b&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-03-03T12%3A59%3A29Z&ske=2026-03-10T13%3A04%3A29Z&sks=b&skv=2026-02-06&sig=LlMlxdzvOn1xFAuRM0mk4HdzWxmQWMa348lRGkyvK8g%3D&ac=oaivgprodscus2" class="shop-img" alt="Pack Gang">
                    <div class="shop-content">
                        <div class="shop-title">Pack Création Gang</div>
                        <div class="shop-price">50.00€</div>
                        <div class="shop-desc">QG mappé, Coffre sécurisé, Vestiaire, Garage privé + 1 Véhicule organisation.</div>
                        <a href="#" class="btn-buy">ACHETER</a>
                    </div>
                </div>

                <div class="shop-card">
                    <img src="https://videos.openai.com/az/vg-assets/task_01kj8j5761fhfbskf7ese1abgz%2F1771961520_img_0.webp?se=2026-03-08T00%3A00%3A00Z&sp=r&sv=2026-02-06&sr=b&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-03-03T12%3A59%3A29Z&ske=2026-03-10T13%3A04%3A29Z&sks=b&skv=2026-02-06&sig=LlMlxdzvOn1xFAuRM0mk4HdzWxmQWMa348lRGkyvK8g%3D&ac=oaivgprodscus2" class="shop-img" alt="Custom Plaque">
                    <div class="shop-content">
                        <div class="shop-title">Plaque Personnalisée</div>
                        <div class="shop-price">5.00€</div>
                        <div class="shop-desc">Changez l'immatriculation d'un véhicule de votre choix (8 caractères max).</div>
                        <a href="#" class="btn-buy">ACHETER</a>
                    </div>
                </div>

            </div>
        `
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const titleEl = document.getElementById('c-title');
    const textEl = document.getElementById('c-text');
    const contentArea = document.getElementById('content-area');

    function loadContent(id, skipScroll = false) {
        const data = contentData[id];
        if (!data) return;

        // Animation de sortie
        contentArea.style.opacity = '0';

        setTimeout(() => {
            titleEl.innerHTML = data.title;
            textEl.innerHTML = data.text;

            // Animation d'entrée
            contentArea.style.opacity = '1';
            contentArea.classList.add('fade-in');

            // Scroll en haut de la zone de texte seulement si demandé
            if (!skipScroll) {
                window.scrollTo({ top: 400, behavior: 'smooth' });
            }
        }, 300);
    }

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            // Gestion de l'état actif
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            const category = item.getAttribute('data-cat');
            loadContent(category);
        });
    });

    // Chargement initial - On ne scroll pas
    loadContent('bienvenue', true);
});
