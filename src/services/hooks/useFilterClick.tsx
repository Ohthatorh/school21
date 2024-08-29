export const useClickFilter = (code: string, value: string) => {
  const onClick = () => {
    const checkbox: any = document.querySelector(
      `.checkbox[data-name="checkbox-catalog-filter"][data-filter="${code}"][value="${value}"]`
    );
    if (checkbox) checkbox.click();
  };
  return [onClick] as const;
};
