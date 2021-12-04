export const throttle = (callback: Function, limit: number) => {
	var wait = false; // initial step when we are nit waiting
	return function () {
		// returnimg a throttled function
		if (!wait) {
			// while not waiting
			callback.call(null); // Executing users function
			wait = true; // Preventing future invocations
			setTimeout(function () {
				// after certain interval of time
				wait = false; // allow future invocations
			}, limit);
		}
	};
};
