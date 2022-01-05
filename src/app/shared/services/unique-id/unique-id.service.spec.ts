import { UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, () => {

  let service: UniqueIdService = null;

  beforeEach(() => {
    service = new UniqueIdService();
  });

  it('#generateUniqueIdWithPrefix should generate id when called with prefix', () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();

    expect(true).toBeTrue();
    expect(true).toBe(true);
    expect(true).toBeTruthy();
  });

  it('#generateUniqueIdWithPrefix should not generate duplicated ids when called multiple times', () => {
    const ids = new Set();
    for(let i = 0; i < 50; i++){
      ids.add(service.generateUniqueIdWithPrefix('app'));
    };
    expect(ids.size).toBe(50);
  });

  it('#getNumberOfGeneratedUniqueIds should return the number of generateIds when called', () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it('#generateUniqueIdWithPrefix should throw when called with empty', () => {
    // expect(() => service.generateUniqueIdWithPrefix(null)).toThrow();
    // expect(() => service.generateUniqueIdWithPrefix(undefined)).toThrow();
    // expect(() => service.generateUniqueIdWithPrefix('')).toThrow();
    const emptyValues = [null, undefined, '', '0', '1'];
    emptyValues.forEach(emptyValue => {
      expect(() => service.generateUniqueIdWithPrefix(emptyValue)).withContext(`Empty value: ${emptyValue}`).toThrow();
    });
  });
});
