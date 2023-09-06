# 算法本

---

## JS38 高频数据类型

请补全JavaScript代码，要求找到参数数组中出现频次最高的数据类型，并且计算出出现的次数，要求以数组的形式返回。  
注意：  

1. 基本数据类型之外的任何引用数据类型皆为"object"  
2. 当多种数据类型出现频次相同时将结果拼接在返回数组中，出现次数必须在数组的最后

## 示例1

输入：

__findMostType([0,0,'',''])

输出：

['number','string',2]或['string','number',2]

```js
const _findMostType = array => {
        // 补全代码
        let result = array
            .map(item => typeof item)
            .sort()
        let judgeArray = [...new Set(result)]
            .map(item => result.lastIndexOf(item) - result.indexOf(item) + 1)

        if ([...new Set(judgeArray)].length === 1){
            let sum = judgeArray.reduce((acc,cur) => acc = acc + cur,0)
            return [...new Set(result),sum]
        }else{
            let max = judgeArray.reduce((acc,cur) => {
                if(acc<cur) acc = cur
                return acc
            },0)
            return [...new Set(result),max]
        }
    }

    console.log(_findMostType([1, '1', {}, {}, 2, 3, 4, 3, 3, ',', ',', '','','']))
    console.log(_findMostType([1, '1', 2, 3, 3, ',', ',', '']))
```

## JS39 字体高亮

请补全JavaScript代码，实现一个搜索字体高亮的效果。要求如下：  

1. 在input框中输入要搜索的内容，当点击查询按钮时，被搜索的字体样式变为加粗，背景色变为'yellow'  
2. 重新输入搜索文字，点击查询按钮时，去掉上一次的搜索效果，高亮显示效果只加在本次搜索文字上  
3. 如果搜索不到相关内容，清除之前的效果  
   注意：  
4. 需要加粗的文字请使用b标签包裹  
5. 必须使用DOM0级标准事件（onclick）

```js

```