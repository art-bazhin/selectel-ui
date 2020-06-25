export function createBemFn(block: string) {
  return function (
    element?: string | null,
    modifiers?: {
      [key: string]: string | boolean;
    }
  ) {
    const baseClass = block + (element ? '__' + element : '');
    let classString = baseClass;

    if (modifiers) {
      Object.keys(modifiers).forEach((key) => {
        if (!modifiers[key]) return;

        const modString =
          modifiers[key] === true ? `${key}` : `${key}_${modifiers[key]}`;

        classString += ` ${baseClass}--${modString}`;
      });
    }

    return classString;
  };
}
