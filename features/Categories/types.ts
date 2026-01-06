import { categoryInfer } from "./validation";


export type categoryType<T> = categoryInfer & {
    icon: T,
}