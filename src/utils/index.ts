export const normalizeData = (data: any) => {
  if (!data) return data;

  return {
    ...data,
    character: {
      ...data.character,
      id: `${data.character.__typename}:${data.character.id}`,
    },
  };
};
