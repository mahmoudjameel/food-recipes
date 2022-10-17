type StackParamList = {
  MealOverview: { categoryId: string };
  MealCategories: undefined;
  MealDetails: { mealId: string } | undefined;
};

export { StackParamList };
