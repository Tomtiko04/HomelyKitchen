export const formatCurrency = (value) =>
	new Intl.NumberFormat("en-NG", {
		style: "currency",
		currency: "NGN",
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	})
		.format(Math.round(value))
		.replace("NGN", "#");
