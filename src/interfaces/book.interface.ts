export interface IBook {
  id: string;
  title: string;
  author: string;
  year?: string;
  firestoreId?: string; // Adicione esta linha
}