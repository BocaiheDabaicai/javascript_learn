# JavaScript

- javascript学习 于 2023.05.09 开仓

---

## 第14章 最后的项目

#### 14.1 项目部署

1. 使用`npm init`，创建`packge.json`，得到包管理工具

2. 使用`npm i parcel`，创建捆绑工具，将文件代码转化为浏览器可识别的代码

3. 小提示，启动代码`npm run start`，但可以省略为`npm start`

#### 14.2 初始化加载数据、渲染页面

1. 加载数据，从请求API处获取数据

2. 渲染页面，拿到DOM元素，使用`innerAdjacentHTML`方法加载

3. 补充加载中过程

重要代码如下：

```js
// 1) 加载数据 
        const response = await fetch(
            `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`
            // `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604691c37cdc054bd0c0`
        )
        const data = await response.json();

        if (!response.ok) throw new Error(`${data.message} (${response.status})`)

        console.log(response, data)

        let {data: {recipe}} = data
        recipe = {
            id: recipe.id,
            image: recipe.image_url,
            ingredients: recipe.ingredients,
            publisher: recipe.publisher,
            servings: recipe.servings,
            sourceUrl: recipe.source_url,
            title: recipe.title,
        }
    

// 2) 渲染页面 
recipeContainer.insertAdjacentHTML('afterbegin', markup) 

// 3) 加载中 
const renderSpinner = function (parentEl) {
    const markup = `
        <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>
    `;

    parentEl.insertAdjacentHTML('afterbegin', markup)
}
```