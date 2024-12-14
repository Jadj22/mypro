// Importation de "Head" depuis Next.js pour gérer les balises <head> du document HTML.
import Head from 'next/head';
// Importation de React (obligatoire pour les fichiers TSX jusqu'à React 17).
import React from 'react';

// Déclaration d'une interface Props pour typer les propriétés acceptées par le composant.
interface Props {
    title?: string;          // Propriété optionnelle pour le titre de la page.
    description?: string;    // Propriété optionnelle pour la meta description.
}

// Définition du composant fonctionnel "seo" qui accepte des props conformes à l'interface "Props".
const seo = (props: Props) => {
    return (
        <div>
            {/* Utilisation du composant "Head" pour ajouter des balises dans le <head> du document */}
            <Head>
                {/* Ajout de la balise <title>, avec un fallback par défaut si props.title n'est pas fourni */}
                <title>{props.title || 'Default Title'}</title>

                {/* Ajout de la balise meta description, avec un fallback si props.description est vide */}
                <meta name="description" content={props.description || 'Default Description'} />
            </Head>
        </div>
    )
}

// Exportation par défaut du composant "seo" pour pouvoir l'importer dans d'autres fichiers.
export default seo;
