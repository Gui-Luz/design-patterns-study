import { MyDatabaseClassic } from '../../creational/singleton/db/my-database-classic';

describe('Should return true and comparing two objects instaces of a Singleton object', () => {
  const db1 = MyDatabaseClassic.instance;
  const db2 = MyDatabaseClassic.instance;

  test('Instances should be the same', () => {
    expect(db1).toBe(db2);
  });
});
