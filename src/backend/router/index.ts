import * as trpc from '@trpc/server';
import { z } from 'zod';
import restaurants from './restaurants.json'

export const appRouter = trpc
  .router()
  .query("get-restaurant-by-id", {
    input: z.object({ id: z.number() }),
    resolve({input}) {
      const restaurant = restaurants.data.find(restaurant => restaurant.id === input.id);
      if(restaurant) {
         return {
          id: restaurant.id,
          name: restaurant.name,
          image_path: restaurant.img,
        }
      }
    }
  })
// export type definition of API
export type AppRouter = typeof appRouter;

