interface StorageClear {(identifier:string, clear:true):void}
declare global {
	interface ExtendedSharedStorage {(identifier:string):{}}
}

interface SharedStorage extends StorageClear, ExtendedSharedStorage {}
declare const storage:SharedStorage;
export = storage;
