const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "development",
	entry: "./index.js", // Entry point for your application,
	target: "node",
	output: {
		clean: true,
		path: path.resolve(process.cwd(), "build"), // Output directory
		filename: "bundle.js",
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css",
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							["@babel/preset-env", { targets: "defaults" }],
							["@babel/preset-react"],
						],
					},
				},
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
		],
	},
};
