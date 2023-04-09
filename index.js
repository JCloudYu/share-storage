const storage_map = {};
const volatile= new WeakMap();
module.exports = function(key, clear=false) {
	if ( Object(key) === key && !(key instanceof String) ) {
		if ( clear || volatile.get(key) === undefined ) {
			volatile.set(key) = {};
		}

		return volatile.get(key);
	}

	

	if ( !(key instanceof String) || (typeof key !== "string") ) {
		throw new TypeError("Input key must be a string for static storage or an object for volitile storage!");
	}
	
	if ( clear === true ) {
		delete storage_map[key];
		return;
	}

	return (storage_map[key] = storage_map[key]||{});
};