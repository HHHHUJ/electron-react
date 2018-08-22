# redux-saga
this is a electron appliction based on react

1. homepage是http://localhost:3000，build后，所有资源文件路径都是/static，而Electron调用的入口是file:协议，/static就会定位到根目录去，所以找不到静态文件。在package.json文件中添加homepage字段并设置为"."后，静态文件的路径就变成了相对路径，就能正确地找到了。

2. 阻塞式调用call ,非阻塞式调用fork，任务会放置在后台，工作流可以继续。

3. select用于获取数据state

4. all 并发执行

5. take 用来命令 middleware 在 Store 上等待指定的 action（监听action）

6. put 用来命令 middleware 向 Store 发起一个 action

7. call(fn, ...args) 用来命令 middleware 以参数 args 调用函数 fn 

8. fork 用来命令 middleware 以 非阻塞调用 的形式执行 fn

9. select(selector, ...args)  返回store.state上的部分数据

10. all 用来命令 middleware 并行地运行多个 Effect，并等待它们全部完成

11. cancel 用来命令 middleware 取消之前的一个分叉任务。

# redux

- reducer是一个纯函数
- mapStateToProps 输入逻辑：外部的数据（即state对象）如何转换为 UI 组件的参数
- mapDispatchToProps 输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去。
- combineReducers  把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore,
                   合并后的 reducer 可以调用各个子 reducer，并把它们的结果合并成一个 state 对象。state 对象的结构由传入的多个 reducer 的 key 决定。
- syncHistoryWithStore 创建一个增强型history，将导航事件同步到store
