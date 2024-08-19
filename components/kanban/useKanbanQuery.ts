import {useQuery} from "@tanstack/vue-query";
import {COLLECTION_DEALS, DB_ID} from "~/app.constants";
import {KANBAN_DATA} from "~/components/kanban/kanban.data";
import type {ICard} from "~/components/kanban/kanban.types";
import type {IDeal} from "~/types/deals.types";

export function useKanbanQuery() {
    return useQuery({
        queryKey: ['deals'],
        queryFn: () => DB.listDocuments(DB_ID, COLLECTION_DEALS),
        select(data) {
            console.log(data.documents.at(0))
            const newBoard = [...KANBAN_DATA];
            const deals = data.documents.at(0) as unknown as IDeal[];

            for (const deal of deals) {
                const column = newBoard.find(column => column.id === deal.status);
                if (column) {
                    column.items.push({
                        $createdAt: deal.$createdAt,
                        id: deal.$id,
                        name: deal.name,
                        price: deal.price,
                        companyName: deal.customer.name,
                        status: column.name,
                    });
                }
            }
            console.log(newBoard); // Check the transformed data
            return newBoard;
        }
    })
}