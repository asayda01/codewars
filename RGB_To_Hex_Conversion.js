function rgb(r, g, b) {
	r = Math.max(0, Math.min(255, r));
	g = Math.max(0, Math.min(255, g));
	b = Math.max(0, Math.min(255, b));

	let color = (r << 16) + (g << 8) + b;

	return ('00000' + color.toString(16).toUpperCase()).slice(-6);
}