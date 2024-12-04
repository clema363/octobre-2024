"use server";

import { lucia, validateRequest } from "@/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Fonction asynchrone pour gérer la déconnexion
export async function logout() {
  // Vérification de la validité de la session actuelle
  const { session } = await validateRequest();

  // Si aucune session n'est trouvée, on lance une erreur
  if (!session) {
    throw new Error("Unauthorized");
  }

  // Invalidation de la session actuelle dans Lucia
  await lucia.invalidateSession(session.id);

  // Création d'une nouvelle session vide
  const sessionCookie = lucia.createBlankSessionCookie();

  // Définition du cookie de session avec les nouvelles valeurs
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );

  return redirect("/login");
}
