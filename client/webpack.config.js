import HtmlWebpackPlugin from "html-webpack-plugin";
import HtmlWebpackInjector from "html-webpack-injector";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";

export default {
	mode: "development",
	devtool: "eval",
	entry: "./src/main.js", // Entry point for your application
	watchOptions: {
		ignored: ["build", "node_modules"],
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "React App",
			template: "./public/index.html",
			inject: true,
		}),
		new HtmlWebpackInjector(),
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css",
		}),
	],
	output: {
		clean: true,
		path: path.resolve(process.cwd(), "build"), // Output directory
		filename: "bundle.js",
		publicPath: "/",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				include: [path.resolve(process.cwd(), "src")],
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
