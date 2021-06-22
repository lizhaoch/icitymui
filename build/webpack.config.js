const path = require("path")
const fs = require("fs")

module.exports = {
  readComponentList() {
    let packageList = {}
    let file = path.join(__dirname, "../components.json")
    let components = JSON.parse(fs.readFileSync(file, "utf-8"))
    for (let key in components) {
      packageList[key] = path.join(__dirname, "../" + components[key])
    }
    return packageList
  },
  resolve() {
    return {
      extensions: [".js", ".vue", ".json", "css"],
      alias: { vue$: "vue/dist/vue.esm.js" }
    }
  },
  _module() {
    return {
      rules: [
        { test: /\.css$/, use: ["style-loader", "css-loader"] },
        { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
        { test: /\.js$/, loader: "babel-loader" },
        { test: /\.vue$/, loader: "vue-loader" },
        { test: /\.(woff)|(svg)|(eot)|(ttf)$/, loader: ["url-loader"] },
        {
          test: /\.(jpg|png)$/,
          loader: "file-loader",
          options: {
            name: "res/[hash:8][name].[ext]",
          }
        }
      ]
    }
  }
}
