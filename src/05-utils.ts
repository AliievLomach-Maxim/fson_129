/**
 * Utility Types
 *
 * Мета: показати найпоширеніші utility types.
 */

// Базовий інтерфейс
interface User {
  id: number
  name: string
  email: string // необов'язкове поле
}

/* ---------- Partial<T> ---------- */
// Робить усі поля необов'язковими
// type PartialUser = ;
// const pUser: PartialUser = { name: "Anna" };

/* ---------- Required<T> ---------- */
// Робить усі поля обов'язковими
// type RequiredUser = ;
// const reqUser: RequiredUser = { id: 1, name: 'A' }; // помилка — email відсутній

/* ---------- Readonly<T> ---------- */
// Робить усі поля тільки для читання
// type ReadonlyUser = ;
// const rUser = { id: 1, name: "Bob", email: "b@example.com" };
// rUser.name = 'Rob'; // помилка — readonly

/* ---------- Pick<T, K> ---------- */
// Pick<T, K> вибирає підмножину полів
// type UserPreview = Pick<User, "id" | "name">;
// const up = { id: 1, name: "Preview" };

/* ---------- Omit<T, K> ---------- */
// Проти Pick — виключає наведені поля
// type WithoutEmail = Omit<User, "email">;
// const we = { id: 2, name: "NoEmail" };
