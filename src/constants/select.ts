import { SignificanceTasks } from "@/global-models/significance";

export const selectItemsGrade: {
  name: "Easy" | "Medium" | "Hard";
  value: SignificanceTasks;
}[] = [
  { name: "Easy", value: "easy" },
  { name: "Medium", value: "medium" },
  { name: "Hard", value: "hard" },
];

export const selectItemsTypeTask = [
  { name: "Починка техники", value: "Починка" },
  { name: "Закупка инструментов", value: "Закупка" },
  { name: "Работы с документами", value: "Документы" },
];
