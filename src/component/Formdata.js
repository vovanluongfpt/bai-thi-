import Dexie from 'dexie';
export const dkts = new Dexie('myDatabase');
dkts.version(1).stores({
  dangkythemsach: '++id, name , atho ,namxuatban' // Primary key and indexed props
});
