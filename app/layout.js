
import '../styles/globals.css';

export const metadata = {
  title: 'IDGuard - Vérification d’identité',
  description: 'Simulateur pédagogique de sécurité numérique',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 text-gray-900 font-sans">{children}</body>
    </html>
  );
}
