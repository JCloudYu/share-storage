const storage_map = {};
module.exports = function(key, clear=false) {
	if ( typeof key !== "string" ) {
		throw new TypeError("Destination storage key must be a string!");
	}

	if ( clear === true ) {
		delete storage_map[key];
		return;
	}

	return (storage_map[key] = storage_map[key]||{});
};