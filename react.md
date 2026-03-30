1. JSX 本质与虚拟 DOM 联系
问题：不仅要知道 JSX 是语法糖，更要理解它被编译后的结果 (React.createElement)，并说明它如何与虚拟 DOM 产生联系。

简化答案：

JSX 被 Babel 编译为 React.createElement 调用，返回一个包含 type、props 等属性的普通 JS 对象，即虚拟 DOM 节点。

React 通过对比新旧虚拟 DOM 树（Diff）计算出最小更新，再批量更新真实 DOM，提升性能。

2. 函数组件与类组件的区别与选择
问题：清晰阐述函数组件与类组件的适用场景及区别。在 React 18+ 时代，为什么函数组件成为主流？深入讨论 Hooks 带来的逻辑复用和代码组织优势。

简化答案：

区别：类组件需继承 React.Component，使用 this.state、生命周期方法；函数组件通过 Hooks 实现状态、副作用等。

适用场景：类组件主要用于错误边界；函数组件 + Hooks 可覆盖所有其他场景。

函数组件成为主流原因：Hooks 让函数组件具备完整能力，代码更简洁；自定义 Hooks 实现逻辑复用无嵌套；与 React 18 并发特性无缝集成。

3. State vs Props
问题：Props 是只读的、从父级传入；State 是组件内部可变数据。结合实际例子说明它们如何共同驱动组件渲染。

简化答案：

Props：父组件传入，子组件不可修改，用于组件间通信。

State：组件内部维护，通过 setState/useState 更新，变化时触发重新渲染。

共同驱动：父组件 state 作为 props 传递给子组件，子组件通过回调修改父组件 state，形成单向数据流，任何变化都会触发重新渲染。

4. 关键 Hooks 进阶用法
问题：深入 useState（批处理、函数式更新）、useEffect（执行时机、依赖、清理）、useRef（跨渲染保存数据）、useMemo/useCallback（性能优化）的进阶用法。

简化答案：

useState：React 18 自动批处理所有更新；函数式更新 setCount(prev => prev+1) 避免闭包陈旧。

useEffect：在渲染后执行，依赖项需完整；返回清理函数用于取消订阅、清除定时器等；注意无限循环和遗漏依赖。

useRef：保存可变数据（如定时器 ID），修改不触发渲染；也可获取 DOM。

useMemo/useCallback：缓存计算结果和函数引用，配合 React.memo 避免子组件不必要重渲染。

5. 代码分割
问题：了解并使用 React.lazy 和 <Suspense> 进行组件懒加载，减少首屏 bundle 体积。

简化答案：

React.lazy(() => import('./Component')) 动态导入组件，返回一个可渲染的组件。

<Suspense fallback={<Loading />}> 包裹懒加载组件，在加载过程中显示 fallback。

通常配合路由实现按需加载，有效减少首屏 JS 体积。

6. 组件通信与逻辑复用
问题：

受控组件 vs 非受控组件：差异及何时使用 ref 或 state。

高阶组件 (HOC) 与 Render Props：解决逻辑复用，Hooks 出现后地位变化。

自定义 Hooks：目前最推荐的逻辑复用方式，举例抽取数据请求、表单校验等。

简化答案：

受控组件：值由 React state 控制，通过 onChange 更新，推荐大多数场景。

非受控组件：值由 DOM 自身维护，通过 ref 获取，适用于简单表单或文件上传。

HOC / Render Props：经典模式，解决横切关注点，但存在嵌套地狱；Hooks 出现后，自定义 Hooks 成为主流。

自定义 Hooks：以 use 开头的函数，内部可使用其他 Hooks，将逻辑抽离复用，组件更纯粹。

7. 深入渲染机制
问题：

useLayoutEffect vs useEffect：执行时机差异及适用场景。

forwardRef：如何将 ref 从父组件传递到子组件的特定 DOM 元素。

简化答案：

useLayoutEffect：在 DOM 变更后、浏览器绘制前同步执行，适用于读取/修改布局（避免闪烁）。

useEffect：在绘制后异步执行，适合大多数副作用。

forwardRef：函数组件通过 React.forwardRef 接收父组件传入的 ref，并附加到内部 DOM 元素；结合 useImperativeHandle 可自定义暴露的方法。

8. 状态管理方案选型
问题：

Context API：适用场景（全局低频状态）及性能优化（拆分 Context、使用 memo 避免重渲染）。

Redux / Zustand / MobX：Redux 的单向数据流、中间件、Redux Toolkit 简化样板代码。

选型决策：Context API 和 Redux 如何选择。

简化答案：

Context API：适合主题、语言、认证等低频更新全局状态；性能优化需拆分 Context 和稳定 Provider 值。

Redux：单向数据流（Action → Reducer → Store → View），中间件处理副作用（thunk/saga），RTK 大幅减少样板代码。

选型建议：简单低频用 Context；复杂高频、需调试工具、团队规范时用 Redux；轻量项目可选 Zustand。

9. 虚拟 DOM 与调和 (Reconciliation)
问题：

虚拟 DOM 本质：轻量 JS 对象，真实 DOM 映射。

Diff 算法原理：同层比较、类型不同则重建、key 优化；为何比直接操作真实 DOM 高效。

简化答案：

虚拟 DOM：JS 对象描述 UI 结构。

Diff 策略：只比较同层节点；类型不同直接销毁重建；列表使用 key 优化复用。

高效原因：批量更新、减少 DOM 操作，在内存中计算差异，避免频繁重排/重绘。

10. React 18 新特性
问题：

并发渲染 (Concurrent Rendering)：可中断、可暂停、可恢复，提升响应性。

startTransition：标记非紧急更新，让出主线程。

自动批处理 (Automatic Batching)：在更多场景下合并状态更新。

简化答案：

并发渲染：将渲染拆分为可中断的任务，优先处理用户交互。

startTransition：将低优先级更新包裹起来，保证紧急更新不被阻塞。

自动批处理：在 Promise、setTimeout 等异步中也合并多次更新，减少渲染次数。

11. 工程化思维
问题：

项目架构：如何组织大规模 React 项目文件，设计可复用组件库。

测试策略：Jest + React Testing Library 进行单元测试和集成测试。

服务端渲染 (SSR) / 静态站点生成 (SSG)：Next.js 解决 SEO 和首屏问题，Hydration 概念。

简化答案：

项目架构：按功能模块划分目录（features/），组件库遵循原子设计，使用 Storybook 文档化。

测试策略：Jest 运行测试，React Testing Library 模拟用户行为，避免测试实现细节。

SSR/SSG：Next.js 提供服务端渲染和静态生成，生成完整 HTML 提升 SEO 和首屏速度；Hydration 是客户端为已有 HTML 注入交互逻辑的过程。