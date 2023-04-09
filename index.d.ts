interface StorageClear {(identifier:string|object, clear:true):void}
declare global {
	interface ExtendedSharedStorage {(identifier:string|object):{}}
}

interface SharedStorage extends StorageClear, ExtendedSharedStorage {}
declare const storage:SharedStorage;
export = storage;
