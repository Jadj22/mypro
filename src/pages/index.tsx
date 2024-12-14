// Importation du composant Seo depuis son chemin relatif.
// "@/ui/components/seo" utilise un alias défini dans votre configuration (ex: tsconfig.json ou next.config.js).
import Seo from '@/ui/components/seo';

// Déclaration du composant fonctionnel "IndexPage" qui représente la page d'accueil.
function IndexPage() {
  return (
    <>
      {/* Utilisation du composant Seo pour définir les balises <title> et <meta description> */}
      <Seo title="Page d'accueil" description="Description de la page" />

      {/* Contenu principal de la page */}
      <h1 className='flex'>Hello World</h1>
    </>
  );
}

// Exportation par défaut du composant "IndexPage" pour pouvoir être utilisé comme page dans Next.js.
export default IndexPage;
