export class EnumUtils {
  static enumToArray<T extends Record<string, string>>(enumObj: T): Array<{ name: string }> {
    return Object.values(enumObj).map((value) => ({
      name: value,
    }));
  }

  static enumToStringArray<T extends Record<string, string>>(enumObj: T): string[] {
    return Object.values(enumObj);
  }
}
