// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

export function patchIds<T = unknown>(obj: T): T {
  if (Array.isArray(obj)) {
    return obj.map(patchIds) as unknown as T;
  } else if (obj !== null && typeof obj === "object") {
    const newObj: Record<string, unknown> = {};

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        newObj[key] = patchIds((obj as Record<string, unknown>)[key]);
      }
    }

    if ("id" in obj && "__typename" in obj) {
      const typename = (obj as Record<string, unknown>).__typename;
      const id = (obj as Record<string, unknown>).id;

      if (typeof typename === "string" && typeof id === "string") {
        newObj.id = `${typename}:${id}`;
      }
    }

    return newObj as T;
  }

  return obj;
}

export const denormalizeId = (compositeId: string): string => {
  const parts = compositeId.split(":");
  return parts.length === 2 ? parts[1] : compositeId;
};
