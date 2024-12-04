import kyInstance from "@/lib/ky";
import { FollowerInfo } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

// Cette fonction utilise la bibliothèque React Query pour récupérer des informations sur les abonnés d'un utilisateur donné.
// Elle envoie une requête à l'API pour obtenir les données des abonnés et retourne le résultat de la requête,
// permettant ainsi de gérer facilement l'état de chargement et les erreurs.

export default function useFollowerInfo(
  userId: string,
  initialState: FollowerInfo,
) {
  const query = useQuery({
    queryKey: ["follower-info", userId],
    queryFn: () =>
      kyInstance.get(`/api/users/${userId}/followers`).json<FollowerInfo>(),
    initialData: initialState,
    staleTime: Infinity,
  });

  return query;
}
